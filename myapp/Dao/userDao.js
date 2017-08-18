
var Usermodal = require("./modal/Usermodal").UserModel;
//是否被使用
exports.isUse = function(username, callback) {

	Usermodal.find({
		username: username
	}, function(err, data) {
		// console.log("dao:",data)
		if(data.length == 0) {//为零表示没有注册过
			callback({
				isUse:true
			});
		} else {
			callback({
				isUse:false
			});
		}
	})

};

//登录用户密码
exports.login = function(username,password,callback){
	
	Usermodal.find({
		username:username
	},function(err,data){
		
		callback(data);
	})




}





