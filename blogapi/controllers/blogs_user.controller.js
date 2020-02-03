const Blog = require("../models/blog.model");
var jwtService = require("../jwt/jwtServiceModule");

//Gets all the blogs from the blogs column of the user Table
exports.getUserBlogs = function(req, res) {

  let { token, verifyoptions, email } = req.headers;

  verifyoptions = JSON.parse(verifyoptions);

  let legit = jwtService.verify(token, verifyoptions);

  if (legit) {
    Blog.find({ email: email }, function(err, blogs) {
      if (err) {
        next(err);
      }
      res.send(blogs);
    });
  } else {
    res.sendStatus(403);
  }
};
