const nodemailer = require('nodemailer');
require("dotenv").config()

exports.sendMail = (email, subject, html) => {
    var Transport = nodemailer.createTransport({
        // host: 'smtp.mail.yahoo.com',
        // port: 465,
        // secure: true, // use SSL
        // service: "Yahoo",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        } 
    });

    var mailOptions;
    let sender = Transport;
    mailOptions = {
        from: sender,
        to: email,
        subject: subject,
        html:  html
        // html:  `Press <a href=http://localhost:3000/users/verify/${uniqueString}> Here </a> to Verify Email. Thank You.`
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
    const len = 20
    let randStr = ""
    for (let i=0; i<len; i++) {
        const ch = Math.floor((Math.random() * 10) + 1)
        randStr += ch
    }
    return randStr
}

