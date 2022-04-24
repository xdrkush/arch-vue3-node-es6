const Connection = require("../config/ConnectionDB");
const User = require("../models/User.model.js");

// Ramasse miette (clean de l'objet)
const privateProps = new WeakMap();

export default class AuthControllers extends Connection {
  constructor() {
    super();
    privateProps.set(this.databaseConnection());
  }

  async login(req, res) {
    console.log('POST Auth Login', req.body)
    const { mail, password } = req.body

    try {
      let user;

      if (mail, password) {
        user = await User.findOne({ mail }, (err, data) => {
          if (err) console.log(err)
          return data
        })
        console.log('user', user)
      }

      return res.send({
        status: "success",
        message: "Method Post User Controller",
        loggedIn: true
      });
    } catch (error) {
      throw error;
    }
  }

}