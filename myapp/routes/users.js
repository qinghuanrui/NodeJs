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

router.post("/login",function(req,res,next){
	var username=req.body.username; 
	var password=req.body.password;  
	UserService.login(username,password,function(data) {
		res.send(data);
	});
});

router.post("/reg",function(req,res,next){
	var username=req.body.username; 
	var password=req.body.password;
	UserService.reg(username,password,function(data){
		res.send(data);
	})
})


module.exports = router;





