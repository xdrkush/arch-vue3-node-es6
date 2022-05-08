const mongoose = require('mongoose');
require('dotenv').config();

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT, DB_CLOUD, DB_URL, DOCKER } = process.env;

export default class Connection {
    constructor() {
        this.mongo_uri = (DB_CLOUD === "true") 
            ? DB_URL 
            : (DOCKER === "true") 
            ? `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
            : `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
    }
    
    databaseConnection() {
        try {
            console.log('Connection Mongoose')
            const connect = mongoose.connect(this.mongo_uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            if (!connect) console.log('connection failed');
            this.connect = connect
            return connect;
        } catch (error) {
            throw error;
        }
    }

}
