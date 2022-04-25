# arch-vue3-node-es6
architecture de base avec Quasar V2 (vue 3) et node js (express) en ES6

## Pré-requis
  - NodeJS: v14.18.2 (yarn)
  - QuasarJS: https://quasar.dev/start/quasar-cli
  - nvm: https://github.com/nvm-sh/nvm#install--update-script

## Install & run
Front (first terminal):
```
nvm i 14.18.2
cd ./front
yarn
quasar dev
```

Front (second terminal):
```
nvm i 14.18.2
cd ./back
yarn
yarn w:dev
```

## go to :
Front:
```
http://localhost:8080
```
Back:
```
http://localhost:8088
```

# Docker
## Run All (just the front nomw, build global in progress)
```
docker-compose up --build --remove-orphans
```

## Clear disk image docker
```
docker rm $(docker ps -a -q)
```

## Go to
```
http://172.20.0.2:8080
```

Cette architecture sera encapsuler avec docker de la même manière que celle-ci:
  - https://github.com/xdrkush/tuto-reactjs/tree/main/15-docker

