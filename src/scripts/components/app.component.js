(function () {
	'use strict';

	define(function (require) {
		
		var sharedComponent = require('./shared/shared.component');

		console.log(sharedComponent);

		var appComponent = require('app.module').component('app',{

			template: '<shared></shared>',

		});

	});

})();