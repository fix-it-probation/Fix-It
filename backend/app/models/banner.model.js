const sql = require("../helpers/db.js");
const {today,tomorrow} = require("../helpers/time")

// constructor
const Banner = function(banner) {
    this.link = banner.link;
    this.timestamp = tomorrow()
};

Banner.create = (newBanner, result) => {
    sql.query("INSERT INTO banners SET ?", newBanner, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created banner: ", { id: res.insertId, ...newBanner });
        result(null, { id: res.insertId, ...newBanner });
    });
};

Banner.findById = (bannerId, result) => {
    sql.query(`SELECT * FROM banners WHERE id = ${bannerId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found banner: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Banner with the id
        result({ kind: "not_found" }, null);
    });
};

Banner.getAll = result => {
    sql.query("SELECT * FROM banners", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("banners: ", res);
        result(null, res);
    });
};

Banner.updateById = (id, banner, result) => {
    sql.query(
        "UPDATE banners SET link =? WHERE id = ?",
        [banner.link, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Banner with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated banner: ", { id: id, ...banner });
            result(null, { id: id, ...banner });
          }
      );
};

Banner.remove = (id, result) => {
    sql.query("DELETE FROM banners WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Banner with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted banner with id: ", id);
        result(null, res);
    });
};

Banner.removeAll = result => {
    sql.query("DELETE FROM banners", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        return;
        }

        console.log(`deleted ${res.affectedRows} banners`);
        result(null, res);
    });
};


Banner.findByUserId = (userId, result) => {
    sql.query("SELECT * FROM banners where user_id = ?",userId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("banners: ", res);
        result(null, res);
    });
};


module.exports = Banner;