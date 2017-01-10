( function() {
	var app = angular.module("jobsite", []);

	app.controller("JobsController", function(){
		this.jobs =  [
			{"title" : "App dev"},
			{"title" : "Dev Ops"}
		];
	});

	app.directive("jobsList", function(){
		return {
			restrict : 'E',
			templateUrl : 'jobs-list.html',
			controller : function(){
				this.jobs =  [
					{"title" : "App dev"},
					{"title" : "Dev Ops"}
				];
			},
			controllerAs : 'j'
		};
	});

}());