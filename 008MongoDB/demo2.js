const mongoose = require('mongoose'); // 引入第三方包

const Schema = mongoose.Schema;

// 1：连接MongoDB数据库 指定连接的数据库，不一定要存在
mongoose.connect('mongodb://localhost:27017/itcast');

/**
 *
 * 2：设计集合结构（表结构）
 * @title 字段名称就是表结构的属性名称 如
 * @value 值的类型， 如String
 * 规定表结构是为了不要有脏数据
 * value参考username设计结构，更加严谨
 * */
let UserSchema = new Schema({
	username: {
		type: String,
		required: true // 必须存在，不能为空
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String
	}
});

/**
 *
 * 3：将文档结构发布为模型
 *
 * 	@参数一 ：定义一个大写名词字符串来表示你的 集合 名称
 * 	@参数二 ：集合中文档架构 Schema定义
 *
 * */

let User = mongoose.model('User', UserSchema);


/**
 *
 * 4： 当有了模型构造函数之后，就可以使用这个构造函数对User中的数据进行操作
 *
 * */

// 新增方法
/*let admin = new User({
	username: 'zs',
	password: '123456',
	email: 'admin@admin.com'
});

admin.save().then((res) => {
	console.log('保存成功');
	console.log(res);
}).catch(err => {
	console.log(err);
})*/

// 查询
/**
 *
 *  find()方法默认是查询所有
 *  find()按条件查询集合， findOne() 按条件查询单个
 *  条件可以传递在find()里面，如
 *  find({
 *    'username': 'admin'
 *  })
 *
 * */
/*User.find({
	username: 'zs'
}).then((res) => {
	console.log('查询成功');
	console.log(res);
}).catch(err => {
	console.log(err);
})*/

// 删除
/**
 *
 *  deleteMany() 传入删除条件删除
 *  deleteMany({
 *    username: 'zs'
 *  }) 删除所有匹配的
 *	deleteOne() 删除第一个
 *
 * */
/*User.deleteMany({
	username: 'zs'
}).then(res => {
	console.log('删除成功');
	console.log(res);
}).catch(err => {
	console.log(err, '删除失败');
})*/

/**
 *
 *  更新数据
 *  update() 根据参数修改， 修改多条 使用 updateMany(),  updateOne() 更新一个
 *参数condition：更新的条件，要求是一个对象。
	参数doc：要更新的内容，要求是一个对象。
	参数[options]：可选参数，要求也是一个对象。
	参数[callback]：可选参数，要求是一个回调函数。

 [options]有效值：
safe ：（布尔型）安全模式（默认为架构中设置的值（true））
upsert ：（boolean）如果不匹配，是否创建文档（false）
multi ：（boolean）是否应该更新多个文档（false）
runValidators：如果为true，则在此命令上运行更新验证程序。更新验证器根据模型的模式验证更新操作。
setDefaultsOnInsert：如果这upsert是真的，如果创建了新文档，猫鼬将应用模型模式中指定的默认值。该选项仅适用于MongoDB> = 2.4，因为它依赖于MongoDB的$setOnInsert操作符。
	strict：（布尔）覆盖strict此更新的选项
	overwrite： （布尔）禁用只更新模式，允许您覆盖文档（false）

 *
 * */


User.update({username: 'admin'},{
	password: 'aaa1234'
},(err, res)=>{
	if(err){
		console.log(err);
		console.log('更新失败');
	}else {
		console.log(res);
		console.log('更新成功');
	}
})

User.find().then(res=>{
	console.log(res);
}).catch(err=>{
	console.log(err);
})

