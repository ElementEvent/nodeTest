let fs = require('fs');

/*let p1 = new Promise(function (resolve, reject) {
	fs.readFile('./a.text', 'utf8', function (err, data) {
		if (err) {
			//console.log(err);
			reject(err)
		} else {
			//console.log(data);
			resolve(data)
		}
	})
});

let p2 = new Promise(function (resolve, reject) {
	fs.readFile('./b.text', 'utf8', function (err, data) {
		if (err) {
			//console.log(err);
			reject(err)
		} else {
			//console.log(data);
			resolve(data)
		}
	})
});

let p3 = new Promise(function (resolve, reject) {
	fs.readFile('./c.text', 'utf8', function (err, data) {
		if (err) {
			//console.log(err);
			reject(err)
		} else {
			//console.log(data);
			resolve(data)
		}
	})
});

p1.then(res => {
	console.log(res);
	return p2
}).then(res => {
	console.log(res);
	return p3
}).then(res => {
	console.log(res);
}).catch(err => {
	console.log(err);
})*/


/**
 *
 *  封装上面的代码。
 *  Promise特性 ，在then回调中return 的话可以使用链式语法，下一次then中可以使用上一次return出来的数据
 *
 * */

function pReadFile(filePath){
	 return new Promise(function (resolve, reject) {
		fs.readFile(filePath, 'utf8', function (err, data) {
			if (err) {
				//console.log(err);
				reject(err)
			} else {
				//console.log(data);
				resolve(data)
			}
		})
	});
}

pReadFile('./a.text').then(res=>{
	console.log(res);
	return pReadFile('./b.text')
}).then(res=>{
	console.log(res);
	return pReadFile('./c.text')
}).then(res=>{
	console.log(res);
}).catch(err=>{
	console.log(err);
})
