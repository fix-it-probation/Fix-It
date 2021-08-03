const{sign, verify} = require('jsonwebtoken');
const jwtConfig = require('../app/config/config.js')
// const User = require("../app/models/user.model.js");
// const sql = require("mysql2");
// const { findById } = require('../app/models/user.model.js');

const createToken = (user) => {
    const accessToken = sign(
        {name: user.name, id: user.id, role_id: user.role_id},
        jwtConfig.SECRET_KEY
    );

    // const refreshToken = sign(
    //     { name: user.name, id: user.id },
    //     jwtConfig.REFRESH_TOKEN_SECRET_KEY
    // );

    // return accessToken, refreshToken;
    return accessToken;
}; 

const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"]
    if (!accessToken) return res.status(400).json({ error: "User not Authenticated!" });
    try {
        const validToken = verify(accessToken, jwtConfig.SECRET_KEY)
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
        const validToken = verify(accessToken, jwtConfig.SECRET_KEY)
        if (validToken) {
            req.user = validToken
            req.authenticated = true
            return next()
        }
        
    } catch(err)  {
        return res.status(400).json({ error: err });
    } 
};

const authorize = (roles = []) => {
    // let role_idExist = false; 
    if (typeof roles === 'number') {
        roles = [roles]
        // if (roles[0] == 1 || roles[0] == 2 || roles[0] == 3) {
            // role_idExist = true;
            // console.log(isExist)
    }
        
        
    return (req, res, next) => {
        if (roles.length && !roles.includes(req.user.role_id)) return res.status(401).json({ error: "User not Authorized!" }); 
        next();
    };
};
    

module.exports = {createToken, validateToken, authorize, validateAccountPasswordToken}