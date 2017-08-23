var express = require('express');
var UserService = require('../service/UserService');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post("/isUse",function(req,res,next){
	var username=req.body.username;  
	UserService.isUse(username, function(data) {
		res.send(data);
	});
});

// router.get("/login", function(req, res) {
// 	var username = req.query.username;
// 	var password = req.query.password;
// 	//调用服务层接口
// 	UserService.login(username, password, function(url) {
		
// 			req.session.username = username;
// 			res.send("true");
		
// 	});
// });

router.post("/login",function(req,res,next){
	var username = req.body.username; 
	var password = req.body.password;
	UserService.login(username,password,function(data) {
		req.session.username = username;
		res.send(data);
	});
});

router.post("/isLogin",function(req,res,next){
	if(req.session.username){
		res.send(req.session.username);
	}else{
		res.send('false');
	}
});



router.post("/reg",function(req,res,next){
	var username=req.body.username; 
	var password=req.body.password;
	UserService.reg(username,password,function(data){
		res.send(data);
	})
});

router.post('/setAge',function(req,res,next){
	var username=req.body.username;
	var age=req.body.age;
	var nikename=req.body.nikename;
	UserService.setAge(username,age,nikename,function(data){
		res.send(data);
	})
})

router.post('/setMessage',function(req,res,next){
	var username=req.body.username;
	var setname=req.body.setname;
	var message=req.body.message;
	UserService.setMessage(username,setname,message,function(data){
		res.send(data);
	})
})






module.exports = router;





