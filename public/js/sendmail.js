var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: "prokopchuk.vitaliy@gmail.com",
        pass: "FthuXx356789"
    }
});

smtpTransport.sendMail({
    from: document.getElementById('email_name').value + " " + document.getElementById('email_address_from').value, // sender address
    to: "prokopchuk.vitaliy@gmail.com", // comma separated list of receivers
    subject: document.getElementById('email_subject').value, // Subject line
    text: document.getElementById('email_text').value // plaintext body
}, function (error, response) {
    if (error) {
        console.log(error);
    }else {
        console.log("Message sent: " + response.message);
    }
});