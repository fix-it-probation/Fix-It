const{sign, verify} = require('jsonwebtoken');
require("dotenv").config()

const createToken = (user) => {
    const accessToken = sign(
        {name: user.name, id: user.id, role_id: user.role_id},
        process.env.SECRET_KEY
    );
    return accessToken;
}; 

const createRegistrationToken = (user) => {
    const accessToken = sign(
        {id: user.id, name: user.name, telephone: user.telephone,
        email: user.email, password: user.password,address : user.address ,province : user.province, city : user.city, role_id: user.role_id,
        avatar_url: user.avatar_url, uniqueString: user.uniqueString},
        process.env.SECRET_KEY
    );
    return accessToken;
}; 

const createResetPasswordToken = (user) => {
    const accessToken = sign(
         {email: user.email, id: user.id, uniqueString: user.uniqueString},
        process.env.SECRET_KEY
    );
    return accessToken;
};

const createOtpToken = (user) => {
    const accessToken = sign(
         {id: user.id, uniqueString: user.uniqueString},
        process.env.SECRET_KEY
    );
    return accessToken;
};

const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"]
    if (!accessToken) return res.status(400).json({ error: "User not Authenticated!" });
    try {
        const validToken = verify(accessToken, process.env.SECRET_KEY)
        if (validToken) {
            req.user = validToken
            req.authenticated = true
            return next()
        }
        
    } catch(err)  {
        return res.status(400).json({ error: err });
    } 
};

const validateAccountPasswordToken = (req, res, next) => {
    const accessToken = req.cookies["valid-password-access-token"]
    if (!accessToken) return res.status(400).json({ error: "User not Authenticated!" });
    try {
        const validToken = verify(accessToken, process.env.SECRET_KEY)
        if (validToken) {
            req.user = validToken
            req.authenticated = true
            return next()
        }
        
    } catch(err)  {
        return res.status(400).json({ error: err });
    } 
};
    
const validateEmailToken = (req, res, next) => {
    const accessToken = req.cookies["valid-email-access-token"]
    if (!accessToken) return res.status(400).json({ error: "cookies expired!" });
    try {
        const validToken = verify(accessToken, process.env.SECRET_KEY)
        if (validToken) {
            req.user = validToken
            req.authenticated = true
            return next()
        }
        
    } catch(err)  {
        return res.status(400).json({ error: err });
    } 
};

const requestResetPassword = (req, res, next) => {
    const accessToken = req.cookies["req-password-access-token"]
    if (!accessToken) return res.status(400).json({ error: "cookies expired!" });
    try {
        const validToken = verify(accessToken, process.env.SECRET_KEY)
        if (validToken) {
            req.user = validToken
            req.authenticated = true
            return next()
        }
        
    } catch(err)  {
        return res.status(400).json({ error: err });
    } 
};

const requestOtp = (req, res, next) => {
    const accessToken = req.cookies["valid-otp-access-token"]
    if (!accessToken) return res.status(400).json({ error: "cookies expired!" });
    try {
        const validToken = verify(accessToken, process.env.SECRET_KEY)
        if (validToken) {
            req.user = validToken
            req.authenticated = true
            return next()
        }
        
    } catch(err)  {
        return res.status(400).json({ error: err });
    } 
};

module.exports = {createToken, createRegistrationToken, createResetPasswordToken, requestOtp, validateToken, validateAccountPasswordToken, validateEmailToken, requestResetPassword, createOtpToken}