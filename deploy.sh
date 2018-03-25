#!/bin/bash
git config --global user.name "Xunk-Bot"
git config --global user.email "xunk@radialapps.com"
git config --global push.default matching
git clone git@github.com:go-xunk/xunk-calendar-demo.git deploy

cd deploy
rm -r *
cp -R ../dist/* ./ 
date > BUILD_TIME
sed -i 's#<base href="/">#<base href="/xunk-calendar-demo/">#g' index.html
git add -A
git commit -m "Automated Build"
git push
cd ..