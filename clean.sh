#!/bin/bash

echo "cleaning /as400"
(cd $(pwd)/as400 && bash clean.sh);
sleep 2;

echo "cleaning /as500"
(cd $(pwd)/as500 && bash clean.sh);
sleep 2;

echo "cleaning /as600"
(cd $(pwd)/as600 && bash clean.sh);


