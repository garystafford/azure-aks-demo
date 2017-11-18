#!/bin/sh

# Deploys ZIP build artifact to GitHub (acts as pseudo binary repository)
# (3) environment variables in .travis.yml file used here - two are encypted
# travis encrypt GH_TOKEN=<your_token_hash> --add
# travis encrypt COMMIT_AUTHOR_EMAIL=<your_email_here> --add
# export GH_COLOR_ARTIFACT_REPO=github.com/<your_repo_path>.git

#set -x

BRANCH=${2:-rabbitmq}

cd client/
zip -r dist-voter-client-0.3.${TRAVIS_BUILD_NUMBER}.zip dist/

git init
git config user.name "travis-ci"
git config user.email "${COMMIT_AUTHOR_EMAIL}"

git add *.zip
git commit -m "Deploy Travis CI Build #${TRAVIS_BUILD_NUMBER} artifacts to GitHub"
git push --force --quiet "https://${GH_TOKEN}@${GH_ARTIFACT_REPO}" master:build-artifacts

# Builds immutable Docker Image, deploying the ZIP, above.
cd -
docker login -u="${DOCKER_USERNAME}" -p="${DOCKER_PASSWORD}"

set -ex

sleep 120 # wait for automated Docker Hub build to finish...
IMAGE="garystafford/voter-client"
docker build -t ${IMAGE}:${BRANCH} .
docker push ${IMAGE}:${BRANCH}

IMAGE_TAG="0.3.${TRAVIS_BUILD_NUMBER}"
docker tag ${IMAGE}:${BRANCH} ${IMAGE}:${IMAGE_TAG}
docker push ${IMAGE}:${IMAGE_TAG}
