angular.module("Sjld",[])
	.directive("sjld",function($state, $http){
		return {
			restrict: 'AE',
			replace: true,
			templateUrl: "./sanjiliandong/sjld.html",
			scope: {},
			link:function(scope){
				scope.sheng = {
					
				}
				scope.choseSheng = function(){

				}
				
			}
		}
	})