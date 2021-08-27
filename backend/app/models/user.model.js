const sql = require("../helpers/db.js");
const fs = require("fs");

// constructor
const User = function(user) {
    this.name = user.name;
    this.telephone = user.telephone;
    this.email = user.email;
    this.password = user.password;
    this.role_id = user.role_id;
    this.address = user.address;
    this.province = user.province;
    this.city = user.city;
    this.avatar_url = user.avatar_url;
    this.uniqueString = user.uniqueString;
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO useraccounts SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created user: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

User.findById = (userId, result) => {
    sql.query(`SELECT * FROM useraccounts WHERE id = ${userId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

User.findByEmail = async (userEmail, result) => {
    sql.query(`SELECT * FROM useraccounts WHERE email = "${userEmail}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

User.getAll = result => {
    sql.query("SELECT * FROM useraccounts", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("users: ", res);
        result(null, res);
    });
};

User.updateById = (id, user, result) => {
    sql.query(
        "SELECT * FROM useraccounts where id = ?; UPDATE useraccounts SET name = ?, telephone = ?, email = ?, password = ?, address = ?, province = ?, city = ?, role_id = ?, avatar_url = ? WHERE id = ?;",
        [id,user.name, user.telephone, user.email, user.password, user.address, user.province, user.city,user.role_id, user.avatar_url, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res[0].affectedRows == 0) {
                // not found User with the id
                result({ kind: "not_found" }, null);
                return;
            }
            console.log(res)

            fs.unlink(`public/assets/uploads/${res[0][0].avatar_url}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][0].avatar_url}`);
            });

            console.log("updated user: ", { id: id, ...user });
            result(null, { id: id, ...user });
        }
    );
};

User.remove = (id, result) => {
    sql.query(` SELECT * FROM useraccounts where id = ${id};
                DELETE FROM useraccounts WHERE id = ${id};`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res[0].affectedRows == 0) {
            // not found User with the id
            result({ kind: "not_found" }, null);
            return;
        }
        for (let i = 0 ; i < res[0].length ;i++){
            fs.unlink(`public/assets/uploads/${res[0][i].avatar_url}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][i].avatar_url}`);
            });
        }

        console.log("deleted user with id: ", id);
        result(null, res[1]);
    });
};

User.removeAll = result => {
    sql.query("SELECT * FROM useraccounts; DELETE FROM useraccounts", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        for (let i = 0 ; i < res[0].length ;i++){
            fs.unlink(`public/assets/uploads/${res[0][i].avatar_url}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][i].avatar_url}`);
            });
        } 

        console.log(`deleted ${res[1].affectedRows} users`);
        result(null, res[1]);
    });
};

User.resetPassword = (email, newPass, res) => {
    sql.query(`UPDATE useraccounts set password = ? WHERE email = ?`,
    [newPass, email],
    (err, data) => {
    if (err) {
        console.log(err)
        } 
    })
}

module.exports = User;