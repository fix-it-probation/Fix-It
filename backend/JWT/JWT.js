const{sign, verify} = require('jsonwebtoken');

const createToken = (user) => {
    const accessToken = sign(
        { name: user.name, id: user.id },
         "jwtsecret"
    
    );
    return accessToken;
}; 

const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"]
    if (!accessToken) return res.status(400).json({ error: "User not Authenticated!" });

    try {
        const validToken = verify(accessToken,"jwtsecret")
        if (validToken) {
            req.authenticated = true
            return next()
        }
        
    } catch(err)  {
        return res.status(400).json({ error: err });
    } 
};

module.exports = {createToken, validateToken}