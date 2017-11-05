#!/bin/bash

set -v -o pipefail

reldir=`dirname $0`
cd $reldir
cd ..

yarn build-prod
docker build -t sample-app .
