const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/itcast', {useNewUrlParser: true});

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

let User = mongoose.model('User', UserSchema);

User.findOne({
	username: "aaa"
}).then(user=>{
	console.log(user);
	if(user){
		console.log('用户名已存在');
	}else{
		return new User({
			username: 'aaa',
			password: 'aaa',
			email: 'aaa@aaa.com'
		}).save()
	}
}).then(user=>{
	console.log(user);
	if(user){
		console.log('新增成功');
	}
}).catch(err=>{
	console.log(err);
})

