/*
	Write a script that selects all the div nodes that are
	directly inside other div elements
		 Create a function using querySelectorAll()
		 Create a function using getElementsByTagName()
*/

(function () {
	if (NodeList.prototype.outputElements === undefined) {
		NodeList.prototype.outputElements = function () {
			if (this.length !== undefined) {
				var i,
					len,
					self = this;

				for (i = 0, len = self.length; i < len; i += 1) {
					console.log(self[i]);
				}
			}
			else {
				throw Error('TypeError outoutElements shluld be called on NodeList');
			}
		}
	}
	function byQuery() {
		var divColection = document.querySelectorAll('div > div');
		return divColection;
	}

	function byTagName() {
		var divs = document.getElementsByTagName('div'),
			i,
			len,
			filtered = [];

		for (i = 0, len = divs.length; i < len; i += 1) {
			var div = divs[i];

			if (div.parentElement instanceof HTMLDivElement) {
				filtered.push(div);
			}
		}
		return filtered;
	}

	var divsFromQuerySelector = byQuery(),
		divsFromTagName = byTagName();

	NodeList.prototype.outputElements.call(divsFromQuerySelector);
	console.log('------------------------------------------------');
	NodeList.prototype.outputElements.call(divsFromTagName);
} ())

