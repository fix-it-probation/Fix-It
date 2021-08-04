const{sign, verify} = require('jsonwebtoken');
require("dotenv").config()

const createToken = (user) => {
    const accessToken = sign(
        {name: user.name, id: user.id, role_id: user.role_id},
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
    

module.exports = {createToken, validateToken, validateAccountPasswordToken}