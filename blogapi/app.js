let db = require("./database.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const blogs = require("./routes/blogs.route");
const auth = require("./routes/auth.route");
const passport = require("passport");
const passportSetup = require("./passport/passport-setup");
const cookieParser = require('cookie-parser')

db._connect();

var app = express();
var port = process.env.PORT || 3001;

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", blogs);
app.use("/", auth);

app.get("/api", (req, res) => {
  res.send("Welcome to my nodemon API..");
});

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/login");
// }

app.listen(port, () => {
  console.log("Running on port" + port);
});