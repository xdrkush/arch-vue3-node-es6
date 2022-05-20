import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from "cors";
import router from "../router/index";
import helmet from "helmet";

require('../config/script_db')
require('dotenv').config()

export default class Server {
    constructor(app) {
        this.app = app;
    }

    config() {
        // Log
        this.app.use(logger('dev'));

        // Helmet
        // this.app.use(helmet())

        // Config default
        this.app.disable('x-powered-by')

        // Headers
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Autorization, X-WEBAPP');
            res.header('Access-Control-Allow-Credentials', true);
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
            next();
        });

        // Cors
        this.app.use(cors({
            origin: [
                'http://localhost:8080', 'http://localhost', 'http://172.20.0.1',
                `http://${process.env.DOMAIN}`, `https://${process.env.DOMAIN}`, `http://www.${process.env.DOMAIN}`, `https://www.${process.env.DOMAIN}`
            ],
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
            credentials: true
        }))

        // Parse Json (Body-Parser)
        this.app.use(bodyParser.json({ limit: '5mb' }));
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // Cookie
        this.app.use(cookieParser());

        // File Static '/assets'
        this.app.use('/assets', express.static(path.join(__dirname, 'public')));

        // Routes
        this.app.use('/api', router);
    }
}