(function () {
	'use strict';

	define( function (require) {
		var angular =  require('angular');
		require('angularRoute');
		
		var appModule = angular.module('app', ['ngRoute']);
		return appModule;
	});


})();