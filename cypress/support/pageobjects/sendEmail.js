const nodemailer = require('nodemailer');
const gmailTransport = require('nodemailer-smtp-transport');

// Configure email transporter
const transporter = nodemailer.createTransport(gmailTransport({
  service: 'gmail',
  auth: {
    user: 'ankita.singh@tothenew.com',
    pass: 'rfza xzeg zorw ufyc',
  },
}));

function sendEmail(emailOptions) {
  transporter.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.error('Error sending email:', err);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

module.exports = sendEmail;
