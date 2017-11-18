#!/bin/sh

# Deploys the voter services locally
# Not in swarm mode

set -e

if [ -z "$1" ]
  then
    echo "No argument supplied. Please provide project path as argument..."
    exit 1
fi

export PROJECT_PATH=$1

# ensure latest version are pulled...
docker-compose -f docker-compose-local.yml pull

docker-compose \
  -f docker-compose-local.yml \
  -p demostack up \
  --force-recreate -d

docker rm $(docker ps -a -f status=exited -q) || echo "No containers to delete..."
docker image prune -f # clean up danglers...

echo "Letting services start-up..."
sleep 5

docker ps

echo "Script completed..."
