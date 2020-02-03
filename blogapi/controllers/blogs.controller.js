const Blog = require("../models/blog.model");
var jwtService = require("../jwt/jwtServiceModule");

exports.blogs = function(req, res) {
  Blog.find(
    { $or: [{ status: "pendingReview" }, { status: "approved" }] },
    function(err, blogs) {
      if (err) {
        next(err);
      }
      res.send(blogs);
    }
  );
};

exports.userBlogs = function(req, res) {
  Blog.find({ email: req.query.email }, function(err, blogs) {
    if (err) {
      next(err);
    }
    res.send(blogs);
  });
};

exports.blogs_technology = function(req, res) {
  Blog.find({ category: "technology" }, function(err, blogs) {
    if (err) {
      next(err);
    }
    res.send(blogs);
  });
};

exports.blogs_cad = function(req, res) {
  Blog.find({ category: "cad9.x" }, function(err, blogs) {
    if (err) {
      next(err);
    }
    res.send(blogs);
  });
};

exports.blogs_oncall = function(req, res) {
  Blog.find({ category: "cad10" }, function(err, blogs) {
    if (err) {
      next(err);
    }
    res.send(blogs);
  });
};

exports.blogs_xalt = function(req, res) {
  Blog.find({ category: "xalt" }, function(err, blogs) {
    if (err) {
      next(err);
    }
    res.send(blogs);
  });
};

exports.blog_create = function(req, res) {
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

exports.blog_save = function(req, res) {
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

exports.blog_details = function(req, res) {
  Blog.findById(req.params.id, function(err, blog) {
    if (err) {
      return next(err);
    }
    res.send(blog);
  });
};

exports.blog_update = function(req, res) {
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

exports.blog_delete = function(req, res) {
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
