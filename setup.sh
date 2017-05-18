#!/bin/sh

path=$GOPATH

if [ "path" = "" ]; then 
    cd $path/src
else 
    cd ~/go/src
fi

echo "get project from github"

go get github.com/jojo221119/stageControllToGo/latex-parser/latex
go get github.com/gnampfelix/Dionysos/middleware

cd github.com/jojo221119/stageControllToGo

if [ "$(which node)" ]; then 
    echo "node allready installed"
else
    if [ "$OSTYPE" == "darwin"* ]; then
	echo "OS type OSX installing latest Node.js"
	curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
    else 
	echo "please install Node.js"
	exit 127
    fi
fi
	

cd stageControlToGoFrontend

if [ "$(which ng)" ]; then 
    echo "angular cli allready installed"
else
    echo "installing angular cli"
    npm install -g @angular/cli
fi
echo "install node dependacies"
npm install

echo "install go dependencies"


echo "all dependencies installed project can be build with build.sh"

