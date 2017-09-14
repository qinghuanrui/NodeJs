angular.module('App',["ui.router", "Login","RegModule","Sjld"])
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/login");
		$stateProvider.state('login',{
			url: "/login",
			template: "<login></login>"
		})
		.state("reg",{
			url: "/reg",
			template: "<reg></reg>"
		})
		.state("sjld",{
			url: "/sjld",
			template: "<sjld></sjld>"
		})


	})


