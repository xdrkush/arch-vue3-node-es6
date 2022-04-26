const mongoose = require('mongoose');
require('dotenv').config();

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } = process.env;

export default class Connection {
    constructor() {
        this.mongo_uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
    }

    databaseConnection() {
        try {
            const connect = mongoose.connect(this.mongo_uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            if(!connect) console.log('connection failed');
            this.connect = connect
            return connect;
        } catch (error) {
            throw error;
        }
    }

}
