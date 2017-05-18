#!/bin/bash

backend () {
    cd webserver
    echo "build backend"
    go build
    cd ..  
}

frontend () {
    cd stageControlToGoFrontend
    echo "build frontend"
    ng build
    cp dist/* ../webserver/assets/ -r
    cd ..
}

if [ "$1" == "" ]; then 
    frontend
    backend
fi

while [ "$1" != "" ]
    do 
        [ "$1" == "-b" ] && backend && shift 
        [ "$1" == "-f" ] && frontend && shift 
done

cd webserver

echo "Start webserver"

if [[ "$OSTYPE" == "msys" ]]; then
    ./webserver.exe
else 
    ./webserver
fi

