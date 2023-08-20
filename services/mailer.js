
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
 
    user: 'asimneupane11@gmail.com',
    pass: 'ffhkoxzokvfmimom'

  }
});


const sendEmail= async(payload)=> {
    const {from, to , message}= payload;
  
  const info = await transporter.sendMail({
    from: from, 
    to: to, 
    subject: "Hello ✔", 
    text: "Hello world?", 
    html: message.toString(),
  });

 return info.messageId;
 
}

module.exports= {sendEmail};
