// send emails: https://stackoverflow.com/questions/48854066/missing-credentials-for-plain-nodemailer
// NOt required to use xoatuh2, there was an issue when you don't include access token
// Access token is received from the Google Oauth playground.
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const pg = require("./database/index");
const bodyParser = require("body-parser");
const creds = require("./config");
const port = process.env.PORT || 5000;
dotenv.config();
let transporter = nodemailer.createTransport(
  `smtps://${process.env.APP_EMAIL}:${process.env.APP_PASS}@smtp.gmail.com`
);

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
  console.log(req.body.form);
  const form = req.body.form;
  const {
    firstName,
    lastName,
    email,
    phone,
    eventType,
    budgetPerHead,
    noOfGuests,
    eventDate,
    time,
    duration,
    messageBox
  } = form;

  let mail = {
    from: creds.USER,
    to: "maxhsu1@gmail.com",
    subject: "Contact form request",
    html: `<p>${firstName}</p><p>${lastName}</p><p>${email}</p><p>${phone}</p>`
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
