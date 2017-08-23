var MessageModal = require("./modal/Messagemodal").MessageModal;


exports.setMessage = function(username,setname,message,callback){
	var date = new Date();
	// MessageModal.update({
	// 	username: username
	// },{
	// 	setname:setname,
	// 	message:message,
	// 	date:date
	// },function(err,data){
	// 	if(data) {
	// 		callback("true");
	// 	} else {
	// 		callback("false");
	// 	}
		
	// })

	
	new MessageModal({
		Apid:[new DBRef('people',ObjectId("4e3f33de6266b5845052c02c"))],
		setname:setname,
		message:message,
		date:date
	}).save(function(err, data) {
		if(data) {
			callback("true");
		} else {
			callback("false");
		}
	});
	
}
