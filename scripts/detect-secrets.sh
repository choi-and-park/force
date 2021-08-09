#!/bin/sh

set -e

RED='\033[0;31m'
NO_COLOR='\033[0m'

DSHELP="${RED}Docker must be installed and running to execute detect-secrets!${NO_COLOR}

To install docker using brew: brew install --cask docker
To start docker desktop app: open /Applications/Docker.app

You can bypass this hook using --no-verify option. ${RED}USE AT YOUR OWN RISK!${NO_COLOR}
https://git-scm.com/docs/githooks#_pre_commit"

echo 'Executing detect-secrets...'
if docker info > /dev/null 2>&1; test $? != 0; then
  echo "${DSHELP}"
  exit 1
else
  echo 'Scanning...'
  docker run --rm --volume `pwd`:/usr/src/app lirantal/detect-secrets --baseline .secrets.baseline $(git diff --staged --name-only)
fi
