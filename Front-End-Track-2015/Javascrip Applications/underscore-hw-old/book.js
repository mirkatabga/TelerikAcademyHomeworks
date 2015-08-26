module.exports = (function () {
	var id = 0,
		book = Object.create({});

	Object.defineProperties(book, {
		init: {
			value: function (title, author) {
				this._id = ++id;
				this.title = title;
				this.author = author;
				
				return this;
			}
		},
		id: {
			get: function () {
				return this._id;
			}
		},
		title: {
			get: function () {
				return this._title;
			},
			set: function (value) {
				if (typeof value === 'string' && value.length > 5 && value.length < 100) {
					this._title = value;
				}
			}
		},
		author: {
			get: function () {
				return this._author;
			},
			set: function (value) {
				if (typeof value === 'string' && value.length > 5 && value.length < 100) {
					this._author = value;
				}
			}
		}
	})
	
	return book;
} ())