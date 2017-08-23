
var Usermodal = require("./modal/Usermodal").UserModel;
var MessageModal = require("./modal/Messagemodal").MessageModal;
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

//注册
exports.reg = function(username,password,callback){
	var date = new Date();
	new Usermodal({
		username: username,
		password: password,
		date:date 
	}).save(function(err, data) {
		if(data) {
			callback("true");
		} else {
			callback("false");
		}
	});
	

}

exports.setAge = function(username,age,nikename,callback){

	Usermodal.update({
		username: username
	},{
		age:age,
		nikename:nikename
	},function(err,data){
		if(data) {
			callback("true");
		} else {
			callback("false");
		}
		
	})
}


exports.setMessage = function(username,setname,message,callback){
	
	var date = new Date();
	Usermodal.update({
		username: username
	},{
		messages:[{
			setname:setname,
			message:message,
			setdate:date
		}]
	},function(err,data){

		if(data) {
			callback("true");
		} else {
			callback("false");
		}
		
	})
	

}

//var Ba={Apid:[new DBRef('people',ObjectId("599d269adc3f9f19b091fd90"))],value:3}  


//查询全部
//MyStudent.find({}, function(err, docs) {});
