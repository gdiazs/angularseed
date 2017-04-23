(function () {
	'use strict';

	define(function (require) {

		var navbar = require('./navbar/navbar.component');
		var sidebar = require('./sidebar/sidebar.component');
		var sharedComponent = require('app.module').component('shared', {
			
			template: '<navbar></navbar><sidebar></sidebar>',


		});

	})


})();