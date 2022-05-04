import Connection from "../config/ConnectionDB";
import User from "../models/User.model";
import jwt from "jsonwebtoken";

const privateProps = new WeakMap();
require('dotenv').config()

export default class JsonWebToken extends Connection {  
    constructor() {
        super();
        privateProps.set(this.databaseConnection());
    }

    // Token is valid
    isValid(req, res, next) {
        console.log('MD isValid', req.headers)
        const isValid = jwt.verify(req.headers.authorization, process.env.JWT_TOKEN);
        if (!isValid) return res.status(403).send('Error')
        else {
            req.token = isValid
            return next();
        }
    }

    // isAdmin
    async isAdmin(req, res, next) {
        console.log('MD isAdmin', req.token)
        if (!req.token.loggedIn || req.token.loggedIn !== true) return res.send('Error')

        const user = await User.findOne({ name: req.token.name, isAdmin: true })
        if (!user) return res.status(403).send('Error')
        else return next()
    }

    // isProp
    async isProp(req, res, next) {
        console.log('MD isProp', req.token)
        if (!req.token.loggedIn || req.token.loggedIn !== true) return res.send('Error')

        const user = await User.findOne({ name: req.token.name, isAdmin: true, isProp: true })
        if (!user) return res.status(403).send('Error')
        else return next()
    }

    // isRoot
    async isRoot(req, res, next) {
        console.log('MD isRoot', req.token)
        if (!req.token.loggedIn || req.token.loggedIn !== true) return res.send('Error')

        const user = await User.findOne({ name: req.token.name, isAdmin: true, isRoot: true })
        if (!user) return res.status(403).send('Error')
        else return next()
    }
}
