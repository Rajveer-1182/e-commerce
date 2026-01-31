import nodemailer from 'nodemailer'

// const nodemailer = require("nodemailer")

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    //  jis email se user ko manage karna wo emaiil dena hai
    user: "chauhanrajveer1182@gmail.com",
    // 
    pass: "exof hdrm nmmd msmp",
  }
});


const sendEMail = async (req, res)=>{
try {
      const info = await transporter.sendMail({
    from: '"RjveerS_" <chauhanrajveer1182@gmail.com>',
    to: "bar@example.com, baz@example.com",
    subject: "Hello ✔",
    text: "Hello world?", // Plain-text version of the message
    html: "<b>Hello world?</b>", // HTML version of the message
  });
  console.log(info)
} catch (error) {
    console.log(error)
}
}

sendEMail()


