interface Book{
  title: string;
  author: string;
  publishDate: number;
}

function viewBook(book: Book): void{
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
  console.log(`Date Published: ${book.publishDate}`);
}

let book1: Book = {
  title: 'Iracema',
  author: 'José de Alencar',
  publishDate: 1865,
};

viewBook(book1);
