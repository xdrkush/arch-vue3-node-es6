import Connection from "../config/ConnectionDB";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

// Ramasse miette (clean de l'objet)
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
      const userAuthEmail = await User.findOne({ mail }),
        userAuthPseudo = await User.findOne({ name: mail });
      let user;

      if (mail, password) user = userAuthEmail || userAuthPseudo;

      if (!user) return res.json({ error: "l' email ou le nom n'existe pas." });

      const match = await bcrypt.compare(password, user.password);

      if (match) {
        const token = jwt.sign({
          name: user.name,
          mail: user.mail,
          phone: user.phone,
          description: user.description,
          loggedIn: match
        }, process.env.JWT_TOKEN, {
          expiresIn: "4h",
        });

        return res.send({
          status: "success",
          message: "Method Post User Controller",
          loggedIn: match,
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