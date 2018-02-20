#! /usr/bin/env bash

docker run --name ganache -d -p 8545:8545 trufflesuite/ganache-cli:latest --secure -u 0 --acctKeys accounts.json
./node_modules/.bin/truffle deploy
