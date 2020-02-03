const Blog = require("../models/blog.model");
var jwtService = require("../jwt/jwtServiceModule");

exports.insertBlog = function(req, res, next) {
  let { token, verifyOptions } = req.headers;
  let legit = jwtService.verify(token, verifyOptions);

  if (legit) {
    let blog = new Blog({
      title: req.body.title,
      owner: req.body.owner,
      email: req.body.email,
      headerContent: req.body.headerContent,
      category: req.body.category,
      mainContent: req.body.mainContent,
      likes: req.body.likes,
      comments: req.body.comments,
      featuredBlog: req.body.featuredBlog,
      lastActiveAt: req.body.lastActiveAt,
      status: req.body.status
    });
    blog.save(function(err) {
      if (err) {
        console.log(err);
        return next(err);
      }
      res.send("Blog added successfully");
    });
  } else {
    res.sendStatus(403);
  }
};

exports.updateBlog = function(req, res, next) {
  let { token, verifyOptions } = req.headers;
  let legit = jwtService.verify(token, verifyOptions);
  if (legit) {
    Blog.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
      err,
      blog
    ) {
      if (err) {
        next(err);
      }
      res.send("blog updated succesfully");
    });
  } else {
    res.sendStatus(403);
  }
};

exports.deleteBlog = function(req, res, next) {
  let { token, verifyOptions } = req.headers;
  let legit = jwtService.verify(token, verifyOptions);
  if (legit) {
    Blog.findByIdAndRemove(req.params.id, function(err) {
      if (err) {
        next(err);
      }
      res.send("blog deleted succesfully");
    });
  } else {
    res.sendStatus(403);
  }
};

exports.getBlogs = function(req, res, next) {
  
  let headers= req.headers;
  let {categories, statuses} = headers;

  categories = JSON.parse(categories);
  statuses = JSON.parse(statuses);

  Blog.find(
    {
      $and: [
        {
          $or: [
            ...categories.map(category => ({
              category: category
            }))
          ]
        },
        {
          $or: [
            ...statuses.map(status => ({
              status: status
            }))
          ]
        }
      ]
    },
    function(err, blogs) {
      if (err) {
        next(err);
      }
      res.send(blogs);
    }
  );
};

exports.getBlog = function(req, res, next) {
  Blog.findById(req.params.id, function(err, blog) {
    if (err) {
      return next(err);
    }
    res.send(blog);
  });
};
