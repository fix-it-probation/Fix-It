const sql = require("../helpers/db.js");
const {today, tomorrow} = require ("../middleware/time.js")

today.toISOString().slice(0, 19).replace('T', ' ');
tomorrow.toISOString().slice(0, 19).replace('T', ' ');

// constructor
const Service = function(service) {
    this.name = service.name;
    this.description = service.description;
    this.province = service.province;
    this.city = service.city;
    this.address = service.address;
    this.totalDay = service.totalDay;
    this.totalPrice = service.totalPrice;
    this.user_id = service.user_id;
    this.isVerified = service.isVerified;
    this.timestamp = tomorrow;
};

Service.create = (newService, result) => {
    sql.query("INSERT INTO services SET ?", newService, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created service: ", { id: res.insertId, ...newService });
        result(null, { id: res.insertId, ...newService });
    });
};

Service.findById = (serviceId, result) => {
    sql.query(`SELECT * FROM services WHERE id = ${serviceId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found service: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

Service.getAll = result => {
    sql.query("SELECT * FROM services", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("services: ", res);
        result(null, res);
    });
};

Service.updateById = (id, service, result) => {
    sql.query(
        "UPDATE services SET name = ?, description = ?, province = ?, city = ?, address = ?, totalDay = ?, totalPrice = ?, user_id =? WHERE id = ?",
        [service.name, service.description, service.province, service.city, service.address, service.totalDay, service.totalPrice, service.user_id, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found Service with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("updated service: ", { id: id, ...service });
            result(null, { id: id, ...service });
        }
    );
};

Service.remove = (id, result) => {
    sql.query("DELETE FROM services WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Service with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted service with id: ", id);
        result(null, res);
    });
};

Service.removeAll = result => {
    sql.query("DELETE FROM services", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        return;
        }

        console.log(`deleted ${res.affectedRows} services`);
        result(null, res);
    });
};

// Service.verifyById = (serviceId, result) => {
//     sql.query(`UPDATE services set isVerified = ${true}, timestamp = DATE_ADD( ${today} , INTERVAL totalDay day) WHERE id = ${serviceId}`,
//     (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err);
//         return;
//         }

//         console.log(`deleted ${res.affectedRows} services`);
//         result(res);
//     });
// };


Service.verifyById = (id, result) => {
    sql.query(`UPDATE services set isVerified = ?, timestamp = DATE_ADD( ? , INTERVAL totalDay day) WHERE id = ?`, [true,today,id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Service with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("verified service with id: ", id);
        result(null, res);
        return;
    });
};


Service.findByUserId = (userId, result) => {
    sql.query("SELECT * FROM services where user_id = ?",userId, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("services: ", res);
        result(null, res);
    });
};


module.exports = Service;