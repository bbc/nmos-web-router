#!/bin/bash
if [ "$EUID" -ne 0 ]
  then echo "Please run as root"
  exit
fi

# Install dependencies
apt-get install -y curl git

# Capture the working directory
DIR=$(pwd)

# Add apt repositories for NodeJS and Yarn
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

# Install NodeJS and Yarn
apt-get update && apt-get install -y nodejs yarn

# Create and cd into the directory required to run the provision_node script
mkdir /home/vagrant
cd /home/vagrant

# Provision a Node
#!/usr/bin/env bash

export DEBIAN_FRONTEND=noninteractive
export DEB_BUILD_OPTIONS=nocheck
APT_TOOL='apt-get -o Debug::pkgProblemResolver=yes --no-install-recommends -y'

# All service are run as an ipstudio user
useradd ipstudio
mkdir /home/ipstudio
chown -R ipstudio /home/ipstudio

sed -i 's/# deb-src/deb-src/' /etc/apt/sources.list
apt-get update
apt-get install python3-pip python3-mock devscripts debhelper equivs python3-setuptools python-stdeb python3 tox -y

cd /home/vagrant

git clone https://github.com/bbc/nmos-common.git
git clone https://github.com/bbc/nmos-reverse-proxy.git
git clone https://github.com/bbc/nmos-node.git
git clone https://github.com/bbc/nmos-mdns-bridge.git

cd /home/vagrant/nmos-common
pip3 install -e .
install -m 666 /dev/null /var/log/nmos.log

cd /home/vagrant/nmos-reverse-proxy
sed -i "s/, python3-nmoscommon//" stdeb.cfg
make dsc
mk-build-deps --install deb_dist/nmosreverseproxy_*.dsc --tool "$APT_TOOL"
make deb
dpkg -i dist/python3-nmosreverseproxy_*_all.deb
sudo apt-get -f -y install

cd /home/vagrant/nmos-mdns-bridge
sed -i "s/, python3-nmoscommon//" stdeb.cfg
make dsc
mk-build-deps --install deb_dist/mdnsbridge_*.dsc --tool "$APT_TOOL"
make deb
dpkg -i dist/python3-mdnsbridge_*_all.deb
sudo apt-get -f -y install

cd /home/vagrant/nmos-node
sed -i "s/, python3-nmoscommon//" stdeb.cfg
make dsc
mk-build-deps --install deb_dist/nodefacade_*.dsc --tool "$APT_TOOL"
make deb
dpkg -i dist/python3-nodefacade_*_all.deb
sudo apt-get -f -y install

service apache2 restart

# Move back to the starting directory
cd $DIR
