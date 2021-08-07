const sql = require("../helpers/db.js");

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
                // not found Customer with the id
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
            // not found Customer with the id
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

module.exports = Service;