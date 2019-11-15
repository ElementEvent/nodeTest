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

/*Student.updataById({
    "id": 1,
    "name": "修改后李四",
    "gender": 1,
    "age": 25,
    "hobbies": "MXD"
},function (err) {
    if( err ) {
        return console.log(err);
    }else {
        console.log('修改成功');
    }
});*/
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

// 根据ID获取学生
router.get('/students/getStudentsById?id',function (req, res) {
    console.log(req.query);
});

router.get('/students/new',function (req, res) {
    res.render('./new.html')
});

router.post('/students/new',function (req, res) {
    // 获取表单插件
    console.log(req.body);
    // 将数据保存到db.json里面
    Student.save(req.body, function (err) {
        if( err ){
            return res.status(500).send('添加表单错误');
        }
        // 重定向到首页
        res.redirect('/students');
    })
});

router.get('/students/edit',function (req, res) {
    res.send('edit edit edit');
});

router.post('/students/edit',function (req, res) {
    res.send('postEdit ');
});

router.get('/students/delete',function (req, res) {
    let studentId = req.query.id;
    Student.delete(studentId, function (err) {
        if( err ){
            return res.status(500).send('删除表单错误');
        }
        // 重定向到首页
        res.redirect('/students');
    });
});

 // 3：路由导出
module.exports = router;
