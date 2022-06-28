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
    const ip = req.headers['x-real-ip']
      || req.headers['x-forwarded-for']
      || req.ip
      || 'NoIp-' + Date.now()

    console.log('CREATE SESSION', req.token)

    const session = new Session({
      ip: ip,
      device: req.headers["user-agent"],
      validity: Math.floor(Date.now() + exp) // + 10 min
    })

    // Create token
    const token = createToken({
      session_id: session._id,
      ip: ip,
      exp: Math.floor((Date.now() + exp)),
      iat: Math.floor(Date.now()),
    })

    session.token = token
    session.save()

    return session
  }

  async get(req, res) {
    let H_agent = req.headers["user-agent"];

    try {
      // Session Visitor (token not exist)
      if (req.token === "visitor") {
        console.log('new Session visitor')
        const session = this.createSession(req)
        // New Session
        res.status(200).json({ message: "Session new OK", token: session.token })
      }
      // Session Visitor (token exist)
      else if (verifyToken(req.token) && H_agent) {
        // console.log('Session exist')
        const soonTokenExp = soonTokenExpired(req.token)
        const tokenExp = timeTokenExpired(req.token)
        const decoded = verifyToken(req.token);
        console.log('Session Verified', decoded)

        // Token Expired (close session & deconected)
        if (tokenExp) {
          const ip = req.headers['x-real-ip']
            || req.headers['x-forwarded-for']
            || req.ip
            || 'NoIp-' + Date.now()
          const exp = (10 * 60 * 1000);
          const oldSession = await Session.findById(decoded.session_id)
          const new_tk = createToken({
            session_id: oldSession._id,
            ip: ip,
            exp: Math.floor((Date.now() + exp)),
            iat: Math.floor(Date.now()),
          })
          oldSession.token = new_tk
          oldSession.auth = false
          oldSession.save()

          res.status(200).json({ message: 'token expired !', token: oldSession.token, tokenExp })
        }
        // Token exist and is valid
        else if (decoded) {
          let sessionExist = await Session.findById(decoded.session_id)
          console.log('Session exist', decoded, sessionExist)
          if (
            sessionExist.auth === true
            && new Date(Date.now()) < new Date(sessionExist.validity)
          ) {
            res.status(200).json({ message: "Session Check OK", token: sessionExist.token, soonTokenExp })
          } else res.status(203).json({ message: 'Error connexion !' })
        }
      } else res.status(203).json({ message: 'Error connexion !' })

    } catch (e) {
      throw e
    }
  }

  // async get(req, res) {
  //   let token = req.token;
  //   let H_webapp = req.headers['x-webapp'];
  //   let H_agent = req.headers["user-agent"];

  //   // console.log('token', token)

  //   try {
  //     // Session Visitor
  //     if ((token === "visitor") || token === (null || 'null' || undefined || 'undefined' || false)
  //       && H_webapp && H_agent) {
  //       console.log('Session visitor')
  //       const session = this.createSession(req)

  //       // New Session
  //       res.status(200).json({ message: "Session new OK", token: session.token })

  //     } else if (token !== undefined || 'undefined'
  //       || false || null) {
  //       // console.log('Session exist')
  //       const soonTokenExp = soonTokenExpired(token)
  //       const tokenExp = timeTokenExpired(token)
  //       const decoded = verifyToken(token);

  //       // Token Expired
  //       if (tokenExp) {
  //         // console.log('Session expired')
  //         let session = this.createSession(req)
  //         res.status(200).json({ message: 'token expired !', token: session.token, tokenExp })

  //         // Token exist and is valid
  //       } else if (decoded) {
  //         let session = await Session.findById(decoded.session_id)
  //         // console.log('Session decoded', decoded, session)
  //         if (!session) session = this.createSession(req)
  //         else res.status(200).json({ message: "Session Check OK", token: session.token, soonTokenExp })
  //       }
  //     } else res.status(200).json({ message: 'Error connexion !' })
  //   } catch (e) {
  //     throw e
  //   }
  // }

  async getSessions(req, res) {
    // console.log('get Sessions', req.token)
    const session = await Session.findById(req.token.session_id)

    // const dbSessions = await Session.find({}, ['-_id', '-__v']).limit(10).skip(1)
    const dbSessions = await Session.find({}, ['-_id', '-__v'])
      .sort({ created: -1 })
    // .limit(10)

    try {
      return res.status(200).json({
        status: "success",
        message: "Method Get Pages Controller",
        dbSessions, session
      });
    } catch (error) {
      throw error;
    }
  }

  async getSessionsWithDelay(req, res) {
    // console.log('get Sessions', req.token)
    const { delay } = req.params;
    let d = Date.now();
    // const session = await Session.findById(req.token.session_id)

    try {
      const dbSessions = await Session.find({}, ['-_id', '-__v'])
        .sort({ created: -1 })

      let listX = [];
      let listY = [];

      let count;

      console.log('getSessionsWithDelay', req.query, delay)

      switch (delay) {
        case "30d":
          listX = [];
          listY = [];
          // Last 30 Days
          for (let i = 29; i >= 0; i--) {
            // Count / hours
            count = 0;
            dbSessions.map((item) => {
              if (
                new Date(d).getMonth() - 1 ===
                new Date(item.created).getMonth() ||
                new Date(item.created).getMonth() === new Date(d).getMonth()
              )
                if (
                  new Date(item.created).getDate() ===
                  new Date(d - i * 24 * 60 * 60 * 1000).getDate()
                )
                  count++;
            });

            listX.push(
              new Date(d - i * 24 * 60 * 60 * 1000).getDate() +
              " / " +
              (new Date(d - i * 24 * 60 * 60 * 1000).getMonth() + 1)
            );
            listY.push(count);
          }
          break;
        case "14d":
          listX = [];
          listY = [];
          // // Last 14 Days
          for (let i = 13; i >= 0; i--) {
            // Count / hours
            count = 0;
            dbSessions.map((item) => {
              if (
                new Date(d).getMonth() - 1 ===
                new Date(item.created).getMonth() ||
                new Date(item.created).getMonth() === new Date(d).getMonth()
              )
                if (
                  new Date(item.created).getDate() ===
                  new Date(d - i * 24 * 60 * 60 * 1000).getDate()
                )
                  count++;
            });
            listX.push(
              new Date(d - i * 24 * 60 * 60 * 1000).getDate() +
              " / " +
              (new Date(d - i * 24 * 60 * 60 * 1000).getMonth() + 1)
            );
            listY.push(count);
          }
          break;
        case "7d":
          listX = [];
          listY = [];
          // // Last 14 Days
          for (let i = 6; i >= 0; i--) {
            // Count / hours
            count = 0;
            dbSessions.map((item) => {
              if (
                new Date(d).getMonth() - 1 ===
                new Date(item.created).getMonth() ||
                new Date(item.created).getMonth() === new Date(d).getMonth()
              )
                if (
                  new Date(item.created).getDate() ===
                  new Date(d - i * 24 * 60 * 60 * 1000).getDate()
                )
                  count++;
            });
            listX.push(
              new Date(d - i * 24 * 60 * 60 * 1000).getDate() +
              " / " +
              (new Date(d - i * 24 * 60 * 60 * 1000).getMonth() + 1)
            );
            listY.push(count);
          }
          break;
        case "24h":
          listX = [];
          listY = [];
          // Last 24 Hours
          for (let i = 23; i >= 0; i--) {
            // Count / hours
            count = 0;
            dbSessions.map((item) => {
              if (
                new Date(d).getDate() - 1 ===
                new Date(item.created).getDate() ||
                new Date(item.created).getDate() === new Date(d).getDate()
              )
                if (
                  new Date(item.created).getHours() ===
                  new Date(d - i * 60 * 60 * 1000).getHours()
                )
                  count++;
            });

            listX.push(new Date(d - i * 60 * 60 * 1000).getHours() + " h");
            listY.push(count);
          }
          break;
        case "4h":
          listX = [];
          listY = [];
          // Last 240 minutes
          for (let i = 239; i >= 0; i--) {
            count = 0;
            dbSessions.map((item) => {
              if (
                new Date(d).getDate() - 1 ===
                new Date(item.created).getDate() ||
                new Date(item.created).getDate() === new Date(d).getDate()
              )
                if (
                  new Date(d).getHours() - 1 ===
                  new Date(item.created).getHours() ||
                  new Date(item.created).getHours() === new Date(d).getHours()
                )
                  if (
                    new Date(item.created).getMinutes() ===
                    new Date(d - i * 60 * 1000).getMinutes()
                  )
                    count++;
            });

            listX.push(new Date(d - i * 60 * 1000).getMinutes());
            listY.push(count);
          }
          break;
        case "1h":
          listX = [];
          listY = [];
          // Last 60 minutes
          for (let i = 59; i >= 0; i--) {
            count = 0;
            dbSessions.map((item) => {
              if (
                new Date(d).getDate() - 1 ===
                new Date(item.created).getDate() ||
                new Date(item.created).getDate() === new Date(d).getDate()
              )
                if (
                  new Date(d).getHours() - 1 ===
                  new Date(item.created).getHours() ||
                  new Date(item.created).getHours() === new Date(d).getHours()
                )
                  if (
                    new Date(item.created).getMinutes() ===
                    new Date(d - i * 60 * 1000).getMinutes()
                  )
                    count++;
            });

            listX.push(new Date(d - i * 60 * 1000).getMinutes());
            listY.push(count);
          }
          break;

        default:
          // Last 24 Hours
          for (let i = 23; i >= 0; i--) {
            // Count / hours
            count = 0;
            dbSessions.map((item) => {
              if (
                new Date(d).getDate() - 1 ===
                new Date(item.created).getDate() ||
                new Date(item.created).getDate() === new Date(d).getDate()
              )
                if (
                  new Date(item.created).getHours() ===
                  new Date(d - i * 60 * 60 * 1000).getHours()
                )
                  count++;
            });

            listX.push(new Date(d - i * 60 * 60 * 1000).getHours() + " h");
            listY.push(count);
          }
          break;
      };

      return res.status(200).json({
        status: "success",
        message: "Method Get Pages Controller",
        dbSessions, chart: { listX, listY }
      });
    } catch (error) {
      throw error;
    }
  }

  async logout(req, res) {
    try {
      if (!req.token) res.status(200).json({ message: "error !" })
      else {
        const exp = (10 * 60 * 1000);
        const decoded = verifyToken(req.token);
        const session = await Session.findById(decoded.session_id);

        // Create token
        const token = createToken({
          session_id: session._id,
          ip: session.ip,
          exp: Math.floor((Date.now() + exp)),
          iat: Math.floor(Date.now())
        })

        session.validity = Date.now() + exp;
        session.token = token
        session.auth = false;
        session.save();

        res.status(200).json({ message: "Logout success !", token: session.token, success: true })
      }
    } catch (e) {
      throw e
    }

  }

  async extendSession(req, res) {

    if (req.token) {
      const exp = (10 * 60 * 1000);
      const decoded = verifyToken(req.token);
      const session = await Session.findById(decoded.session_id)

      console.log('extend session 1', session)
      // Create token
      const token = createToken({
        session_id: session._id,
        auth: session.auth,
        ip: session.ip,
        exp: Math.floor((Date.now() + exp)),
        iat: Math.floor(Date.now())
      })

      session.validity = Date.now() + exp;
      session.token = token
      session.save()

      console.log('extend session 2', session)

      res.status(200).json({
        message: "Session Extend OK",
        token: session.token
      })
    } else {
      res.status(418)
    }

  }

}