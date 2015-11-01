/* 
Create a function that:
*   **Takes** a collection of books
    *   Each book has propeties `title` and `author`
        **  `author` is an object that has properties `firstName` and `lastName`
*   **finds** the most popular author (the author with biggest number of books)
*   **prints** the author to the console
	*	if there is more than one author print them all sorted in ascending order by fullname
		*   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve() {
  return function (books) {
    var _ = require('underscore');
    _.each(books, function (book) {
      book.author.fullName = book.author.firstName + ' ' + book.author.lastName;
    })

    var authorsBookCount = _.countBy(books, function (book) {
      return book.author.fullName;
    })

    authorsBookCount = _.chain(authorsBookCount)
      .pairs()
      .sortBy(function (author) {
        return author[1];
      })
      .value();

    var maxBooksFromOneAuthor = _.last(authorsBookCount)[1];

    var authorWithMostBooks = _.chain(authorsBookCount)
      .filter(function (authorArr) {
        return authorArr[1] === maxBooksFromOneAuthor;
      })
      .sortBy(function (authorArr) {
        return authorArr[0];
      })
      .value();

    _.forEach(authorWithMostBooks, function (authorArr) {
      console.log(authorArr[0]);
    })
  };
}

module.exports = solve;
