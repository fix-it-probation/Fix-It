const authorize = (roles = []) => {
    for (let i = 0; i < roles.length; i++) {
        if (typeof roles[i] === "string") {
            if (roles[i] === "admin") {
                roles[i] = 1
            } else if (roles[i] === "mitra") {
                roles[i] = 2
            } else if (roles[i] === "user") {
                roles[i] = 3
            }
        }
    }
        
    return (req, res, next) => {
        if (roles.length && !roles.includes(req.user.role_id)) {
            return res.status(401).json({ error: "User not Authorized!" }); 
        } else {
            next();
        }
    };
};

module.exports = { authorize };