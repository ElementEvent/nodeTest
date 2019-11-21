/**
 *
 *  app.js模块职责
 *      创建服务
 *      做一些服务配置相关
 *          模板引擎
 *          body-parser解析表单post请求体 在笔记006中
 *          提供静态资源服务
 *      挂在路由
 *      监听端口启动服务
 *
 * */

// 创建服务
let express = require('express');
let router = require('./router');
let fs = require('fs');
let app = express();
var bodyParser = require('body-parser');

//模板引擎
app.engine('html', require('express-art-template'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 路由容器挂在到app服务中
app.use(router);

//提供静态资源服务
app.use('/public/', express.static('./public/')); //1 访问： 路由/public/css.css访问

//监听端口启动服务
app.listen(3100,function () {
    console.log('服务已启动，等待响应');
})








