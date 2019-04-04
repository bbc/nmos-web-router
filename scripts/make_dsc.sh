#!/bin/bash
# Build a .dsc file and copy it into deb_dist/

rm -Rf deb_dist
mkdir -p deb_dist/ips-web/

# Copy built JS/HTML and debian metadata into place to build packages
cp -R build deb_dist/ips-web/
cp -R debian deb_dist/ips-web/

# Run the actual build
(cd deb_dist/ips-web && debuild -uc -us -S)
