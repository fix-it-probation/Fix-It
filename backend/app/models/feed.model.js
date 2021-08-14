const sql = require("../helpers/db.js");

// constructor
const Feed = function(feed) {
    this.title = feed.title;
    this.description = feed.description;
    this.link = feed.link;
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
    sql.query("DELETE FROM feeds WHERE id = ?", id, (err, res) => {
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

        console.log("deleted feed with id: ", id);
        result(null, res);
    });
};

Feed.removeAll = result => {
    sql.query("DELETE FROM feeds", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        return;
        }

        console.log(`deleted ${res.affectedRows} feeds`);
        result(null, res);
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


module.exports = Feed;