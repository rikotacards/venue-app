// send emails: https://stackoverflow.com/questions/48854066/missing-credentials-for-plain-nodemailer
// NOt required to use xoatuh2, there was an issue when you don't include access token
// Access token is received from the Google Oauth playground. 

const express = require('express');
const app = express();
const pg = require('./database/index')
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const creds = require('./config');
const port = process.env.PORT || 5000;

const transport = {
  // service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
      type: 'OAuth2',
        user: creds.USER,
        pass: creds.PASS,
        clientId: '272399903195-82idp9t0c94fnejt4or78b776qtkto6t.apps.googleusercontent.com',
        clientSecret: creds.CLIENTSEC,
        refreshToken: '1/XXxXxsss-1//048Tq1iWktsRrCgYIARAAGAQSNwF-L9IrvouA6o4lK0Dho1Y4zrnvkm2jbN2ruYLiC7lSfVC2wMoaoJXwHBGK5ytu2Co-oB971m0',
        accessToken: 'ya29.Il-vB-8ZfzYnL8FCcQTZMy3VjziIyMsYxLhb5nnuOcguQ9aXqfKX6g4tNbghLKR2Z9DKDhsDwH0iv8GJp9o5sIhs8VbcSZUY_N75oQu2eB2obRAUMMFATfmK3mYAX9rSKQ'
  },
  logger: true,
  debug: true,
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log('ERROR')
    console.log(error);
  } else {
    console.log('All works fine, congratz!');
  }
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', async (req, res) => {
  console.log('server hit')
  const output = await pg.getAllItems()
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.use(express.json())
app.post('/send', (req, res, next) => {
  console.log('POST /send endpoint hit')
  console.log(req.body);
  const name = req.body.firstName
  const email = req.body.email
  const message = req.body.messageHtml


  const mail = {
    from: '<maxhsu1@gmail.com>',
    to: 'maxhsu1@gmail.com',  
    subject: 'Contact form request',
    html: name
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log('error')
      console.log(err)
      res.json({
        msg: 'fail'
      })
    } else {
      console.log('email sent')
      res.json({
        msg: 'success'
      })
    }
  })
})


app.listen(port, () => console.log(`Listening on port ${port}`));