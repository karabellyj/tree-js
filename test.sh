#!/bin/bash

if [ "$1" == "install" ];
then
    npm install
else
    npm test
fi