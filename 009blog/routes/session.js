// 登录、注册、退出
const express = require('express');
let router = express.Router();
let md5 = require('blueimp-md5');

let User = require('../models/user');

router.get('/', function (req, res) {
	console.log(req.session.isLogin);
	res.render('index.html')
})

router.get('/login', function (req, res) {
	res.render('login.html')
})

router.post('/login', function (req, res) {
	res.render('index.html')
})

router.get('/register', function (req, res) {
	res.render('register.html')
})


// 获取表单提交数据
/**
 *
 * 步骤解析：
 * 1： 获取表单数据
 * 2： 操作数据库
 * 3： 发送响应
 *
 * */
router.post('/register', function (req, res) {
	//res.render('register.html');
	let body = req.body;

	User.findOne({
		$or: [
			{email: body.email},
			{nickname: body.nickname},
		]
	}, function (err, data) {

		if (err) {
			return res.status(500).json({
				success: false,
				err_code: 500,
				message: '服务端错误'
			});
		}

		if (data) {
			return res.status(200).json({
				success: true,
				err_code: 1,
				message: '邮箱或昵称已经在'
			});
		}

		// 对密码进行 md5 重复加密
		body.password = md5(md5(body.password));

		new User(body).save().then(user => {
			req.session.isLogin = true;
			res.status(200).json({
				success: true,
				err_code: 0,
				message: '注册成功！'
			});
		}).catch(err => {
			res.status(500).json({
				success: false,
				err_code: 500,
				message: '服务端错误'
			});
		});

		// express json()方法， 响应客户端请求并且把对象转义成字符串
		/*res.status(200).json({
			success: true,
			err_code: 0,
			message: 'ok'
		});*/

		console.log(data);

	})

})


module.exports = router;
