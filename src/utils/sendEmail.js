const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "alexbrad1717@gmail.com",
    pass: "gowllcqzkpdrkmdf",
  },
});

module.exports = transporter;
