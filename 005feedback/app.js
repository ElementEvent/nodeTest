let http = require('http');
let fs = require('fs');
let template = require('art-template');
let url = require('url');

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

// 2创建web服务器 返回一个实例
let server = http.createServer();

server.on('request', function (request, response) {
    let requestUrl = url.parse(request.url, true);
    let pathName = requestUrl.pathname;
    if( pathName === '/' ){
        fs.readFile('./views/index.html',function (error, data) {
            if( error ) return '读取错误';
            let indexHtml = template.render(data.toString(), {
                comments: comments
            });
            response.end(indexHtml);
        });
    }else if( pathName === '/post' ){
        //console.log(url);
        fs.readFile('./views/post.html',function (error, data) {
            if( error ) return '读取错误';
            response.end(data);
        });
    }else if( pathName.indexOf('/public/') === 0 ){
        //console.log(url);
        fs.readFile('.' + pathName, function (error, data) {
            if( error ) return response.end('404 Not Found');
            response.end(data)
        })
    }else if( pathName.indexOf('/pinglun') === 0 ){
        //console.log(url);

        //如何通过服务器让客户端重定向？
        // 1： 状态码设置为302临时重定向  statusCode
        // 2: 在响应头中通过Location告诉客户端往哪儿重定向 setHeader
        comments.push({
            name: requestUrl.query.name,
            message: requestUrl.query.message,
            dataTime: new Date()
        });
        response.statusCode = 302;
        response.setHeader('Location', '/');
        response.end();

       /* fs.readFile('./views/index.html', function (error, data) {
            if( error ) return response.end('404 Not Found');
            console.log(requestUrl.query);
            comments.push({
                name: requestUrl.query.name,
                message: requestUrl.query.message,
                dataTime: new Date()
            });
            let indexHtml = template.render(data.toString(), {
                comments: comments
            });
            response.end(indexHtml);
        })*/
    } else{
        fs.readFile('./views/404.html',function (error, data) {
            if( error ) return '读取错误';
            response.end(data);
        });
    }
    //response.end();
});

// 4 绑定端口号，启动服务器
server.listen(3000, function () {
    console.log('服务器启动成功');
});

