var UserDao = require("../dao/userDao");

//是否被使用的service
exports.isUse = function(username, callback) {
	UserDao.isUse(username,function(data){
		callback(data);
	})

};


exports.login = function(username,password,callback){
	UserDao.login(username,password,function(data){
		callback(data);
	})
};








