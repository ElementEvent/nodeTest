let express = require('express');
let path = require('path'); // 路径操作模块

let app = express();

app.engine('html', require('express-art-template'));

app.use('/public/', express.static(path.join(__dirname, './public/')));
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')));

app.set('views', path.join(__dirname, './views/'));

app.get('/', function (req, res) {
	res.render('index.html', {
		name: "张三"
	})
});

app.listen(3000, function () {
	console.log('running...');
})
