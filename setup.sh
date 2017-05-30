#!/bin/sh

path="$GOPATH"

if [ "$path" = "" ]; then 
    path=~/go/src
else 
    path="$path"/src
fi

cd "$path"

if [ ! -d "kfgo" ]; then
    echo "kfgo folder not in place. add kfgo to your gopath in order to run setup.sh"
    exit 127
fi


echo "get project from github"

go get -u github.com/jojo221119/stageControllToGo/backend
go get -u github.com/gnampfelix/Dionysos

cd github.com/jojo221119/stageControllToGo

if [ "$(which node)" ]; then 
    echo "node already installed"
else
    if [ "$OSTYPE" == "darwin"* ]; then
	echo "OS type OSX installing latest Node.js"
	curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|.*>node-(.*)\.pkg</a>.*|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/"
    else 
	echo "please install Node.js"
	exit 127
    fi
fi
	

cd frontend

if [ "$(which ng)" ]; then 
    echo "angular cli already installed"
else
    echo "installing angular cli"
    npm install -g @angular/cli
fi
echo "install node dependacies"
npm install



echo "all dependencies installed project can be build with build.sh"

echo "go to the project folder -- cd $path/github.com/jojo221119/stageControllToGo"


