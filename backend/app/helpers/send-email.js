const nodemailer = require('nodemailer');
const mailConfig = require("../config/config.js")
require("dotenv").config()

exports.sendMail = (email, uniqueString) => {
    var Transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        service: "Gmail",
        auth: {
            user: mailConfig.EMAIL,
            pass: mailConfig.EMAIL_PASSWORD
        } 
    });

    var mailOptions;
    let sender = Transport;
    mailOptions = {
        from: sender,
        to: email,
        subject: "Email Confirmation",
        html:  `Press <a href=http://localhost:3000/users/verify/${uniqueString}> Here </a> to Verify Email. Thank You.`
    };

    Transport.sendMail(mailOptions, (error, res) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Message Sent");
        }
    })
};

exports.randString = () => {
    const len = 10
    let randStr = ""
    for (let i=0; i<len; i++) {
        const ch = Math.floor((Math.random() * 10) + 1)
        randStr += ch
    }
    return randStr
}

