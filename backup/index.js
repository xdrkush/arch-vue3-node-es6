// Import Module
const cron = require('node-cron'),
    spawn = require('child_process').spawn
    // moment = require('moment'),
    // fs = require('fs');

require('dotenv').config()

// const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT, DB_CLOUD, DB_URL, DOCKER } = process.env;
const { DB_NAME } = process.env;

// const mongo_uri = (DB_CLOUD === "true")
//     ? DB_URL
//     : (DOCKER === "true")
//         ? `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
//         : `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

let dbBackupTask = cron.schedule('* * * * *', () => {

    // La commande shell
    let backupProcess = spawn('mongodump', [
        '--db=' + DB_NAME,
        // '--uri=mongodb+srv://', // Error
        '--archive=./history/backup_project_' + Date.now(),
        '--gzip'
    ]);

    // La sortie de notre commande
    backupProcess.on('exit', (code, signal) => {
        if (code)
            console.log('Backup process exited with code ', code);
        else if (signal)
            console.error('Backup process was killed with sigal ', signal);
        else
            console.log('Successfully backup the database')
    });

});