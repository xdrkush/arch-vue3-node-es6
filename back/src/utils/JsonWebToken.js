import {
    TokenExpiredError, JsonWebTokenError, NotBeforeError,
    verify, sign
} from "jsonwebtoken";
import moment from "moment";

require('dotenv').config();
const { JWT_TOKEN } = process.env;

const exp = (10 * 60 * 1000) // 10 minute express in second 

export const createToken = (obj) => {
    console.log('create token', obj)
    return sign({ ...obj }, JWT_TOKEN);
}

export const regenerateToken = (obj) => {
    console.log('regenerateToken', obj)
    return sign({ ...obj }, JWT_TOKEN);
}

export const soonTokenExpired = (token) => {
    console.log('soontTokenExpired')
    const t_alert = (1 * 60 * 1000); // alert :: X Minute * X second * X milliseconds
    const decoded = verify(token, JWT_TOKEN)

    console.log('soontTokenExpired',
        "\n", Math.floor(Date.now()) > Math.floor(decoded.exp - t_alert),
        "\n", Math.floor(Date.now()), Math.floor(decoded.exp - t_alert),
        "\n", moment(Math.floor(Date.now())).toString(), moment(Math.floor(decoded.exp - t_alert)).toString()
    )

    if (Math.floor(Date.now()) > Math.floor(decoded.exp - t_alert)) return true
    else return false
}

export const timeTokenExpired = (token) => {
    const expired = (10 * 1000); // alert :: X Minute * X second * X milliseconds
    const decoded = verify(token, JWT_TOKEN)

    console.log('timeTokenExpired',
        "\n", Math.floor(Date.now()) > Math.floor(decoded.exp - expired),
        "\n", Math.floor(Date.now()), Math.floor(decoded.exp - expired),
        "\n", moment(Math.floor(Date.now())).toString(), moment(Math.floor(decoded.exp - expired)).toString()
    )

    if (Math.floor(Date.now()) > Math.floor(decoded.exp - expired)) return true;
    else return false
}

export const verifyToken = (token, res) => {
    console.log('verifyToken')
    try {
        return verify(token, JWT_TOKEN);
    } catch (err) {
        console.log('err verifiy jwt', err.message)
        if (err instanceof TokenExpiredError) {
            console.log('res.regenerate token true | false')
            // return attemptRenewal()
        }
        // res.status(403).json({ message: 'error' })
    }
}

// exports.regenerateToken = (old, newObj) => {
//     const token = jwt.sign({
//         name: newObj.name,
//         mail: newObj.mail,
//         phone: newObj.phone,
//         description: newObj.description,
//         loggedIn: newObj.loggedIn
//     }, process.env.JWT_TOKEN, {
//         expiresIn: "4h",
//     });
//     return token
// }
