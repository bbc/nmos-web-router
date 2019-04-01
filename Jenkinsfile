@Library("rd-apmm-groovy-ci-library@v1.x") _

/*
- Starts up a Docker container, runs the lint, test and build targets in package.json
- Stashes resulting build artifacts
- Switches back to one of the bare-metal Agents and unstashes build artifacts
- Builds Debian packages, and uploads to the repos
- Reports status to GitHub
*/
pipeline {
    agent {
        label "ubuntu&&apmm-slave"
    }
    options {
        ansiColor('xterm') // Add support for coloured output
        buildDiscarder(logRotator(numToKeepStr: '10')) // Discard old builds
    }
    parameters {
        booleanParam(name: "FORCE_DEBUPLOAD", defaultValue: false, description: "Force Debian package upload")
    }
    environment {
        http_proxy = "http://www-cache.rd.bbc.co.uk:8080"
        https_proxy = "http://www-cache.rd.bbc.co.uk:8080"
        HOME="/var/tmp/home-for-npm"  // Override the npm cache directory to avoid: EACCES: permission denied, mkdir '/.npm'
        yarn_cache_folder="/var/tmp/yarn-cache" // give an explicit location for the cache inside the jenkins workspace
    }
    stages {
        stage("Clean Environment") {
            steps {
                sh 'git clean -fdx'
            }
        }
        stage("Lint, test and build in Docker container") {
            agent {
                dockerfile {
                    // Mount the Jenkins agent's certificates
                    args "-v /etc/pki/tls/:/etc/pki/tls/"
                }
            }
            steps {
                // bbcNpmRunScript("ci")
                bbcNpmRunScript("build")
                stash(name: "built-site", includes: "build/**")
            }
        }
        stage ("Debian Source Build") {
            steps {
                script {
                    env.debSourceBuild_result = "FAILURE"
                }
                bbcGithubNotify(context: "deb/sourceBuild", status: "PENDING")

                unstash(name: "built-site")
                sh "scripts/make_dsc.sh"

                bbcPrepareDsc()
                stash(name: "deb_dist", includes: "deb_dist/*")
                script {
                    env.debSourceBuild_result = "SUCCESS" // This will only run if the steps above succeeded
                }
            }
            post {
                always {
                    bbcGithubNotify(context: "deb/sourceBuild", status: env.debSourceBuild_result)
                }
            }
        }
        stage ("Build Packages") {
            parallel{
                stage ("Build Deb with pbuilder") {
                    steps {
                        script {
                            env.pbuilder_result = "FAILURE"
                        }
                        bbcGithubNotify(context: "deb/packageBuild", status: "PENDING")
                        // Build for all supported platforms and extract results into workspace
                        bbcParallelPbuild(
                            stashname: "deb_dist",
                            dists: bbcGetSupportedUbuntuVersions(),
                            arch: "amd64")
                        script {
                            env.pbuilder_result = "SUCCESS" // This will only run if the steps above succeeded
                        }
                    }
                    post {
                        success {
                            archiveArtifacts artifacts: "_result/**"
                        }
                        always {
                            bbcGithubNotify(context: "deb/packageBuild", status: env.pbuilder_result)
                        }
                    }
                }
            }
        }
        stage ("Upload Debian Package") {
            // Duplicates the when clause of each upload so blue ocean can nicely display when stage skipped
            when {
                anyOf {
                    expression { return params.FORCE_DEBUPLOAD }
                    expression {
                        bbcShouldUploadArtifacts(branches: ["master"])
                    }
                }
            }
            steps {
                script {
                    env.debUpload_result = "FAILURE"
                }
                bbcGithubNotify(context: "deb/upload", status: "PENDING")
                script {
                    for (def dist in bbcGetSupportedUbuntuVersions()) {
                        bbcDebUpload(sourceFiles: "_result/${dist}-amd64/*",
                                        removePrefix: "_result/${dist}-amd64",
                                        dist: "${dist}",
                                        apt_repo: "ap/python")
                    }
                }
                script {
                    env.debUpload_result = "SUCCESS" // This will only run if the steps above succeeded
                }
            }
            post {
                always {
                    bbcGithubNotify(context: "deb/upload", status: env.debUpload_result)
                }
            }
        }
    }
}