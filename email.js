
const nodemailer=require("nodemailer")

async function sendEmail(to,subject,text){
 const transporter=nodemailer.createTransport({
  host:"smtp.example.com",
  port:587,
  secure:false,
  auth:{user:"user@example.com",pass:"password"}
 })

 await transporter.sendMail({
  from:"support@example.com",
  to,
  subject,
  text
 })
}

module.exports={sendEmail}
