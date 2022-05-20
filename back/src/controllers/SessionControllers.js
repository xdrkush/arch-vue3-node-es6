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
      exp: Math.floor((date + exp)),
      iat: Math.floor(date),
    })

    session.token = token
    session.save()

    return session
  }

  async get(req, res) {
    let H_token = req.token;
    let H_webapp = req.ip;
    let H_agent = req.headers["user-agent"];

    try {
      if ((H_token === "visitor") || H_token === (null || 'null' || undefined || 'undefined' || false)
        && H_webapp && H_agent) {
        const session = this.createSession(req)

        // New Session
        res.status(200).json({ message: "Session new OK", token: session.token })

      } else if (H_token !== undefined || 'undefined'
        || false || null) {
        const soonTokenExp = soonTokenExpired(H_token)
        const tokenExp = timeTokenExpired(H_token)
        const decoded = verifyToken(H_token);

        if (tokenExp) {
          let session = this.createSession(req)
          // Token Expired
          res.status(200).json({ message: 'token expired !', token: session.token, tokenExp })

        } else if (decoded) {
          let session = await Session.findById(decoded.session_id)
          if (!session) session = this.createSession(req)
          // Token exist and is valid
          else res.status(200).json({ message: "Session Check OK", token: session.token, soonTokenExp })
        }
      } else res.status(200).json({ message: 'Error connexion !' })
    } catch (e) {
      throw e
    }
  }

  async logout(req, res) {
    const token = req.token
    try {
      if (!token) res.status(200).json({ message: "error !" })
      else {
        const decoded = verifyToken(token)
        const session = await Session.findById(decoded.session_id)
        session.auth = false
        session.save()

        const newSession = this.createSession({
          ip: req.ip,
          headers: {
            "user-agent": req.headers["user-agent"]
          }
        })
        
        res.status(200).json({ message: "Logout success !", token: newSession.token, success: true })
      }
    } catch (e) {
      throw e
    }

  }

  async extendSession(req, res) {
    let H_token = req.token;

    if (H_token) {
      const exp = (10 * 60 * 1000);
      const date = Date.now();
      const decoded = verifyToken(H_token);
      const session = await Session.findById(decoded.session_id)

      // Create token
      const token = createToken({
        session_id: session._id,
        auth: session.auth,
        ip: session.ip,
        exp: Math.floor((date + exp)),
        iat: Math.floor(date)
      })

      session.validity = date + exp;
      session.token = token
      session.save()

      res.status(200).json({
        message: "Session Extend OK",
        token: session.token, soonTokenExp: false
      })
    } else {
      res.status(418)
    }

  }

}