var template = require('art-template');
var fs = require('fs');


let str = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <p>
            姓名：{{ name }}
        </p>
        <p>
         喜欢： {{ each arr }} {{ $value }} {{ /each }}
        </p>
    </body>
    </html>
`;
fs.readFile('./index2.html', function (err, data) {
    if( err ){
        console.log('读取失败');
    } else {
        var aaa = template.render(data.toString(), {
            name: 'jack',
            arr: ['唱aaa', '跳aaa' ,'rapaaa', '篮球aaa']
        });
        console.log(aaa);
    }
})
var ret = template.render(str, {
    name: 'jack',
    arr: ['唱', '跳' ,'rap', '篮球']
});

console.log(ret);
