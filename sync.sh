#!/bin/bash

read -r -p "Please enter commit message: (default) " msg
if [ -z "$msg" ]
then
    msg="update by sync.sh"
fi
echo "Starting update with commit message: ""$msg"
git add .
git commit -m "$msg"
sudo -g net7575 git pull
git add .
git commit -m "$msg"
sudo -g net7575 git push
