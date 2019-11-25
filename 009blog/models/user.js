let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/itcast', {useNewUrlParser: true});

let Schema = mongoose.Schema;

let userSchema = new Schema({
	// 邮箱
	email: {
		type: String,
		required: true
	},
	// 昵称
	nickname: {
		type: String,
		required: true
	},
	// 密码
	password: {
		type: String,
		required: true
	},
	// 创建时间
	created_time: {
		type: Date,
		default: Date.now
	},
	// 修改时间
	last_modified_time: {
		type: Date,
		default: Date.now
	},
	// 头像
	avatar: {
		type: String,
		default: '/public/img/avatar.jpg'
	},
	// 简介
	bio: {
		type: String,
		default: ''
	},
	// 性别 -1:保密或其他 0：女 1：男
	gender: {
		type: Number,
		enum: [-1, 0, 1],
		default: -1
	},
	// 生日
	birthday: {
		type: Date
	},
	// 帐号状态 0:没有限制 1：不可以评论 2：不可以登陆
	status: {
		type: Number,
		enum: [0, 1, 2],
		default: 0
	}
});

module.exports = mongoose.model('User', userSchema);
