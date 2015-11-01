/* By a given collection of books, find the most popular
author (the author with the highest number of
books) */

(function(){
	if(typeof require !=='undefined'){
		_ = require('./node_modules/underscore/underscore-min.js');
	}
	
	var books = require('./generate-books.js');
	
		
	var count = _.countBy(books,function(book){
		return book.author;
	})
	
	//console.log(count);
	
	var maxCount = _.max(count,function(item){
		return item;
	});
	
	var pairs = _.pairs(count);
	
	console.log(_.filter(pairs,function(pair){
		return _.last(pair) === maxCount;
	}))
}())