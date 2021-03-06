const sql = require("../helpers/db.js");
const { tomorrow } = require("../helpers/time");
const fs = require("fs");

// constructor
const Banner = function(banner) {
    let tomorrow_ = tomorrow();
    tomorrow_.setDate(tomorrow_.getDate()+banner.totalDay);
    
    this.link = banner.link,
    this.totalDay = banner.totalDay,
    this.image_url = banner.image_url,
    this.timestamp = tomorrow_
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
    sql.query("SELECT * FROM banners WHERE id = ? ; DELETE FROM banners WHERE id = ?;", [id,id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res[1].affectedRows == 0) {
            // not found Banner with the id
            result({ kind: "not_found" }, null);
            return;
        }

        for (let i = 0 ; i < res[0].length ;i++){
            fs.unlink(`public/assets/uploads/${res[0][i].image_url}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][i].image_url}`);
            });
        } 

        console.log("deleted banner with id: ", id);
        result(null, res[1]);
    });
};

Banner.removeAll = result => {
    sql.query(`SELECT * FROM banners`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            return;
        }

        for (let i = 0 ; i < res.length ;i++){
            fs.unlink(`public/assets/uploads/${res[i].image_url}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[i].image_url}`);
            });
        } 
    });
    

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