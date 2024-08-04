const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_POST,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  console.log(name, email, message);

  var mailOption = {
    from: email,
    to: process.env.SMTP_MAIL,
    subject: name,
    text: message,
  };

  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent successfully!");
    }
  });
});

module.exports = { sendEmail };
