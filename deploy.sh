#!/bin/bash
if [ "$CIRCLE_BRANCH" = "master" ]; then

git config --global user.name "Xunk-Bot"
git config --global user.email "xunk@radialapps.com"
git config --global push.default matching
git clone https://github.com/radialapps/xunk-calendar deploy

cd deploy
git checkout gh-pages
rm -r *
cp -R ../dist/* ./
cp -R ../.circleci ./
date > BUILD_TIME
git add -A
git commit -m "Automated Build"
git push
cd ..

else

echo "Not on master branch"

fi