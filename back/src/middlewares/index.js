import JWT from './JsonWebToken'

module.exports = {
    // JWT
    // isValid: (req, res, next) => new JWT().isValid(req, res, next),
    // isProp: (req, res, next) => new JWT().isProp(req, res, next),
    // isAdmin: (req, res, next) => new JWT().isAdmin(req, res, next),
    // isRoot: (req, res, next) => new JWT().isRoot(req, res, next),
    checkHeader: (req, res, next) => new JWT().checkHeader(req, res, next),

    // XXX Middleware
    // CheckXXX: (req, res) => new XXXMiddleware().get,
}