(function () {
	var sammyApp = Sammy('#content', function () {
		this.get('#/', function () {
			this.redirect('#/home');
		});

		this.get('#/home', function () {

		});

		this.get('#/items', function () {
			var items;
			db.get()
				.then(function (res) {
					items = res.result;
					return templates.get('items');
				})
				.then(function (tempSource) {
					var template = Handlebars.compile(tempSource);
					var html = template({ items: items });

					$('#content').html(html);
				});
		});

		this.get('#/items/new', function (context) {
			templates.get('items-new')
				.then(function (html) {
					var template = Handlebars.compile(html);
					$('#content').html(template());

					$('#btn-add').on('click', function () {
						var item = {
							name: $('#tb-name').val(),
							age: +$('#nb-age').val(),
						};
						db.add(item)
							.then(function (item) {
								toastr.success('Item saved!');
								context.redirect('#/item' + item.id);
							});
					});
				});
		});

		this.get('#/item:id', function () {
			db.getById(this.params.id)
				.then(function (item) {
					templates.get('item-details')
						.then(function (html) {
							var template = Handlebars.compile(html);
							$('#content').html(template(item));
						});
				})
				.catch(function (err) {
					toastr.error(err);
				});
		});
	});

	console.log('App start at ' + Date());
	sammyApp.run('#/');
} ());