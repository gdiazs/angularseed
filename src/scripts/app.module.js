(function () {
	'use strict';

	define( function (require) {
		var angular =  require('angular');
		require('angular-route');
		
		var appModule = angular.module('app', ['ngRoute']);

		return appModule;
	});


})();