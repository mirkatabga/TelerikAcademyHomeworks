/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
	var library = (function () {
		var books = [];
		var categories = [];
		
		function listBooks(params) {
			var filtered = [],
			prop,
			bookIndex;
			
			//finds all books with given property(ies);
			if (typeof params === typeof {}) {
				for (prop in params) {
					for(bookIndex in books){
						if (books[bookIndex][prop]) {
							if (params[prop] === books[bookIndex][prop]) {
								filtered.push(books[bookIndex]);
							}
						}
					}
				}
			}
			else{
				//there are no books with current property(ies) so return all
				return books;
			}
			return filtered;
		}

		function addBook(book) {
			var bookIndex,
				len,
				pattern,
				digitsISBN,
				categoryIndex,
				hasCategory = false; //is current book category exist in categories[]
			
			//validation
			if (!book.title || !book.author || !book.isbn || !book.category) {
				throw new Error('Missing property.');
			}
			
			if (book.title.length < 2 || book.title.length > 100) {
				throw new Error('Title must be between 2 - 100 symbols');
			}
			
			if (book.category.length < 2 || book.category.length > 100) {
				throw new Error('Category must be between 2 - 100 symbols');
			}
			
			for (bookIndex = 0, len = books.length ; bookIndex < len; bookIndex+=1) {
				if (book.title === books[bookIndex].title) {
					throw new Error('Title is not unique');
				}
				
				if (book.isbn === books[bookIndex].isbn) {
					throw new Error('ISBN is not unique');
				}
			}
			
			pattern = /[0-9]+/g;
			digitsISBN = (book.isbn.match(pattern)).toString();
			
			if ((digitsISBN.length !== 10 && digitsISBN.length !== 13) || (digitsISBN != book.isbn)) {
				throw new Error('Invalid ISBN');
			}
			
			//checks if category already exist
			for(categoryIndex in categories){
				if (categories[categoryIndex] === book.category) {
					hasCategory = true;
					break;
				}
			}
			
			if (!hasCategory) {
				categories.push(book.category);
			}
			
			book.ID = books.length + 1;
			books.push(book);
			return book;
		}

		function listCategories() {
			return categories;
		}

		var result =  {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
		
		return result;
	} ());
	
	/*	var book1 = {
		title: 'East of Eden',
		author: 'John Steinbeck',
		isbn: '0670033049',
		category: 'novel'
	};
	
	var book2 = {
		title: 'North of Eden',
		author:'John Snow',
		isbn: '0670033049111',
		category: 'another'
	};
	
	var book = library.books.add(book1);
	library.books.add(book2);
	console.log(library.books.list({
		category: book.category
	}));*/
	return library;
}

//solve();
module.exports = solve;
