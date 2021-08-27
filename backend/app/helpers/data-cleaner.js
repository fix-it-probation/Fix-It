const sql = require("../helpers/db.js");
const schedule = require('node-schedule');
const { today }= require ("./time");
const fs = require("fs")

const rule = new schedule.RecurrenceRule();
rule.second = 1;

const job = schedule.scheduleJob(rule, () => {
    sql.query(` SELECT * FROM feeds where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s'); SELECT * FROM services where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s'); SELECT * FROM banners where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s'); DELETE FROM feeds where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s'); DELETE FROM services where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s'); DELETE FROM banners where timestamp < STR_TO_DATE('${today().toISOString().slice(0, 19)}','%Y-%m-%dT%H:%i:%s');`, (err, res) => {
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
                        console.log(`deleted feed image: public/assets/uploads/${res[i][j].image_url}`);
                    });
                    fs.unlink(`public/assets/uploads/${res[i][j].receipt_url}`, (err) => {
                        if (err) {
                            console.log("error: ", err);
                            return;
                        }
                        console.log(`deleted feed receipt: public/assets/uploads/${res[i][j].receipt_url}`);
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
                        console.log(`deleted image 1: public/assets/uploads/${res[i][j].image_url1}`);
                    });

                    fs.unlink(`public/assets/uploads/${res[i][j].image_url2}`, (err) => {
                        if (err) {
                            console.log("error: ", err);
                            return;
                        }
                        console.log(`deleted image 2: public/assets/uploads/${res[i][j].image_url2}`);
                    });
                    fs.unlink(`public/assets/uploads/${res[i][j].image_url3}`, (err) => {
                        if (err) {
                            console.log("error: ", err);
                            return;
                        }
                        console.log(`deleted image 3: public/assets/uploads/${res[i][j].image_url3}`);
                    });
                    fs.unlink(`public/assets/uploads/${res[i][j].receipt_url}`, (err) => {
                        if (err) {
                            console.log("error: ", err);
                            return;
                        }
                        console.log(`deleted service receipt: public/assets/uploads/${res[i][j].receipt_url}`);
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
                        console.log(`deleted banner image: public/assets/uploads/${res[i][j].image_url}`);
                    });
                }
            }
        }
        
        console.log(`deleted ${res[3].affectedRows} feeds`);
        console.log(`deleted ${res[4].affectedRows} services`);
        console.log(`deleted ${res[5].affectedRows} banners`);

        console.log(res)
        // result(null, res);
    });
    console.log(today().toISOString().slice(0, 19))
});