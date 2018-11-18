#!/bin/bash

echo "deploying to as400"
truffle migrate --network as400;
sleep 2;

echo "deploying to as500"
truffle migrate --network as500;
sleep 2;

echo "deploying to as600"
truffle migrate --network as600;