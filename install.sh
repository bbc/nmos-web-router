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

# Download the Node provisioning script
curl -s https://raw.githubusercontent.com/bbc/nmos-joint-ri/master/vagrant/provision_node.sh -o provision_node.sh
chmod +x provision_node.sh

# Run the Node provisioning script
./provision_node.sh master master master master master master master

# Move back to the starting directory
cd $DIR
