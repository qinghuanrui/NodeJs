//	判断是否存在
	$('.login-name').on('blur',function(){
		var username = $(this).val();
		$.ajax({
		   	type: "post",
		   	url: "../users/isUse",
		  	data: "username=" + username,
		   	dataType: "json",//后台处理后返回的数据格式
		   	beforeSend:function(){},
		   	success: function(msg){
		    	if(msg.isUse){
		    		$('.login-name').next().html('用户不存在！马上去<a href="reg.html">注册</a>');
		    		$('.login-btn').attr('disabled','disabled');
		    	}else{
		    		$('.login-name').next().html('');
		    		$('.login-btn').attr('disabled',false);
		    	}
		   }
		});
	});
//判断密码
	$('.login-btn').on("click",function(){
		var username = $('.login-name').val();
		var password = $('.login-password').val();

		$.ajax({
		   	type: "post",
		   	url: "../users/login",
		   	data: "username=" + username + "&password=" + password,
		   	dataType: "json",//后台处理后返回的数据格式
		   	beforeSend:function(){
		   		$('.login-password').next().html('正在验证...');
		   	},
		   	success: function(msg){
		   		$('.login-password').next().html('');
		    	// console.log(msg[0]);
		    	if(msg[0].password != password){
		    		$('.login-password').next().html('密码错误!');
		    	}else{
		    		$('.login-password').next().html('');
		    		alert('登录成功！')
		    	}
		   	}
		});
	})