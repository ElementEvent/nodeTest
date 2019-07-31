
/**
 *
 *  写文件
 *  如 fs.writeFile
 *
 *    成功：
 *    文件写入成功
 *    error是null
 *    失败：
 *    则是错误对象
 *
 *
 *
 * */

var fs = require('fs');
fs.writeFile('./你好.md','Node.js',function (error) {
    console.log('1111');
    console.log(error);
})