const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gsai250804@gmail.com',
    pass: 'lqkw swou wrlu bbpa'
  }
});

app.post('/api/send-email', (req, res) => {
  const { name, dedicated, email, message } = req.body;

  const mailOptions = {
    from: 'gsai250804@gmail.com',
    to: email,
    subject: 'Live Song Request Confirmation',
    text: `
      Thank you for contacting us, ${name}!

      Your song request details are:
      Song Dedicated to: ${dedicated}
      Message: ${message}

      We've received your request and will process it successfully.
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});