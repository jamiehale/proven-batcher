#! /usr/bin/env bash

docker run -d --hostname docker-rabbit --name rabbit -p 5672:5672 rabbitmq
