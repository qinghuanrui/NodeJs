angular.module('Login',[])
	.directive('login',function($state, $http){
		return {
			restrict:'AE',
			scope:{},
			replace:true,
			templateUrl:'./login/login.html',
			link:function(scope){
				scope.user = {
					username: "111",
					password: "111"
				}
				scope.login = function() {

					$http.post("/users/login",{ username:scope.user.username , password:scope.user.password})
						.success(function(data) {

							if (data) {
								// $state.go("info");
							}
						})
				};

				scope.reg = function() {
					// $state.go("reg");
				}
			}
		}
	})