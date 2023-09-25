//You are given an array of objects that represent books with an author and a title. Return a new array containing only the titles of the books.
const getTheTitles = function (arr) {
    let titles = [];
    arr.forEach((book) => titles.push(book.title));
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
