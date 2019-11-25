// 新建、删除、修改、查看话题
const express = require('express');
let router = express.Router();

router.get('/index', function (req,res) {
	res.render('index.html')
})

module.exports = router;

