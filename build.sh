#!/bin/bash

backend () {
    cd backend
    go get -u github.com/gnampfelix/Dionysos
    echo "build backend"
    go build
    cd ..  
}

frontend () {
    cd frontend
    echo "build frontend"
    ng build
    cp -r dist/* ../backend/assets/
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

cd backend

echo "Start webserver"

if [[ "$OSTYPE" == "msys" ]]; then
    ./backend.exe
else 
    ./backend
fi

