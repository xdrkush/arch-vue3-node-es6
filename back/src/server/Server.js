import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from "cors";
import router from "../router/index";

export default class Server {
    constructor(app, port) {
        this.app = app;
        this.port = port;
    }

    config() {
        // Log
        this.app.use(logger('dev'));

        // Parse Json (Body-Parser)
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));

        // Cookie
        this.app.use(cookieParser());

        // File Static '/assets'
        this.app.use('/assets', express.static(path.join(__dirname, 'public')));

        // Cors
        this.app.use(cors({
            origin: ['http://localhost:8080', 'http://localhost:8081', 'https://domain.com/', 'http://domain.com/'],
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            credentials: true
        }))

        // Body Parser
        this.app.use(express.json())

        // Routes
        this.app.use(router);
    }
}