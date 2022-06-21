import Connection from "../config/ConnectionDB";
import User from "../models/User.model";
import Session from "../models/Session.model";
import jwt from "jsonwebtoken";
import { createToken, verifyToken, soonTokenExpired, timeTokenExpired } from "../utils";
const privateProps = new WeakMap();
require('dotenv').config()

export default class JsonWebToken extends Connection {
    constructor() {
        super();
        privateProps.set(this.databaseConnection());
    }

    // TokenVisitor
    async checkHeader(req, res, next) {
        console.log('MD header', req.ip, req.ips, req.url)
        // console.log('MD header 2', req.headers)

        // Check client
        if (!req.headers["x-webapp"]) res.status(418).send("Error !!!")

        // if (!req.headers.authorization.split(' ')[1] || req.headers.authorization.split(' ')[1] === 'null') {
        
        // Check Bearer < visitor || token >
        else if (!req.headers.authorization.split(' ')[1]) {
            console.log('PAS de headers.autorization <token>')
            res.status(418).send("Error !!!")
        }

        // Check is OK
        else if (req.headers["x-webapp"] && req.headers.authorization.split(' ')[1]) {
            console.log('OK headers.autorization <token>')
            req.token = req.headers.authorization.split(' ')[1];
            next()
        }

        else res.status(418).send("Error !!!");
    }

    // Token is valid
    async isValid(req, res, next) {
        const isValid = verifyToken(req.token);
        const tokenExp = timeTokenExpired(req.token)

        console.log('MD ISVALID', req.token, isValid)

        if (!isValid || tokenExp) return res.status(403).send('Error')
        else {
            req.token = isValid
            return next();
        }
    }

    // isAdmin
    async isAdmin(req, res, next) {
        const { auth, session_id } = req.token;
        const session = await Session.findById(session_id)

        if (!auth || auth !== true || !session) return res.status(403).send('Error')

        const user = await User.findById(session.user_id)

        // console.log('MD ADMIN', req.token, session, user)

        if (!user || !user.isAdmin) return res.status(403).send('Error')
        else if (user.isAdmin) return next() // next()
        else return res.status(403).send('Error')
    }

    // isProp
    async isProp(req, res, next) {
        const { auth, session_id } = req.token;
        const session = await Session.findById(session_id)

        if (!auth || auth !== true || !session) return res.status(403).send('Error')

        const user = await User.findById(session.user_id)

        if (!user || !user.isProp) return res.status(403).send('Error')
        else if (user.isProp) return next() // next()
        else return res.status(403).send('Error')
    }

    // isPropOrIsRoot
    async isPropOrIsRoot(req, res, next) {
        const { auth, session_id } = req.token;
        const session = await Session.findById(session_id)

        if (!auth || auth !== true || !session) return res.status(403).send('Error')

        const user = await User.findById(session.user_id)

        if (!user) return res.status(403).send('Error')
        else if (user.isProp || user.isRoot) return next() // next()
        else return res.status(403).send('Error')
    }

    // isRoot
    async isRoot(req, res, next) {
        const { auth, session_id } = req.token;
        const session = await Session.findById(session_id)

        if (!auth || auth !== true || !session) return res.status(403).send('Error')

        const user = await User.findById(session.user_id)

        if (!user || !user.isRoot) return res.status(403).send('Error')
        else if (user.isRoot) return next() // next()
        else return res.status(403).send('Error')
    }
}
