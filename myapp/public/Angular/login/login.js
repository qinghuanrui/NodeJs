angular.module('Login',[])
	.directive('login',function($state, $http){
		return {
			restrict:'AE',
			scope:{},
			replace:true,
			templateUrl:'./login/login.html',
			link:function(scope){
				
				scope.login = function() {
					$http.post("/users/login",{ username:scope.user.username , password:scope.user.password})
						.success(function(data) {
							// console.log(data[0])
							if (data[0].password === scope.user.password) {
								$state.go("sjld");
							} else{
								alert("密码错误!")
							}
						})

				};

				scope.reg = function() {
					$state.go("reg");
				}
			}
		}
	})