# arch-vue3-node-es6
Architecture de base avec Quasar V2 (vue 3) et node js (express) en ES6

## Pré-requis
  - NodeJS: v14.18.2 (yarn)
  - QuasarJS: https://quasar.dev/start/quasar-cli
  - nvm: https://github.com/nvm-sh/nvm#install--update-script

## Install & run
Database: (first terminal):
```
sudo mongod
```

Front: (second terminal):
```
nvm i 14
cd ./front
yarn && quasar dev
```

Back (third terminal):
```
nvm i 14
cd ./back
yarn && yarn w:dev
```

## then go to:
Front:
```
http://localhost:8080
```
Back:
```
http://localhost:8088
```

# Or you can use Docker
## Run All (build global in progress)
```
docker-compose up --build --remove-orphans
```

## Go to
```
http://172.20.0.1
```

/auth/login
user: user
password: user$

info dans: `./back/src/config/script_db.js`


## Clear disk image docker
```
docker rm $(docker ps -a -q)
```

Enjoy'