import Connection from "../config/ConnectionDB";
import User from "../models/User.model.js";
import bcrypt from "bcrypt"

// Ramasse miette (clean de l'objet)
const privateProps = new WeakMap();

export default class UserControllers extends Connection {
  constructor() {
    super();
    privateProps.set(this.databaseConnection());
  }

  async putAccount(req, res) {
    // console.log('PUT User by name', req.body)
    const { oldName, Password } = req.body;

    try {
      const user = await User.findOne({ name: oldName });
      const match = await bcrypt.compare(Password, user.password);

      if (!match) return res.status(200).json({ message: "Mot de passe incorect" });

      else if (oldName && match) User.findOneAndUpdate({ name: oldName }, { ...req.body }, (err, data) => {
        if (err) console.log(err)
        // else console.log('data', data)
      })

      return res.status(200).json({
        status: "success",
        message: "Method Post User Controller",
      });
    } catch (error) {
      throw error;
    }
  }

  async checkPassword(req, res) {
    // console.log('PUT checkPassword', req.body)
    const { oldName, Password } = req.body;

    try {
      const user = await User.findOne({ name: oldName });
      const match = await bcrypt.compare(Password, user.password);

      if (!match) return res.status(200).json({ message: "Mot de passe incorect", checked: false });
      else return res.status(200).json({
        status: "success",
        checked: true,
        message: "Method check Password Controller",
      });
    } catch (error) {
      throw error;
    }
  }

  async putPassword(req, res) {
    // console.log('PUT User by name', req.body)
    const { oldName, Password, newPassword, confirmPassword } = req.body;

    // console.log('PUT password', oldName, Password, newPassword, confirmPassword)

    try {
      if (newPassword === confirmPassword) {
        const user = await User.findOne({ name: oldName })
        const match = await bcrypt.compare(Password, user.password);
        const hash = bcrypt.hashSync(req.body.confirmPassword, 10)

        if (!user) return res.status(200).json({ message: "User inconnu" });
        if (!match) return res.status(200).json({ message: "Mot de passe incorect" });
        if (!hash) return res.status(200).json({ message: "Problème avec le nouveau mot de passe" });

        else if (oldName && hash && match) User.findOneAndUpdate({ name: oldName }, { password: hash },
          (err, data) => {
            if (err) console.log(err)
            // else console.log('data', data, hash)
          })

        return res.send({
          status: "success",
          message: "Method Post User Controller",
        });
      } else return res.status(200).json({ message: "Une erreur est survenu" });
    } catch (error) {
      throw error;
    }
  }

}