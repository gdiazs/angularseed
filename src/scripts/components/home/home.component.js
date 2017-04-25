(function () {
	'use strict';

	define(function (require) {
		var appModule = require('app.module');

		var sampleComponent = appModule.component('home', {
			template: '<h2 class="sub-header">Bienvenido</h2>',
			
		});

		return sampleComponent;


	});
})();