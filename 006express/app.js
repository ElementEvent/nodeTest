// 1安装与引入
var express = require('express');

// 2 创建你的服务器应用程序 11
// 也就是002http中的http.createServer
var app = express();

/**
 *
 * 5 使用模板引擎 engine()
 *
 *  参数一 ： 渲染文件名为变量 art（匹配.art结尾）html(匹配.html结尾) 结尾文件的文件，使用art-template
 *  参数二： 引入express-art-template，使用之前必须安装art-template
 *
 *  express约定中把视图文件都统一放在views目录当中, 这样一来 res.render第一次参数只用写文件名称即可
 *  如果想修改 views目录为其他目录使用
 *  app.set('views', '文件目录');
 */
app.engine('html', require('express-art-template'));

let comments = [
    {
        name:'张三1',
        message:'今天天气不错',
        dataTime:'2015-10-16',
    },
    {
        name:'张三2',
        message:'今天天气不错',
        dataTime:'2015-10-16',
    },
    {
        name:'张三3',
        message:'今天天气不错',
        dataTime:'2015-10-16',
    },
    {
        name:'张三4',
        message:'今天天气不错',
        dataTime:'2015-10-16',
    }
];

app.get('/', function (req,res) {
    res.render('index.html', {
        comments: comments
    });
});

app.get('/index', function (req,res) {
    res.render('index.html', {
        comments: comments
    });
});

// get提交表单
app.get('/pinglun', function (req,res) {
    console.log(req.query);
    let newConmment = req.query;
    newConmment.dataTime = '2017-11-05 10:56:22';
    comments.push(newConmment);
    res.redirect('/'); //返回到首页路由
});

// post提交表单
app.post('/post', function (req,res) {
    console.log('123');
    /**
     *
     *  req.query 获取get传递过来的参数
     *  req.query 获取post传递过来的参数
     *
     * */
    console.log(req.query);
    res.send('post');
});

app.get('/admin', function (req,res) {
    res.render('admin/admin.html', {
        title: '管理系统'
    });
});

app.get('/get', function (req,res) {
    res.render('get.html');
    //res.send()
});

// 4公开公告的静态资源目录 当使用/public/ 的时候去 ./public/的目录中找资源
app.use('/public/', express.static('./public/')); //1 访问： 路由/public/css.css访问
// app.use(express.static('./public/'));//2 访问： 路由/css.css访问
//app.use('/a/', express.static('./public/')); //3 访问： 路由/a/css.css访问


// 3设置服务器端口号
app.listen(3000, function () {
    console.log('服务器启动成功端口号3000');
});






