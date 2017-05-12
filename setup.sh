#!/bin/sh

path=$GOPATH

cd $path/src

mkdir gitlab.mary-cap.de
cd gitlab.mary-cap.de
mkdir VV
cd VV

git clone ssh://git@gitlab.mary-cap.de:50000/VV/StageControllToGo.git StageControllToGo

cd StageControllToGo

echo "install node dependencies"

cd stageControlToGoFrontend

if [ $(which ng) ]; then 
    echo "angular cli allready installed"
else
    npm install -g @angular/cli
fi

npm install

echo "install go dependencies"

go get gopkg.in gin-gonic/gin.v1

go get github.com/gin-contrib/static

echo 'change import in in gin-contrib/statuíc/static.go \n replace "github.com/gin-gonic/gin" dependancy with "gopkg.in/gin-gonic/gin.v1"'


