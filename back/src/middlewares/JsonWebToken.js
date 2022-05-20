// import Connection from "../config/ConnectionDB";
// import User from "../models/User.model";
// import Session from "../models/Session.model";
// import jwt from "jsonwebtoken";
// import { createToken } from "../utils"
// const privateProps = new WeakMap();
require('dotenv').config()

export default class JsonWebToken {
    // constructor() {
        // super();
        // privateProps.set(this.databaseConnection());
    // }

    // TokenVisitor
    async checkHeader(req, res, next) {
        console.log('MD header', req.headers.authorization)
        if (req.headers.authorization.split(' ')[1]) req.token = req.headers.authorization.split(' ')[1];
        if (req.headers["x-webapp"]) next()
        else res.status(418).send("Error !!!");
    }

    // // Token is valid
    // async isValid(req, res, next) {
    //     // console.log('MD isValid', req.headers)
    //     const isValid = jwt.verify(req.headers.authorization, process.env.JWT_TOKEN);
    //     // const isValid = jwt.decode(req.headers.authorization);
    //     console.log('isValid', isValid, isValid.header, isValid.payload)
    //     if (!isValid) return res.status(403).send('Error')
    //     else {
    //         req.token = isValid
    //         return next();
    //     }
    // }

    // // isAdmin
    // async isAdmin(req, res, next) {
    //     console.log('MD isAdmin', req.token)
    //     if (!req.token.loggedIn || req.token.loggedIn !== true) return res.send('Error')

    //     const user = await User.findOne({ name: req.token.name, isAdmin: true })
    //     if (!user) return res.status(403).send('Error')
    //     else return next()
    // }

    // // isProp
    // async isProp(req, res, next) {
    //     console.log('MD isProp', req.token)
    //     if (!req.token.loggedIn || req.token.loggedIn !== true) return res.send('Error')

    //     const user = await User.findOne({ name: req.token.name, isAdmin: true, isProp: true })
    //     if (!user) return res.status(403).send('Error')
    //     else return next()
    // }

    // // isRoot
    // async isRoot(req, res, next) {
    //     console.log('MD isRoot', req.token)
    //     if (!req.token.loggedIn || req.token.loggedIn !== true) return res.send('Error')

    //     const user = await User.findOne({ name: req.token.name, isAdmin: true, isRoot: true })
    //     if (!user) return res.status(403).send('Error')
    //     else return next()
    // }
}
