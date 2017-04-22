(function () {
	'use strict';

	define(function (require) {
		
		var sharedComponent = require('./shared/shared.component');

		var appComponent = require('app.module').component('app',{

			template: '<shared></shared>',


		});

	});

})();