import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from "cors";
import router from "../router/index";

require('../config/script_db')

export default class Server {
    constructor(app) {
        this.app = app;
    }

    config() {
        // Log
        this.app.use(logger('dev'));

        this.app.disable('x-powered-by')

        // this.app.use("*", (req, res, next) => {
        //     res.header("Access-Control-Allow-Origin", "*");
        //     res.header(
        //         "Access-Control-Allow-Headers",
        //         "Origin, X-Requested-With, Content-Type, Accept"
        //     );
        //     next();
        // });

        // this.app.use((req, res, next) => {
        //     res.header("Access-Control-Allow-Origin", req.header("origin"));
        //     res.header(
        //         "Access-Control-Allow-Headers",
        //         "Origin, X-Requested-With, Content-Type, Accept"
        //     );
        //     next();
        // });

        // Cors
        this.app.use(cors({
            origin: ['http://localhost:8080', 'http://ahuart.com', 'https://ahuart.com', 'http://www.ahuart.com', 'https://www.ahuart.com'],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
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