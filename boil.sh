#!/usr/bin/sh
# Pass new project name as argument
# todo: would be nice to have github create a non-existant repo
perl -pi -e 's/ReactStub/$1/' .git/config
npm install
git init
git add *
git commit -ma "initial check-in"
git push
# heroku init tasks?
