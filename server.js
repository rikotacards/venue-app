// send emails: https://stackoverflow.com/questions/48854066/missing-credentials-for-plain-nodemailer
// NOt required to use xoatuh2, there was an issue when you don't include access token
// Access token is received from the Google Oauth playground.

const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const pg = require("./database/index");
const bodyParser = require("body-parser");

const creds = require("./config");
const port = process.env.PORT || 5000;

const transport = {
  service: 'Gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: 'true',
  // auth: {
  //   user: creds.USER,
  //   pass: creds.PASS
  // }
  auth: {
    type: "OAuth2",
    user: creds.USER,
    // pass: creds.PASS,
    clientId:
      "912237516032-2351hsk80lhhsqjef5mifd6ihp9tp4ei.apps.googleusercontent.com",
    // clientId: '272399903195-82idp9t0c94fnejt4or78b776qtkto6t.apps.googleusercontent.com',
    clientSecret: "KqKn61tzBhzLGfpGbHyol1sm",
    // clientSecret: creds.CLIENTSEC,
    refreshToken:
     "1//04SfmAV-UmlaYCgYIARAAGAQSNwF-L9IrcSH0NWfYkhb96U5JSTU2Ek-y0z4N71FJlz29BZ79ggAClvzeaYQJEzcbBi4_Jh-qMdE", //<- venueeventshk@gmail.com
    // refreshToken: '1/XXxXxsss-1//048Tq1iWktsRrCgYIARAAGAQSNwF-L9IrvouA6o4lK0Dho1Y4zrnvkm2jbN2ruYLiC7lSfVC2wMoaoJXwHBGK5ytu2Co-oB971m0',
    accessToken:
      "ya29.Il-vB1ejtTClip7BbhYr_bCljpJ4FfXC___GQwSnQYNlg3N-SWrxlxLhpj4uA0KcJE8_S_RUdWboPmbbp_18Oqe9aUBkHA6eh0aPYGusKRAsEqTgESZEoUrGgGPRuPJ1xw",
    // accessToken: 'ya29.Il-vB-8ZfzYnL8FCcQTZMy3VjziIyMsYxLhb5nnuOcguQ9aXqfKX6g4tNbghLKR2Z9DKDhsDwH0iv8GJp9o5sIhs8VbcSZUY_N75oQu2eB2obRAUMMFATfmK3mYAX9rSKQ'
    tls: {
      rejectUnauthorized: false
    }
  }
};

let transporter = nodemailer.createTransport('smtps://venueeventshk%40gmail.com:iccmqdsnquihgnrs@smtp.gmail.com');

transporter.verify((error, success) => {
  if (error) {
    console.log("ERROR");
    console.log(error);
  } else {
    console.log("All works fine, congratz!");
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", async (req, res) => {
  console.log("server hit");
  const output = await pg.getAllItems();
  res.send({ express: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.use(express.json());

app.post("/send", (req, res, next) => {
  console.log("POST /send endpoint hit");
  console.log(req.body);
  const name = req.body.firstName;
  const email = req.body.email;
  const message = req.body.messageHtml;

  let mail = {
    from: creds.USER,
    to: "maxhsu1@gmail.com",
    subject: "Contact form request",
    html: '<p>{name}</p>'
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log("error");
      console.log(err);
      res.json({
        msg: "fail"
      });
    } else {
      console.log("email sent");
      res.json({
        msg: "success"
      });
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
