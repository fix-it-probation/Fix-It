const nodemailer = require('nodemailer');
// const config = require("../config/config.js")

exports.sendMail = (email, uniqueString) => {
    var Transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "drunkwhales1@gmail.com",
            pass: "demolishedyouregopls"
        } 
    });

    var mailOptions;
    let sender = "Admin";
    mailOptions = {
        from: sender,
        to: email,
        subject: "Email Confirmation",
        html:  `Press <a href=http://localhost:3000/verify/${uniqueString}> Here </a> to Verify Email. Thank You.`
    };

    Transport.sendMail(mailOptions, (error, res) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Message Sent");
        }
    })
};

const randString = () => {
    const len = 8
    let randStr = ""
    for (let i=0; i<len; i++) {
        const ch = Math.floor((Math.random() * 10) + 1)
        randStr += ch
    }
    console.log(randString)
    return randStr
}

module.exports = randString;
