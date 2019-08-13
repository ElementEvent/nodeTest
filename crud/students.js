/**
 *
 *  students.js 职责
 *  该文件只对db.json做增删改查，不关心其他业务流程等。只提供方法
 *
 * */
let fs = require('fs');
let dbPath = './db.json';
/**
 *
 *  查询
 *  callback中 参数
 *      err: 错误对象， 成功是null
 *      data: 成功是请求数据 错误是undefined
 *
 * */

exports.find = function (callback) {
    fs.readFile(dbPath, function (err, data) {
        if( err ){
            return callback(err);
        }
        return callback(null, JSON.parse(data).students)
    } )
}

/**
 *
 *  新增
 *
 * */

exports.save = function () {

}

/**
 *
 *  修改
 *
 * */

exports.updata = function () {

}

/**
 *
 *  删除
 *
 * */
exports.delete = function () {

}


