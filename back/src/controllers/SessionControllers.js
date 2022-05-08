import Connection from "../config/ConnectionDB";
import Session from "../models/Session.model";
import { createToken, verifyToken, soonTokenExpired, timeTokenExpired } from "../utils";

const privateProps = new WeakMap();
require('dotenv').config()

export default class SessionControllers extends Connection {
  constructor() {
    super();
    privateProps.set(this.databaseConnection());
  }

  createSession(req) {
    console.log('CreateSession', req.ip)
    const exp = (10 * 60 * 1000);
    const date = Date.now();
    const session = new Session({
      ip: req.ip,
      device: req.headers["user-agent"],
      validity: Math.floor(date + exp) // + 1 hour
    })
    // Create token
    const token = createToken({
      session_id: session._id,
      ip: req.ip,
      iat: Math.floor(date),
      exp: Math.floor(date + exp)
    })
    session.token = token
    session.save()

    return session
  }

  async get(req, res) {
    console.log('GET SESSION')
    const H_token = req.headers["authorization"];
    const H_webapp = req.ip;
    const H_agent = req.headers["user-agent"];

    if ((H_token === "visitor") || H_token === (null || 'null')
      && H_webapp && H_agent) {
      console.log('GET SESSION 1', H_token)
      const session = this.createSession(req)

      res.status(200).json({ message: "Session new OK", token: session.token })

    } else if (H_token !== undefined || 'undefined'
      || false || null) {
      console.log('GET SESSION 2 token exist')
      const soonTokenExp = soonTokenExpired(H_token)
      const tokenExp = timeTokenExpired(H_token)
      const decoded = verifyToken(H_token, res);

      if (tokenExp) {
        console.log('GET SESSION 3 tokenExpired', tokenExp)
        let session = this.createSession(req)
        res.status(200).json({ message: 'token expired !', token: session.token, tokenExp })

      } else if (decoded) {
        let session = await Session.findOne(decoded.id)
        if (!session) session = this.createSession(req)
        console.log('GET SESSION 4 tokenIsOK', session, verifyToken(session.token))
        res.status(200).json({ message: "Session Check OK", token: session.token, soonTokenExp })

      }
      // else {
      //   const session = this.createSession(req)
      //   console.log('GET SESSION 5 tokenIsNot', session)
      //   res.status(200).json({ message: "Session new OK", token: session.token, soonTokenExp })
      // }

    } else res.status(200).json({ message: 'Error connexion !' })
  }

  async logout(req, res) {
    console.log('LOGOUT')
    const token = req.headers['authorization']
    try {
      if (!token) res.status(200).json({ message: "error !" })
      else {
        const decoded = verifyToken(token)
        const session = await Session.findById(decoded.session_id)
        session.auth = false
        session.save()

        console.log('LOGOUT', session)
        const newSession = this.createSession(req)

        res.status(200).json({ message: "Logout success !", token: newSession.token, success: true })

      }
    } catch (e) {
      throw e
    }

  }

}