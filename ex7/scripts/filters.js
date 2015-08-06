angular.module('intro').filter('mixed', function () {
	return function (input) {
		var newString = '';
		var chars = input.split('');

		for (var i = 0; i < chars.length ; i++) {
			if (i % 2) {
				newString += chars[i].toUpperCase();
			} else {
				newString += chars[i].toLowerCase();
			}
		}

		return newString;
	}
});
