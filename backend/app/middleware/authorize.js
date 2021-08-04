const authorize = (roles = []) => {
    if (typeof roles === "string") {
        if (roles === "admin") {
            roles = [1]
        } else if (roles === "mitra") {
            roles = [2]
        } else if (roles === "user") {
            roles = [3]
        }
    }
        
        
    return (req, res, next) => {
        if (roles.length && !roles.includes(req.user.role_id)) return res.status(401).json({ error: "User not Authorized!" }); 
        next();
    };
};

module.exports = { authorize };