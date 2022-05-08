// TestMD
exports.md = (req, res, next) => {
    console.log('Test middleware')
    next()
}