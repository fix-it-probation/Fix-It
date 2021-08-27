const sql = require("../helpers/db.js");
const { today, tomorrow }= require ("../helpers/time.js");
const fs = require("fs");

today().toISOString().slice(0, 19)
tomorrow().toISOString().slice(0, 19)

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
    this.receipt_url = service.receipt_url;
    this.image_url1= service.image_url1,
    this.image_url2= service.image_url2,
    this.image_url3= service.image_url3,
    this.isVerified = service.isVerified;
    this.timestamp = tomorrow();
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
    sql.query(` SELECT * FROM services WHERE id = ${id};
                DELETE FROM services WHERE id = ?`, id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res[1].affectedRows == 0) {
            // not found Service with the id
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
            fs.unlink(`public/assets/uploads/${res[0][i].image_url1}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][i].image_url1}`);
            });
            fs.unlink(`public/assets/uploads/${res[0][i].image_url2}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][i].image_url2}`);
            });
            fs.unlink(`public/assets/uploads/${res[0][i].image_url3}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][i].image_url3}`);
            });
            fs.unlink(`public/assets/uploads/${res[0][i].receipt_url}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][i].receipt_url}`);
            });
        } 

        console.log("deleted service with id: ", id);
        result(null, res);
    });
};

Service.removeAll = result => {    
    sql.query(` SELECT * FROM services;
                DELETE FROM services;`, (err, res) => {
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
            fs.unlink(`public/assets/uploads/${res[0][i].image_url1}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][i].image_url1}`);
            });
            fs.unlink(`public/assets/uploads/${res[0][i].image_url2}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][i].image_url2}`);
            });
            fs.unlink(`public/assets/uploads/${res[0][i].image_url3}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][i].image_url3}`);
            });
            fs.unlink(`public/assets/uploads/${res[0][i].receipt_url}`, (err) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log(`deleted image: public/assets/uploads/${res[0][i].receipt_url}`);
            });
        }
        console.log(`deleted ${res[1].affectedRows} services`);
        result(null, res);
    });
};

Service.verifyById = (id, data) => {
    let today_ = today();
    today_.setDate(today_.getDate()+data.totalDay);

    sql.query(`UPDATE services set isVerified = ?, timestamp = DATE_ADD( ? , INTERVAL totalDay day) WHERE id = ?`, [true,today_,id], (err, res) => {
        if (err) throw (err);
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

Service.findByKeyword = (keyword, result) => {
    sql.query(`select * from services where name like "% ${keyword} %" or name like "% ${keyword}" or name like "${keyword} %"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        
        if (res.length) {
            console.log("found user: ", res);
            result(null, res);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

Service.findVerifiedByKeyword = (keyword, result) => {
    sql.query(`select * from services where (name like "% ${keyword} %" or name like "% ${keyword}" or name like "${keyword} %") and isVerified = true`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        
        if (res.length) {
            console.log("found user: ", res);
            result(null, res);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

Service.getVerifiedAll = result => {
    sql.query("SELECT * FROM services where isVerified = true", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("services: ", res);
        result(null, res);
    });
};

Service.getTotalPending = result => {
    sql.query(`SELECT COUNT(isVerified) AS "Verifikasi Mitra" FROM services WHERE isVerified = false`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("feeds: ", res);
        result(null, res);
    });
};

Service.uploadReceiptById =  (id,receipt_url, result)  => {
    sql.query(` SELECT * FROM services WHERE id = ${id};
                UPDATE services set receipt_url = "${receipt_url}" WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
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
        if (res.affectedRows[1] == 0) {
            // not found Feed with the id
            result({ kind: "not_found" }, null);
            return;
        }
    
        console.log("updated service: ", { id: id, receipt: receipt_url });
        result(null, { id: id, receipt: receipt_url  });
    });
}; 

module.exports = Service;