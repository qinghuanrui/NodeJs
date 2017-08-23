var mongoose = require('mongoose');
var db=  require("../database").db;

var Messages = new mongoose.Schema({
	username:String,
	setname:String,
	message:String,
	date:String
},{versionKey: false});


var  MessageModal = db.model("users", Messages, "messages");

exports.MessageModal=MessageModal;