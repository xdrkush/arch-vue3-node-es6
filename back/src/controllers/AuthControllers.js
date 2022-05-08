import Connection from "../config/ConnectionDB";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";
import Session from "../models/Session.model.js";
import { createToken, verifyToken } from "../utils"
const privateProps = new WeakMap();
require('dotenv').config()

export default class AuthControllers extends Connection {
  constructor() {
    super();
    privateProps.set(this.databaseConnection());
  }

  async create(req, res) {
    // console.log('POST Register Login', req.body)
    const { mail, password, name } = req.body

    try {

      // if (mail, password) {
      //   await User.create({ name: 'user', mail, password }, (err) => {
      //     if (err) console.log(err)
      //   })
      // }

      return res.send({
        status: "OK",
        message: "Hi !",
      });
    } catch (error) {
      throw error;
    }
  }

  async login(req, res) {
    // console.log('POST Auth Login', req.body)
    const { mail, password } = req.body;

    try {

      // for connect with name or email
      const userAuthEmail = await User.findOne({ mail }, [
        "name",
        "mail",
        "phone",
        "description",
        "password"
      ]),
        userAuthPseudo = await User.findOne({ name: mail }, [
          "name",
          "mail",
          "phone",
          "description",
          "password"
        ]);
      let user;

      if (mail, password) user = userAuthEmail || userAuthPseudo;

      if (!user) return res.json({ error: "l' email ou le nom n'existe pas." });

      const match = await bcrypt.compare(password, user.password);
      const decoded = verifyToken(req.headers['authorization'])
      console.log('LOGIN :: ', decoded)

      if (match && decoded) {
        delete user.password
        user.loggedIn = match

        const date = Date.now()
        const session = await Session.findById(decoded.session_id)
        session.auth = match
        session.user_id = user._id
        session.validity = date + (10 * 60 * 1000)

        // Create token
        const token = createToken({
          auth: match,
          session_id: session._id,
          ip: req.ip
        })
        session.token = token
        session.save()

        // const token = createToken(user)
        // console.log("token", user, req.headers, token, session)

        return res.send({
          status: "success",
          message: "Method Post User Controller",
          token
        });

      } else return res.send({
        status: "success",
        message: "Oops !",
      });

    } catch (error) {
      throw error;
    }
  }

}