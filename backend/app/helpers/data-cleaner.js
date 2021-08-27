const sql = require("../helpers/db.js");
const schedule = require('node-schedule');
const { today }= require ("./time");
const fs = require("fs");
// const { sql } = require('googleapis/build/src/apis/sql');

const rule = new schedule.RecurrenceRule();
rule.second = 1;

const job = schedule.scheduleJob(rule, removexpiredAll => {
    // sql.query(`SELECT * FROM banners where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s')`, (err, res) => {
    //     if (err) {
    //         console.log("error: ", err);
    //         return;
    //     }
    
    //     for (let i = 0 ; i < res.length ;i++){
    //         fs.unlink(`public/assets/uploads/${res[i].image_url}`, (err) => {
    //             if (err) {
    //                 console.log("error: ", err);
    //                 return;
    //             } 
    //             console.log(`deleted image: public/assets/uploads/${res[i].image_url}`);
    //         });
    //     } 
    // });

    // sql.query(`SELECT * FROM services where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s')`, (err, res) => {
    //     if (err) {
    //         console.log("error: ", err);
    //         return;
    //     }

    //     for (let i = 0 ; i < res.length ;i++){
    //         fs.unlink(`public/assets/uploads/${res[i].image_url}`, (err) => {
    //             if (err) {
    //                 console.log("error: ", err);
    //                 return;
    //             } 
    //             console.log(`deleted image: public/assets/uploads/${res[i].image_url}`);
    //         });
    //     } 
    // });

    // sql.query(`SELECT * FROM feeds where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s')`, (err, res) => {
    //     if (err) {
    //         console.log("error: ", err);
    //         return;
    //     }

    //     for (let i = 0 ; i < res.length ;i++){
    //         fs.unlink(`public/assets/uploads/${res[i].image_url}`, (err) => {
    //             if (err) {
    //                 console.log("error: ", err);
    //                 return;
    //             }
    //             console.log(`deleted image: public/assets/uploads/${res[i].image_url}`);
    //         });
    //     } 
    // });

    // sql.query(`DELETE FROM services where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s')`, (err, res) => {
    //     if (err) {
    //         console.log("error: ", err);
    //         // result(null, err);
    //     return;
    //     }
    
    //     console.log(`deleted ${res.affectedRows} services`);
    //     // result(null, res);
    // });


    // sql.query(`DELETE FROM banners where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s')`, (err, res) => {
    //     if (err) {
    //         console.log("error: ", err);
    //         // result(null, err);
    //     return;
    //     }
    
    //     console.log(`deleted ${res.affectedRows} banners`);
    //     // result(null, res);
    // });


    // sql.query(`DELETE FROM feeds where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s')`, (err, res) => {
    //     if (err) {
    //         console.log("error: ", err);
    //         // result(null, err);
    //     return;
    //     }
    
    //     console.log(`deleted ${res.affectedRows} feeds`);
    //     // result(null, res);
    // });

    // const dataCleanArr = ["feeds", "banners", "services"]

    // for (let i = 0 ; i < 3 ; i++){

    //         sql.query(`DELETE FROM ${dataCleanArr[i]} where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s')`, (err, res) => {
    //         if (err) {
    //             console.log("error: ", err);
    //             // result(null, err);
    //         return;
    //         }

    //         console.log(`deleted ${res.affectedRows} ${dataCleanArr[i]}`);
    //         // result(null, res);
    //     });
    // }
    

    sql.query(` SELECT * FROM feeds where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s');
                SELECT * FROM services where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s');
                SELECT * FROM banners where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s');
                DELETE FROM feeds where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s');
                DELETE FROM services where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s');  
                DELETE FROM banners where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s');`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            // result(null, err);
        return;
        }
        for (let i = 0 ; i < 3; i++){
            if (i == 0){
                for (let j = 0 ; j < res[i].length ;j++){
                    fs.unlink(`public/assets/uploads/${res[i][j].image_url}`, (err) => {
                        if (err) {
                            console.log("error: ", err);
                            return;
                        }
                        console.log(`deleted image: public/assets/uploads/${res[i][j].image_url}`);
                    });
                    fs.unlink(`public/assets/uploads/${res[i][j].receipt_url}`, (err) => {
                        if (err) {
                            console.log("error: ", err);
                            return;
                        }
                        console.log(`deleted image: public/assets/uploads/${res[i][j].receipt_url}`);
                    });
                }

            }
            if (i == 1){
                for (let j = 0 ; j < res[i].length ;j++){
                    fs.unlink(`public/assets/uploads/${res[i][j].image_url1}`, (err) => {
                        if (err) {
                            console.log("error: ", err);
                            return;
                        }
                        console.log(`deleted image: public/assets/uploads/${res[i][j].image_url1}`);
                    });
                    fs.unlink(`public/assets/uploads/${res[i][j].image_url2}`, (err) => {
                        if (err) {
                            console.log("error: ", err);
                            return;
                        }
                        console.log(`deleted image: public/assets/uploads/${res[i][j].image_url2}`);
                    });
                    fs.unlink(`public/assets/uploads/${res[i][j].image_url3}`, (err) => {
                        if (err) {
                            console.log("error: ", err);
                            return;
                        }
                        console.log(`deleted image: public/assets/uploads/${res[i][j].image_url3}`);
                    });
                    fs.unlink(`public/assets/uploads/${res[i][j].receipt_url}`, (err) => {
                        if (err) {
                            console.log("error: ", err);
                            return;
                        }
                        console.log(`deleted image: public/assets/uploads/${res[i][j].receipt_url}`);
                    });
                } 
            }
            if (i == 2){
                for (let j = 0 ; j < res[i].length ;j++){
                    fs.unlink(`public/assets/uploads/${res[i][j].image_url}`, (err) => {
                        if (err) {
                            console.log("error: ", err);
                            return;
                        }
                        console.log(`deleted image: public/assets/uploads/${res[i][j].image_url}`);
                    });
                }
            }
        }
        
        console.log(`deleted ${res[3].affectedRows} feeds`);
        console.log(`deleted ${res[4].affectedRows} services`);
        console.log(`deleted ${res[5].affectedRows} banners`);
        // result(null, res);
    });
    console.log(today().toISOString().slice(0, 19))
});