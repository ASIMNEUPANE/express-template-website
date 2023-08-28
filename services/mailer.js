const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "asimneupane11@gmail.com",
    pass: "tbghlfogijstuyve",
  },
});

transporter.verify((error, success)=> {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const sendEmail = async (payload) => {
  const { from, to, message } = payload;

  const info = await transporter.sendMail({
    from: from,
    to: to,
    subject: "Hello ✔",
    text: "Hello world?",
    html: message,
  });

  return info.messageId;
};

module.exports = { sendEmail };
