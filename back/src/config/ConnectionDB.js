const mongoose = require('mongoose');
require('dotenv').config()
console.log('process', process.env.MONGO_URI);

class Connection {
    databaseConnection() {
        try {
            const connect = mongoose.connect(process.env.MONGO_URI, {
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

module.exports = Connection;
