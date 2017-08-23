var messageDao = require("../dao/messageDao");


exports.setMessage = function(username,setname,message,callback){
	messageDao.setMessage(username,setname,message,function(data){
		callback(data);
	})
}


