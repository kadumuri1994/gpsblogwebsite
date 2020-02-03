const express = require("express");
const router = express.Router();

//const blogs_controller = require('../controllers/blogs.controller');

const blogs_all_controller = require('../controllers/blogs_all.controller');
const blogs_user_controller = require('../controllers/blogs_user.controller');

router.get('/blogs',blogs_all_controller.getBlogs);
router.get('/blogs/technology',blogs_all_controller.getBlogs);
router.get('/blogs/oncall',blogs_all_controller.getBlogs);
router.get('/blogs/cad9.x',blogs_all_controller.getBlogs);
router.get('/blogs/xalt',blogs_all_controller.getBlogs);

router.get('/blogs/user',blogs_user_controller.getUserBlogs);

router.get('/blogdetails/:id',blogs_all_controller.getBlog);

router.post('/blogs/createblog', blogs_all_controller.insertBlog);

router.put('/blogs/update/:id', blogs_all_controller.updateBlog);

router.delete('/blogs/delete/:id', blogs_all_controller.deleteBlog);

module.exports = router;

// router.get('/blogs',blogs_controller.blogs);
// router.get('/blogs/user',blogs_controller.userBlogs);

// router.get('/blogs/technology',blogs_controller.blogs_technology);
// router.get('/blogs/oncall',blogs_controller.blogs_oncall);
// router.get('/blogs/cad9.x',blogs_controller.blogs_cad);
// router.get('/blogs/xalt',blogs_controller.blogs_xalt);

// router.get('/blogdetails/:id',blogs_controller.blog_details);

// router.post('/blogs/createblog', blogs_controller.blog_create);

// router.post('/blogs/saveblog', blogs_controller.blog_save);

// router.put('/blogs/update/:id', blogs_controller.blog_update);

// router.delete('/blogs/delete/:id', blogs_controller.blog_delete);

