import {
    TokenExpiredError, JsonWebTokenError, NotBeforeError,
    verify, sign
} from "jsonwebtoken";
import moment from "moment";

require('dotenv').config();
const { JWT_TOKEN } = process.env;

const exp = (10 * 60 * 1000) // 10 minute express in second 

export const createToken = (obj) => {
    const token = sign({ ...obj }, JWT_TOKEN)
    // console.log('create token', obj, token)
    return token;
}

export const regenerateToken = (obj) => {
    // console.log('regenerateToken', obj)
    return sign({ ...obj }, JWT_TOKEN);
}

export const soonTokenExpired = (token) => {
    const t_alert = (1 * 60 * 1000); // alert :: X Minute * X second * X milliseconds
    const decoded = verify(token, JWT_TOKEN)
    // console.log('soontTokenExpired 1', token, decoded)

    // console.log('soontTokenExpired 2',
    //     "\n", Math.floor(Date.now()) > Math.floor(decoded.exp - t_alert),
    //     "\n", Math.floor(Date.now()), Math.floor(decoded.exp - t_alert),
    //     "\n", moment(Math.floor(Date.now())).toString(), moment(Math.floor(decoded.exp - t_alert)).toString()
    // )

    if (Math.floor(Date.now()) > Math.floor(decoded.exp - t_alert)) return true
    else return false
}

export const timeTokenExpired = (token) => {
    // console.log('timeTokenExpired', token)
    const expired = (10 * 1000); // alert :: X Minute * X second * X milliseconds
    const decoded = verify(token, JWT_TOKEN)

    // console.log('timeTokenExpired',
    //     "\n", Math.floor(Date.now()) > Math.floor(decoded.exp - expired),
    //     "\n", Math.floor(Date.now()), Math.floor(decoded.exp - expired),
    //     "\n", moment(Math.floor(Date.now())).toString(), moment(Math.floor(decoded.exp - expired)).toString()
    // )

    if (Math.floor(Date.now()) > Math.floor(decoded.exp - expired)) return true;
    else return false
}

export const verifyToken = (token) => {
    // console.log('verifyToken', token)
    try {
        return verify(token, JWT_TOKEN);
    } catch (err) {
        // console.log('err verifiy jwt', err.message)
        if (err instanceof TokenExpiredError) {
            // console.log('res.regenerate token true | false')
            // return attemptRenewal()
        }
        // res.status(403).json({ message: 'error' })
    }
}
