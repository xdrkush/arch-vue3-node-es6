import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from "cors";
import router from "../router/index";

export default class Server {
    constructor(app) {
        this.app = app;
    }

    config() {
        // Log
        this.app.use(logger('dev'));

        // Cors
        this.app.use(cors({
            origin: ['http://localhost:8080', 'http://localhost:8081', 'https://domain.com/', 'http://172.20.0.2:8080', 'http://172.20.0.3:8080'],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            credentials: true
        }))

        // Parse Json (Body-Parser)
        this.app.use(bodyParser.json({limit: '5mb'}));
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // Cookie
        this.app.use(cookieParser());

        // File Static '/assets'
        this.app.use('/assets', express.static(path.join(__dirname, 'public')));

        // Routes
        this.app.use('/api', router);
    }
}