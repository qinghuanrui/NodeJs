var express = require('express');
var MessageService = require('../service/MessageService');
var router = express.Router();


router.post('/setMessage',function(req,res,next){
	var username=req.body.username;
	var setname=req.body.setname;
	var message=req.body.message;
	MessageService.setMessage(username,setname,message,function(data){
		res.send(data);
	})
})


module.exports = router;

