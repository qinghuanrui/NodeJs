//	判断是否存在
	$('.reg-name').on('blur',function(){
		var username = $(this).val();
		
		$.ajax({
		   	type: "post",
		   	url: "../users/isUse",
		  	data: "username=" + username,
		   	dataType: "json",//后台处理后返回的数据格式
		   	beforeSend:function(){},
		   	success: function(msg){
		    	if(!msg.isUse){
		    		$('.reg-name').next().html('用户已存在！');
		    		$('.reg-btn').attr('disabled','disabled');
		    	}else{
		    		$('.reg-name').next().html('');
		    		$('.reg-btn').attr('disabled',false);
		    	}
		   }
		});
	});
	
	$('.reg-password').blur(function(){
		if($(this).val() != ""){
			$(this).next().html('');
		    $('.reg-btn').attr('disabled',false);
		}else{
			$(this).next().html('不能为空！');
			$('.reg-btn').attr('disabled','disabled');
			return
		}
	})

	//	注册
	$('.reg-btn').on('click',function(){
		//两次密码输入是否匹配
		
		if($('.reg-password1').val() === $('.reg-password').val()){
			$('.reg-password1').next().html("");
			
		}else{
			$('.reg-password1').next().html("密码不匹配!");
			
			return
		}
		
		var username = $('.reg-name').val();
		var password = $('.reg-password1').val();
		if(username == ''){
			$('.reg-name').next().html('不能为空！');
			$('.reg-btn').attr('disabled','disabled');
			return
		}else{
			$('.reg-name').next().html('');
			$('.reg-btn').attr('disabled',false);
		};
		if(password == ''){
			$('.reg-password').next().html('不能为空！');
			$('.reg-btn').attr('disabled','disabled');
			return
		}else{
			$('.reg-password').next().html('');
			$('.reg-btn').attr('disabled',false);
		};

		$.ajax({
		   	type: "post",
		   	url: "../users/reg",
		  	data: "username=" + username+"&password="+password,
		   	dataType: "json",//后台处理后返回的数据格式
		   	beforeSend:function(){
		   		$('.reg-suc').html("请稍后...");
		   	},
		   	success: function(msg){
		   		var timer;
		   		var num = 3;
		    	if(msg){
					
		    		timer = window.setInterval(function(){
		    			$('.reg-suc').html("恭喜你注册成功!"+num+"秒后自动返回<a href='index.html'>登录</a>");
		    			num--;
		    			if(num == -1){
		    				clearInterval(timer);
		    				history.go(-1);
		    			}
		    		},1000);
		    		
		    	}else{
		    		$('.reg-suc').html("迷路啦！请重新注册");
		    	}
		   }
		});
	});
