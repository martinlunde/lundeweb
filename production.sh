#!/bin/bash
git fetch --tags
latesttag=$(git describe --tags)
echo Latest version is ${latesttag}

git checkout tags/${latesttag}
echo checked out tags/${latesttag}

git pull origin tags/${latesttag}

npm install
npm run build

pm2 restart server