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
 * */
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}))

for(let routerKey in router){
	app.use(router[routerKey]);
}


app.listen(3000, function () {
	console.log('running...');
})
