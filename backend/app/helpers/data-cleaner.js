const sql = require("../helpers/db.js");
const schedule = require('node-schedule');
const { today }= require ("./time");
const fs = require("fs");
// const { sql } = require('googleapis/build/src/apis/sql');

const rule = new schedule.RecurrenceRule();
rule.second = 1;

const job = schedule.scheduleJob(rule, removexpiredAll => {
    sql.query(`SELECT * FROM banners where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s')`, (err, res) => {
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

    sql.query(`SELECT * FROM services where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s')`, (err, res) => {
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

    sql.query(`SELECT * FROM feeds where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s')`, (err, res) => {
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

    sql.query(`DELETE FROM services where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s')`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            // result(null, err);
        return;
        }
    
        console.log(`deleted ${res.affectedRows} services`);
        // result(null, res);
    });


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

    console.log(today().toISOString().slice(0, 19))
});