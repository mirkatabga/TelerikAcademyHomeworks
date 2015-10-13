var db = (function () {
	var items = [];
	var id = 0;

	function get() {
		var promise = new Promise(function (resolve, reject) {
			resolve({ result: items.slice() });
		});

		return promise;
	}

	function getById(id) {
		var promise = new Promise(function (resolve, reject) {
			id = +id || 0;
			if (typeof id !== "number" || id <= 0) {
				reject('Id is not valid!');
				return;
			}
			else {
				if (id % 1 !== 0) {
					reject('Id is not valid!');
					return;
				}
				for (var i = 0, len = items.length; i < len; i += 1) {
					if (items[i].id === id) {
						resolve(items[i]);
						return;
					}
				}

				reject('Item not found!');
			}
		});

		return promise;
	}

	function add(item) {
		var promise = new Promise(function (resolve, reject) {
			item.id = ++id;
			items.push(item);
			resolve(item);
		});

		return promise;
	}

	return {
		get: get,
		getById: getById,
		add: add
	};
} ());