/**
 *   一下方法是node的精华部分，封装异步API
 *
 *  students.js 职责
 *  该文件只对db.json做增删改查，不关心其他业务流程等。只提供方法
 *
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

// 根据id查询
exports.findById = function (id, callback) {
    fs.readFile(dbPath, function (err, data) {
        if( err ){
            return callback(err)``;
        }
        let students = JSON.parse(data).students;
        let student = null;
        students.map(item=>{
            if( item === id ){
                student = item;
            }
        });
        callback(null, student);
    } )
}

/**
 *
 *  新增
 *
 * */

exports.save = function (student, callback) {
    fs.readFile(dbPath, function (err, data) {
        if( err ){
            return callback(err);
        }
        let students = JSON.parse(data).students;
        students.id = students[students.length - 1].id + 1;
        students.push(student);
        let fileData = JSON.stringify({
            students: students
        });
        fs.writeFile(dbPath, fileData, function (err) {
            if( err ){
                return callback(err)
            }
            callback(null);
        });
    } )
};

/**
 *
 *  修改
 *
 * */

exports.updataById = function (student, callback) {
    fs.readFile(dbPath, function (err, data) {
        if( err ) {
            return callback(err);
        }
        let students = JSON.parse(data).students;

        /**
         *
         *  es6数组方法 条件符合则返回这个对象
         *
         * */
        let stu = students.find(function (item) {
            return item.id === student.id
        });

        for( let key in student ){
            stu[key] = student[key]
        }

        let fileData = JSON.stringify({
            students: students
        });
        fs.writeFile(dbPath, fileData, function (err) {
            if( err ){
                return callback(err)
            }
            callback(null);
        });

    })
};

/**
 *
 *  删除
 *
 * */
exports.delete = function (id, callback) {
    fs.readFile(dbPath, function (err, data) {
        if( err ) {
            return callback(err);
        }
        let students = JSON.parse(data).students;
        console.log(id);
        // findIndex 返回下标
        let index = students.findIndex(item=>{
            return item.id === parseInt(id);
        });
        students.splice(index, 1);
        let fileData = JSON.stringify({
            students: students
        });
        console.log(fileData);
        fs.writeFile(dbPath, fileData, function (err) {
            if( err ){
                return callback(err)
            }
            callback(null);
        });
       /* for( let i=0;i<students.length;i++ ){
            console.log(students[i].id);
            if( students[i].id === parseInt(id) ){
                students.splice(i, 1);
                let fileData = JSON.stringify({
                    students: students
                });
                console.log(fileData);
                fs.writeFile(dbPath, fileData, function (err) {
                    if( err ){
                        return callback(err)
                    }
                    callback(null, students[i]);
                });
                i--;
            }
        }*/
    })
}
