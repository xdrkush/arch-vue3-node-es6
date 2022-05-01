const mongoose = require('mongoose');
require('dotenv').config();

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT, DB_CLOUD, DB_URL } = process.env;

// `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`

export default class Connection {
    constructor() {
        this.mongo_uri = (DB_CLOUD === "true") ? DB_URL :
            `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
    }

    databaseConnection() {
        try {
            const connect = mongoose.connect(this.mongo_uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            if(!connect) console.log('connection failed');
            // else console.log('MONGODB :: connection success ');
            this.connect = connect
            return connect;
        } catch (error) {
            throw error;
        }
    }

}
