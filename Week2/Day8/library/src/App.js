import "./App.css";

import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Book } from "./models/book";
import BookInput from "./components/BookInput";
import BookTable from "./components/BookTable";

import BookService from "./services/book-service";

function App() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  useEffect(() => {
    if (books.length) {
      onInitialLoad();
    }
  }, []);

  async function onInitialLoad() {
    try {
      const books = await BookService.fetchBooks();
      setBooks(books);
    } catch (err) {
      console.log(err);
    }
  }

  async function onBookCreate(title, author, isbn) {
    const book = await BookService.createBook(new Book(title, author, isbn));
    setBookToEdit(null);
    setBooks([...books, book]);
  }

  async function onBookRemove(isbn) {
    await BookService.deleteBook(isbn);

    setBooks(books.filter((book) => book.isbn !== isbn));
  }

  function onBookEdit(book) {
    setBookToEdit(book);
    setBooks(books.filter((x) => x.isbn !== book.isbn));
  }

  return (
    <div className="container mt-5">
      <div className="card card-body text-center">
        <h1>Library</h1>

        <hr></hr>

        <BookInput
          bookToEdit={bookToEdit}
          onBookCreate={onBookCreate}
        ></BookInput>

        <BookTable
          books={books}
          onBookEdit={onBookEdit}
          onBookRemove={onBookRemove}
        ></BookTable>
      </div>
    </div>
  );
}

export default App;
