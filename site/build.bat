@echo off
title Building Jbru95.github.io
echo Building app in production mode, sending files to docs folder in repository, which is set to deploy automatically to jbru95.github.io when files are committed.
ng build --prod --deployUrl="https://jbru95.github.io/" --outputPath=./docs --base-href="https://jbru95.github.io/"
pause
