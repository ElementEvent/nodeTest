const mongoose = require('mongoose'); // 引入第三方包

// 连接MongoDB数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

// 创建一个模型， 设计数据库， 创建一个Cat对象 ， name必须为字符串
const Cat = mongoose.model('Cat', { name: String });

// 实例化一个cat
const kitty = new Cat({ name: 'Zildjian' });

// 持久化保存kitty实例
kitty.save().then(() => console.log('meow'));


