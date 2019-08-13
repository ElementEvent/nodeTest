/**
 *
 *  router.js 模块职责
 *  处理路由
 *
 *
 * */

//let fs = require('fs');
let express = require('express');
let Student = require('./students');
// 写法1 ：使用原生方式封装
/*
module.exports = function (app) {
    app.get('/',function (req, res) {
        // 第二个参数是可写参数， 也可以通过data.toString();
        fs.readFile('./db.json', 'utf8', function (err, data) {
            if( err ){
                return res.status(500).send('Server error');
            }
            let students = JSON.parse(data).students;
            res.render('index.html', {
                fruits: [
                    '1',
                    '2',
                    '3',
                    '4'
                ],
                students: students
            })
        })

    })
}*/


// 写法2 ： express提供的包装路由 引入express

/**
 * 1: 创建路由容器
 *
 * */
let router = express.Router();
 // 2：编写路由指引
router.get('/students',function (req, res) {
    // 第二个参数是可写参数， 也可以通过data.toString();
   /* fs.readFile('./db.json', 'utf8', function (err, data) {
        if( err ){
            return res.status(500).send('Server error');
        }
        let students = JSON.parse(data).students;
        res.render('index.html', {
            fruits: [
                '1',
                '2',
                '3',
                '4'
            ],
            students: students
        })
    })*/

    Student.find(function (err, students) {
        if( err ) {
            return res.status(500).send('Server error');
        }
        res.render('index.html', {
            fruits: [
                '1',
                '2',
                '3',
                '4'
            ],
            students: students
        })
    })
});

router.get('/students/new',function (req, res) {
    res.render('./new.html')
});

router.post('/students/new',function (req, res) {
    // 获取表单插件
    console.log(req.body);
    // 将数据保存到db.json里面
});

router.get('/students/edit',function (req, res) {
    res.send('edit edit edit');
});

router.post('/students/edit',function (req, res) {
    res.send('postEdit ');
});

router.get('/students/delete',function (req, res) {
    res.send('delete');
});

 // 3：路由导出
module.exports = router;