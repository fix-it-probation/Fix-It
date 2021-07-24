const{sign, verify} = require('jsonwebtoken');
const jwtConfig = require('../app/config/config.js')

const createToken = (user) => {
    const accessToken = sign(
        { name: user.name, id: user.id },
        jwtConfig.SECRET_KEY
    
    );
    return accessToken;
}; 

const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"]
    if (!accessToken) return res.status(400).json({ error: "User not Authenticated!" });

    try {
        const validToken = verify(accessToken, jwtConfig.SECRET_KEY)
        if (validToken) {
            req.authenticated = true
            return next()
        }
        
    } catch(err)  {
        return res.status(400).json({ error: err });
    } 
};

module.exports = {createToken, validateToken}