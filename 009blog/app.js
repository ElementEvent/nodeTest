let express = require('express');
let path = require('path'); // 路径操作模块
let router = require('./routes/index');
let bodyParser = require('body-parser'); // 路由传输处理
let session = require('express-session')

let app = express();

app.engine('html', require('express-art-template'));

app.use('/public/', express.static(path.join(__dirname, './public/')));
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')));

app.set('views', path.join(__dirname, './views/'));

/*app.get('/', function (req, res) {
	res.render('index.html', {
		name: "张三"
	})
});*/

/**
*
*配置处理路由传递参数的插件
 *
*
* */

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**
 *
 * 设置session
 * @添加 Session 数据： req.session.foo = 'bar'
 * @访问 Session 数据： req.session.foo
 *
 * 参数详解
 * @secret 加密字符串 会在原有加密基础之上和这个字符串拼起来进行加密
 * @resave 是否每次请求都重新设置 session
 * @saveUninitialized	无论是否使用session，都会默认分配一key, 如果为false，那么只有在设置session的时候才会分配key
 *
 * */
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false
}))

for(let routerKey in router){
	app.use(router[routerKey]);
}

/**
 *
 * 配置中间件
 * 404中间件
 *
 * */
app.use(function (req, res, next) {
	res.render('404.html')
})


/**
 *
 * 配置中间件
 * 全局错误处理
 *
 * */
app.use(function (err, req, res, next) {
	res.status(500).json({
		err_code: 500,
		message: err.message
	})
})


app.listen(3000, function () {
	console.log('running...');
})
