
/**
 *
 *  文件操作需要引入 fs
 *  如 fs.feadFile
 *     获取文件
 *    两个参数： 文件路径和回调
 *    回调有两个参数 失败对象，和成功对象
 *
 *     fs.readdir
 *     获取路径下文件集合
 *     两个参数： 文件路径和回调
 *     回调有两个参数 失败对象，目录文件列表
 *
* */

var fs = require('fs');

fs.readFile('./tes11t.txt', function (error, data) {
    if( error ){
        console.log("读取文件失败",error);
        return;
    }
    console.log(data.toString());
    console.log(error);
})