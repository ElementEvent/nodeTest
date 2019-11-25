Node 中的 javaScript

    当前进度 101/120

   --->  没有DOM BOM
   
   #npm安装指定版本
   npm install jquery@1.11.0
   
   开启nodeJS中的服务热更新w
        npm i -g nodemon 全局安装
   执行方式
        nodemon app.js
1： 核心模块
    
    如：fs核心文件模块、http服务构建模块、path路径操作模块、os操作系统模块、url模块
    
        引入模块  var fs = require('fs');

    ---> 自定义模块加载与导出

-----------------------------------------------------------------------------
2： HTTP模块
    例子： 002http - http.js
        /**
        *
        * 通过node http.js启动服务
         *
        * */
        // 1加载核心模块
        let http = require('http');
        
        // 2创建web服务器 返回一个实例
        
        let server = http.createServer();
        
        /**
         *
         * 3注册request请求事件，收到请求的时候执行 回调处理函数
         *  Request 请求对象
         *      请求对象用来获取客户端的请求信息
         *  Response 响应对象
         *      响应对象用来给客户端发送响应信息
         *      write可以使用多次，但是最有一定要用 end 来结束响应！
         * */
        server.on('request', function (request, response) {
            console.log("请求成功,路径是:" + request.url);
            switch (request.url){
                case "/login":
                    response.write('login');
                    break;
                case "/register":
                    response.write('register');
                    break;
                case "/haha":
                    let arr = [
                        {
                            name:'zhangsan',
                            age: 20
                        }
                    ];
                    response.write(JSON.stringify(arr));
                    break;
            }
            // end出去的数据只能为字符串或者二进制数据
            response.end('+ node.js'); //结束响应
        });
        
        
        // 4 绑定端口号，启动服务器
        server.listen(3000, function () {
            console.log('服务器启动成功，等待请求, 172.0.0.1:3000');
        });
         
        response 响应对象
          setHeader('Content-Type','text/plain; charset=utf-8'); 设置响应头，格式为文本，编码为utf-8
        
------------------------------------------------------------------------

3 使用模板引擎 art-template  npm install art-template
 004 ---> nodeTemplate

------------------------------------------------------------------------

4 node中读取静态资源如 css js img等
  005feedback 运行app.js
  
------------------------------------------------------------------------

5 url模块
    url.parse('需要解析的地址', 是否转义query对象)
    
    重定向
    301永久重定向
    如新浪首页 会跳转到新浪首页.cn
    a.com 跳转 b.com 第一次会访问a 然后跳转b，第二次就指定读取缓存跳转b
    302临时重定向
    a.com 跳转 b.com 每次会访问a 然后跳转b

------------------------------------------------------------------------

6 node调试环境
  直接输入node后按回车， 进入调试环境

------------------------------------------------------------------------

7 包管理工具
 package.json初始化创建
 在npm中输入 npm init

 name: 项目名称
 version： 项目版本
 description： 项目描述
 entry point： 入口文件
 test command： 测试命令
 git repository： git仓库地址
 keywords： 关键字
 author： 作者
 license： 开源许可证

 npm 命令：

 npm init 初始化
 npm init -y 跳过向导
 npm install --save(简写-S 大写S) 包名 下载并保存到package的dependencies中
 npm uninstall(简写 un) 包名 删除包，但是不删除依赖
 npm uninstall --save 包名 删除包，删除依赖


------------------------------------------------------------------------

 8.在express中使用art-template
 
  npm i -S art-template
  npm i -S express-art-template

  在express中没有内置获取表单POST请求的api，需要使用第三方包: body-parser
  
  安装： npm install --save body-parser
  
  配置：
  
  1： 引入包文件 
     var bodyParser = require('body-parser');
  2: 引入express 
      var express = require('express');
    var app = express()
   
   3: 导入配置
   app.use(bodyParser.urlencoded({ extended； false }))
   app.use( bodyParser.json() )
   
   #使用 express
   在express获取get和post请求数据
   get: req.query获取表单数据
   post: 安装 body-parser
        1： 引入 var bodyParser = require('body-parser')
        
        
   
        
   


------------------------------------------------------------------------

9. MongoDB

    9.1简介： 关系型数据库和非关系型数据库
    
    表就是关系，或者说是表与表之间存在的关系
    所有关系型数据库都需要通过sql语言进行操作，以及设计表结构
    而且数据表还支持约束： 唯一、主键、默认值、非空
    
    非关系型数据库
    有的非关系数据库是会用 键值对的形式
    但是MongoDB是长得最像关系型数据库的非关系数据库
    *数据库 -》 数据库
    *数据表 -》 集合（数组）
    *表记录 -》 （文档对象）

    MongoDB 不需要设置表结构
    
    基本命令：
    mongod： 启动MongoDB数据库
    操作数据库CRUD参考： 008 demo2.js 
   
    
    相关插件：
    mongoose 插件
    详情参考与使用方式008文件夹
    
    ------------------------------------------------------------------------

10.Path路径操作模块
    [官方文档](http://nodejs.cn/api/path.html#path_path_basename_path_ext)
    常用语法
    path.basename 获取一个路径的文件名 默认包含扩展，第二个参数是去除扩展名
    path.dirname 获取一个路径中的目录部分
    path.extname 获取扩展名
    path.parse 把路径转义成对象
    path.join 路径拼接的时候使用
    path.isAbsolute 判断是否为决定路径

// 引入的文件不要使用下面的路径变量，模块路径不需要使用。
__dirname 获取当前文件所属目录的绝对路径 
__filename 获取当前文件的绝对路径

express [文档](https://www.runoob.com/w3cnote/express-4-x-api.html)

art-template [文档](https://aui.github.io/art-template/zh-cn/index.html)

    ------------------------------------------------------------------------

009blog 

路径|方法|get参数|post参数|是否需要登录|备注
----|----|----|----|----|----|
|/|get| |  |  | 渲染首页 |
|/register|get| |  |  | 渲染注册 |
|/register|post| | email、nickname、password |  | 处理注册请求 |
|/login|get| |  |  | 渲染登录 |
|/login|post| |  | email、password | 处理登录请求 |
|/logout|get| |  |  | 处理退出请求 |

public: 公共样式、css、js
routes： 路由配置
views： 页面目录
app.js: 入口文件
models: 数据模型


###敏感信息处理：  
express 框架中默认是不支持session和cookie
在第三方中间件中使用包： express-session来解决
npm install express-session

浏览器插件 editthiscookie 查看cookie
