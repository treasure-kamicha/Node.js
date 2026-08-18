
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kamichatreasure890@gmail.com',
    pass: 'YOUR_16_CHAR_APP_PASSWORD' 
  }
})
const mailOptions = {
  from: 'kamichatreasure890@gmail.com',
  to: 'kamichatreasure890@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Hello! This email was sent using Node.js and Nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});

