const express = require('express');
const router = express.Router();
const {getAllBlog} = require('../controllers/appCtrl')
/* GET home page. */
router.get('/articles/:blogId?', getAllBlog);


module.exports = router;
