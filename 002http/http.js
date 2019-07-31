/**
*
* 通过node http.js启动服务
 *
* */
// 1加载核心模块
let http = require('http');
let fs = require('fs');
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
    //console.log("请求成功,路径是:" + request.url);
    //console.log("请求客户端的IP是:" , request.socket.remoteAddress , request.socket.remotePort);

    switch (request.url){
        case "/login":
            response.write('login');
            response.end('结束响应');
            break;
        case "/register":
            response.write('register');
            response.end('结束响应');
            break;
        case "/plain":
            response.setHeader('Content-Type','text/plain; charset=utf-8');
            response.write('输出文本');
            response.end('结束响应');
            break;
        case "/html":
            response.setHeader('Content-Type','text/html; charset=utf-8');
            response.write('<h1>h1标签</h1>');
            response.end('结束响应');
            break;
        case "/img":
            // 图片不需要charset编码指定
            fs.readFile('./img.png', function (err, data) {
                if( err ){
                    console.log('读取失败');
                } else{
                    response.setHeader('Content-Type','image/png');
                    response.end(data); //结束响应
                }
            });
            break;
        case "/index":
            response.setHeader('Content-Type','text/html; charset=utf-8');
            fs.readFile('./index.html', function (err, data) {
                if( err ){
                   console.log('读取失败');
               } else{
                   response.end(data.toString()); //结束响应
               }
            });
            break;
        case "/haha":
            let arr = [
                {
                    name:'zhangsan',
                    age: 20
                }
            ];
            response.write(JSON.stringify(arr));
            response.end('结束响应');
            break;
    }
    // end出去的数据只能为字符串或者二进制数据

});


// 4 绑定端口号，启动服务器
server.listen(3000, function () {
    console.log('服务器启动成功');
});


