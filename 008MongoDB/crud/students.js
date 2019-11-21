const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/itcast', {useNewUrlParser: true});

const Schema = mongoose.Schema;

let studentSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	gender: {
		type: Number,
		enum: [0 ,1], //限制属性值只能为0或1
		default: 0
	},
	age: {
		type: Number,
		default: 18
	},
	hobbies: {
		type: String
	}
});

// 直接导出模型结构函数
module.exports = mongoose.model('Student', studentSchema);

