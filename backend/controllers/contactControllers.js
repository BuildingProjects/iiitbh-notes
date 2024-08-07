const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
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
    from: `${name} <${process.env.SMTP_MAIL}>`,
    sender: email,
    to: process.env.SMTP_MAIL,
    replyTo: email,
    subject: `Message from ${name}`,
    text: `From: ${email}\n\n${message}`,
  };
  console.log(mailOption.from);

  try {
    transporter.sendMail(mailOption, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent successfully!");
        res.json({
          statusCode: 200,
          message: "Email Sent Successfully",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "Failure",
    });
  }
});

module.exports = { sendEmail };
