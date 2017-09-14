angular.module("RegModule",[])
	.directive("reg",function($state, $http){
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: "./reg/reg.html",
			scope: {},
			link:function(scope){
				scope.reg = function(){
					
					$http.post("/users/reg",{ username:scope.username , password:scope.password})
					.success(function(data){
						if(data){
							alert("注册成功!")
							$state.go("login");					
						}
					})
				}
				
			}
		}
	})