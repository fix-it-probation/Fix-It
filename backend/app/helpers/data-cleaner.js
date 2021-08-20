// const Service = require("../models/service.model.js");
const sql = require("../helpers/db.js");
const schedule = require('node-schedule');
// const time = require("../middleware/time")
const { tomorrow, today }= require ("./time");

const rule = new schedule.RecurrenceRule();
rule.second = 1;

const job = schedule.scheduleJob(rule, removexpiredAll => {
    sql.query(`DELETE FROM services where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s')`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            // result(null, err);
        return;
        }
    
        console.log(`deleted ${res.affectedRows} services`);
        // result(null, res);
    });
    
    // sql.query(`SELECT timestamp , STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s') FROM services`, (err, res) => {
    //     if (err) {
    //         console.log("error: ", err);
    //         // result(null, err);
    //     return;
    //     }
    
    //     // console.log(`deleted ${res.affectedRows} services`);
    //     console.log(res)
    //     console.log(today())
    //     // result(null, res);
    // });
    // // console.log(today().toISOString().slice(0, 19))

    sql.query(`DELETE FROM banners where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s')`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            // result(null, err);
        return;
        }
    
        console.log(`deleted ${res.affectedRows} banners`);
        // result(null, res);
    });

    sql.query(`DELETE FROM feeds where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s')`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            // result(null, err);
        return;
        }
    
        console.log(`deleted ${res.affectedRows} feeds`);
        // result(null, res);
    });
});