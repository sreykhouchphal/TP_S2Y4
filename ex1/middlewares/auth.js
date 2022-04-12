
const Jwt = require('jsonwebtoken')

const currentUser = (req, res, next) => {
    
    console.log(req.session.jwt)
    
    if (!req.session.jwt) {
        return res.json({
            success: false,
            error:`You must sign In~`
        })
    }
    //console.log(req.session.jwt)

    const user = Jwt.verify(req.session.jwt, 'jwt-secret')
    console.log(user)
    req.currentUser = user;
    //console.log(user)
    next();
}

const ensureSignedIn = (req, res, next) => {
    console.log(req.session)
    if (!req.session.jwt) {
        return res.json({
            success: false,
            error:`You must sign In~`
        })
    }
    next();
}

const ensureSignedOut = (req, res, next) => {
    if (req.session.jwt) {
        return res.json({
            success: false,
            error: `You already signed in~`
        })
    }
    next();
}

module.exports = {
    ensureSignedIn,
    ensureSignedOut,
    currentUser
}