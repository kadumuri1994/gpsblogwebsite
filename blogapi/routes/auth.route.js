const express = require("express");
const router = express.Router();

var passport = require("passport");
var jwtService = require("../jwt/jwtServiceModule");
var config = require("../passport/config");

router.get(
  "/login",
  function(req, res, next) {
    passport.authenticate("azuread-openidconnect", {
      response: res, // required
      failureRedirect: "http://localhost:3000"
    })(req, res, next);
  },
  function(req, res) {
    res.redirect("http://localhost:3000/");
  }
);

// 'GET returnURL'
// `passport.authenticate` will try to authenticate the content returned in
// query (such as authorization code). If authentication fails, user will be
// redirected to '/' (home page); otherwise, it passes to the next middleware.
// router.get('/auth/openid/return',
//     function (req, res, next) {
//         passport.authenticate('azuread-openidconnect',
//             {
//                 response: res,                      // required
//                 failureRedirect: 'http://localhost:3000/signin'
//             }
//         )(req, res, next);
//     },
//     function (req, res) {
//         console.log("2. get auth/openid/return route : ");
//         res.redirect('http://localhost:3000/signin');
//     });

// 'POST returnURL'
// `passport.authenticate` will try to authenticate the content returned in
// body (such as authorization code). If authentication fails, user will be
// redirected to '/' (home page); otherwise, it passes to the next middleware.
router.post(
  "/auth/openid/return",
  function(req, res, next) {
    passport.authenticate("azuread-openidconnect", {
      response: res, // required
      failureRedirect: "http://localhost:3000"
    })(req, res, next);
  },
  function(req, res) {
    console.log("find the user details: " + JSON.stringify(req.user));

    const payload = {
      name: req.user._json.name,
      email: req.user._json.preferred_username,
      oid: req.user._json.oidx
    };

    const signOptions = {
      issuer: req.user._json.iss,
      subject: req.user._json.sub,
      audience: req.user._json.aud,
      expiresIn: req.user._json.exp,
      algorithm: ["RS256"]
    };

    let token = jwtService.sign(payload, signOptions);

    res.redirect("http://localhost:3000/redirect?token=" + token);
  }
);

// 'logout' route, logout from passport, and destroy the session with AAD.
router.get("/logout", function(req, res) {
    req.logOut();
    res.redirect(
      config.destroySessionUrl
    );
});

// router.get("/credentials/check", function(req, res) {
//   let authenticated = false;
//   if (authenticated) {
//     res.sendStatus(200);
//   } else {
//     res.sendStatus(403);
//   }
// });

module.exports = router;
