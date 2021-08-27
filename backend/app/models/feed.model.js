const sql = require("../helpers/db.js");
const {today, tomorrow} = require("../helpers/time");
const fs = require("fs");

// constructor
const Feed = function(feed) {
    this.title = feed.title;
    this.description = feed.description;
    this.link = feed.link;
    this.totalDay = feed.totalDay;
    this.totalPrice = feed.totalPrice;
    this.isVerified = false;
    this.image_url = feed.image_url;
    this.user_id = feed.user_id;
    this.timestamp = tomorrow();
};

Feed.create = (newFeed, result) => {
    sql.query("INSERT INTO feeds SET ?", newFeed, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created feed: ", { id: res.insertId, ...newFeed });
        result(null, { id: res.insertId, ...newFeed });
    });
};

Feed.findById = (feedId, result) => {
    sql.query(`SELECT * FROM feeds WHERE id = ${feedId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found feed: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Banner with the id
        result({ kind: "not_found" }, null);
    });
};

Feed.getAll = result => {
    sql.query("SELECT * FROM feeds", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("feeds: ", res);
        result(null, res);
    });
};

Feed.updateById = (id, feed, result) => {
    sql.query(
        "UPDATE feeds SET title = ?, description = ?, link = ? WHERE id = ?",
        [feed.title, feed.description, feed.link, id],
        (err, res) => {
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

            console.log("updated feed: ", { id: id, ...feed });
            result(null, { id: id, ...feed });
          }
    );
};

Feed.remove = (id, result) => {
    sql.query(` SELECT * FROM feeds;
                DELETE FROM feeds WHERE id = ?`, id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res[1].affectedRows == 0) {
            // not found Feed with the id
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
            fs.unlink(`public/assets/uploads/${res[0][i].receipt_url}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][i].receipt_url}`);
            });
        } 

        console.log("deleted feed with id: ", id);
        result(null, res[1]);
    });
};

Feed.removeAll = result => {
    sql.query(` SELECT * FROM feeds;
                DELETE FROM feeds`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
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
            fs.unlink(`public/assets/uploads/${res[0][i].receipt_url}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][i].receipt_url}`);
            });
        }

        console.log(`deleted ${res[1].affectedRows} feeds`);
        result(null, res[1]);
    });
};

Feed.findByUserId = (userId, result) => {
    sql.query("SELECT * FROM feeds where user_id = ?",userId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("feeds: ", res);
        result(null, res);
    });
};

Feed.verifyById = (id, data) => {
    let today_ = today();
    today_.setDate(today_.getDate()+data.totalDay);

    sql.query(`UPDATE feeds set isVerified = ?, timestamp = DATE_ADD( ? , INTERVAL totalDay day) WHERE id = ?`, [true,today_,id], (err, res) => {
        if (err) {
            throw err;
        } 
    });
};

Feed.getVerifiedAll = result => {
    sql.query("SELECT * FROM feeds where isVerified = true", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("feeds: ", res);
        result(null, res);
    });
};

Feed.getTotalPending = result => {
    sql.query(`SELECT COUNT(isVerified) as "Ads Verification" from feeds where isVerified = false`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("feeds: ", res);
        result(null, res);
    });
};

Feed.uploadReceiptById =  (id,receipt_url, result)  => {    
    sql.query(` SELECT * FROM feeds where id = ${id};
                UPDATE feeds set receipt_url = "${receipt_url}" WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res[1].affectedRows == 0) {
            // not found Feed with the id
            result({ kind: "not_found" }, null);
            return;
        }

        for (let i = 0 ; i < res[0].length ;i++){
            fs.unlink(`public/assets/uploads/${res[0][i].receipt_url}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][i].receipt_url}`);
            });
        } 

        console.log("updated feed: ", { id: id, receipt: receipt_url });
        result(null, { id: id, receipt: receipt_url  });
      }
    ); 
}

module.exports = Feed;