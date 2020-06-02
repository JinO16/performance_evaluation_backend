let mongoose = require('mongoose'),
    mongoConfig = require('../config/config');
let dbUrl = 'mongodb://' + mongoConfig.mongodb.host + ':' + mongoConfig.mongodb.port + '/' + mongoConfig.mongodb.database;
mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    // useMongoClient: true, 	//使用mongoose的连接方式，不使用MongoDB Driver
    // mongos: true, 			//连接到分片服务器
    autoIndex: false, 		//禁止自动建立索引，生产系统下会降低性能，应该在Schema中制定索引策略
    poolSize: 10, 			//连接池，默认5，提高到10
    bufferMaxEntries: 0,		//连接错误时立即返回，不等待重连,要配合Schema中的bufferCommands:false使用
    auto_reconnect: true,
    useUnifiedTopology: true,
    useFindAndModify: false
},function (err) {
    if(err) {
        console.log('err :', err);
    } else {
        console.log('success---->');
    }
});
mongoose.connection.on('connected',function () {
    console.log('数据库连接成功---》',dbUrl)
});
module.exports = mongoose;