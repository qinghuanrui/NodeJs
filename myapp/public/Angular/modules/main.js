angular.module('App',["ui.router", "Login"])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/login");
		$stateProvider.state('login',{
			url: "/login",
			template: "<login></login>"
		})

	})


