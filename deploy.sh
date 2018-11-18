#!/bin/bash

echo "deploying to as400"
(cd $(pwd)/as400 && bash migrate.sh > deploy.log 2>&1 &);
sleep 2;

echo "deploying to as500"
(cd $(pwd)/as500 && bash migrate.sh > deploy.log 2>&1 &);
sleep 2;

echo "deploying to as600"
(cd $(pwd)/as600 && bash migrate.sh > deploy.log 2>&1 &);