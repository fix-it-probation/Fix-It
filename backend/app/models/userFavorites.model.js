const sql = require("../helpers/db.js");

// constructor
const UserFavorite = function(userFavorite) {
    this.user_id = userFavorite.user_id;
    this.service_id = userFavorite.service_id;
};


UserFavorite.create = (newUserFavorite, result) => {
    sql.query("INSERT INTO userFavorites SET ?", newUserFavorite, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created userFavorite: ", { ...newUserFavorite });
        result(null, { ...newUserFavorite });
    });
};


UserFavorite.getAllByUserId = (user_id, result)  => {
    sql.query("select * from services as s inner join userFavorites as uf on uf.service_id = s.id inner join useraccounts as ua on ua.id = uf.user_id where uf.user_id = 2", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("userFavorites: ", res);
        result(null, res);
    });
};


UserFavorite.remove = (user_id, service_id, result) => {
    sql.query("DELETE FROM userFavorites WHERE user_id = ? and service_id = ?", [user_id, service_id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found userFavorite with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log(`deleted userFavorites with user id : ${user_id} and service id : ${service_id}`);
        result(null, res);
    });
};

UserFavorite.removeAll = result => {
    sql.query("DELETE FROM userFavorites", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        return;
        }

        console.log(`deleted ${res.affectedRows} userFavorite`);
        result(null, res);
    });
};


UserFavorite.getExistence = (user_id, service_id, result)  => {
    sql.query(`SELECT COUNT(*) as exist FROM userFavorites WHERE user_id = ${user_id} and service_id = ${service_id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("userFavorite: ", res);
        result(null, res);
    });
};


module.exports = UserFavorite;