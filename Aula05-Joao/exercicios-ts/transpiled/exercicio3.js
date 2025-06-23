function viewBook(book) {
    console.log("Title: ".concat(book.title));
    console.log("Author: ".concat(book.author));
    console.log("Date Published: ".concat(book.publishDate));
}
var book1 = {
    title: 'Iracema',
    author: 'José de Alencar',
    publishDate: 1865,
};
viewBook(book1);
