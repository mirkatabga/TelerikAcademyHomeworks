var templates = (function () {
	function get(templateName) {
		var promise = new Promise(function (resolve, reject) {

			$.get('templates/' + templateName + '.handlebars', function (data) {
				resolve(data);
			});
		});

		return promise;
	}
	return {
		get: get
	};
} ());