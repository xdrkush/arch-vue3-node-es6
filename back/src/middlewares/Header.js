
// TestMD
exports.token = (req, res, next) => {
    console.log('HEADER', req.headers)
    next()
}