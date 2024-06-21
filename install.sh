#!/bin/bash

if [ "$EUID" -ne 0 ]
  then echo "Please run as root"
  exit
fi

set -e

# Install dependencies
apt-get install -y curl git

# Capture the top directory
TOP_DIR=$(dirname $(readlink -f $0))

# Add apt repositories for NodeJS and Yarn
curl -sL https://deb.nodesource.com/setup_12.x | bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

# Install NodeJS and Yarn
apt-get update && apt-get install -y nodejs yarn

# Provision a Node
#!/usr/bin/env bash

export DEBIAN_FRONTEND=noninteractive
export DEB_BUILD_OPTIONS=nocheck
APT_TOOL='apt-get -o Debug::pkgProblemResolver=yes --no-install-recommends -y'

# All service are run as an ipstudio user
if ! grep -q ipstudio /etc/passwd; then
    useradd ipstudio
    mkdir -p /home/ipstudio
    chown -R ipstudio /home/ipstudio
fi

sed -i 's/# deb-src/deb-src/' /etc/apt/sources.list
apt-get update
apt-get install -y devscripts debhelper equivs libsystemd-dev \
    libxml2-dev apache2 apache2-dev dh-systemd tox
apt-get install -y python3 python3-pip python3-mock dh-python \
    python3-werkzeug python3-flask python3-gevent python3-greenlet \
    python-setuptools python-all python3-setuptools python3-stdeb \
    python-is-python3

git submodule update --init
NMOS_DEP_DIR=${TOP_DIR}/nmos-dep

cd ${NMOS_DEP_DIR}/nmos-common
pip3 install -e .
install -m 666 /dev/null /var/log/nmos.log

cd ${NMOS_DEP_DIR}/nmos-reverse-proxy
sed -i "s/, python3-nmoscommon//" stdeb.cfg
make dsc
mk-build-deps --install deb_dist/nmosreverseproxy_*.dsc --tool "$APT_TOOL"
make deb
dpkg -i dist/python3-nmosreverseproxy_*_all.deb
apt-get -f -y install

cd ${NMOS_DEP_DIR}/nmos-mdns-bridge
sed -i "s/, python3-nmoscommon//" stdeb.cfg
make dsc
mk-build-deps --install deb_dist/mdnsbridge_*.dsc --tool "$APT_TOOL"
make deb
dpkg -i dist/python3-mdnsbridge_*_all.deb
apt-get -f -y install

cd ${NMOS_DEP_DIR}/nmos-node
sed -i "s/, python3-nmoscommon//" stdeb.cfg
make dsc
mk-build-deps --install deb_dist/nodefacade_*.dsc --tool "$APT_TOOL"
make deb
dpkg -i dist/python3-nodefacade_*_all.deb
apt-get -f -y install

service apache2 restart

# Move back to the starting directory
cd $TOP_DIR
