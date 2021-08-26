const sql = require("../helpers/db.js");

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
    // this.isValid = user.isValid;
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

User.findByUniqueString = (uniqueString, result) => {
    sql.query(`SELECT * FROM useraccounts WHERE uniqueString = ${uniqueString}`, (err, res) => {
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
        "UPDATE useraccounts SET name = ?, telephone = ?, email = ?, password = ?, address = ?, province = ?, city = ?, role_id = ?, avatar_url = ? WHERE id = ?",

        [user.name, user.telephone, user.email, user.password, user.address, user.province, user.city,user.role_id, user.avatar_url, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found User with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated user: ", { id: id, ...user });
            result(null, { id: id, ...user });
        }
    );
};

User.remove = (id, result) => {
    sql.query("DELETE FROM useraccounts WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found User with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted user with id: ", id);
        result(null, res);
    });
};

User.removeAll = result => {
    sql.query("DELETE FROM useraccounts", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log(`deleted ${res.affectedRows} users`);
        result(null, res);
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

User.uploadAvatarById =  (id,avatar_url, result)  => {
    sql.query(`UPDATE useraccounts set avatar_url = "${avatar_url}" WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Feed with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("updated feed: ", { id: id, receipt: avatar_url });
        result(null, { id: id, receipt: avatar_url  });
      }
    ); 
}


module.exports = User;