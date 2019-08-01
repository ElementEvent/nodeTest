// 1安装与引入
var express = require('express');
var fs = require('fs');

// 2 创建你的服务器应用程序
// 也就是002http中的http.createServer
var app = express();
app.get('/', function (req,res) {
    res.send('hello express!')
});

app.get('/hello', function (req,res) {
    res.send('这里是中文')
});

// 公开公告的静态资源目录
app.use('/public/', express.static('./public/'))

app.listen(3000, function () {
    console.log('服务器启动成功端口号3000');
});






