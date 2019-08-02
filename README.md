Node中的javaScript

--->没有DOM BOM

#npm安装指定版本npm install jquery@1.11.0

1：核心模块

如：fs核心文件模块、http服务构建模块、path路径操作模块、os操作系统模块、url模块

    引入模块  var fs = require('fs');

---> 自定义模块加载与导出
2：HTTP模块例子：002http - http.js / ** * *通过节点http.js启动服务* * * / // 1加载核心模块让http = require（'http'）;

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
3使用模板引擎art-template npm install art-template 004 ---> nodeTemplate

4节点中读取静态资源如css js img等005feedback运行app.js

5 url模块url.parse（'需要解析的地址'，是否转义查询对象）

重定向
301永久重定向
如新浪首页 会跳转到新浪首页.cn
a.com 跳转 b.com 第一次会访问a 然后跳转b，第二次就指定读取缓存跳转b
302临时重定向
a.com 跳转 b.com 每次会访问a 然后跳转b
6节点调试环境直接输入节点后按回车，进入调试环境

7包管理工具package.json初始化创建在npm中输入npm init

名称：项目名称版本：项目版本说明：项目描述入口点：入口文件测试命令：测试命令git repository：git仓库地址关键词：关键字作者：作者许可证：开源许可证

npm命令：

npm init初始化npm init -y跳过向导npm install --save（简写-S大写S）包名下载并保存到包的依赖关系中npm uninstall（简写un）包名删除包，但是不删除依赖npm uninstall - -save包名删除包，删除依赖
