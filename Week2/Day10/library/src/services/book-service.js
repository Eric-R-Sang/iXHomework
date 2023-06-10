import { collection, addDoc, query, getDocs, doc, updateDoc, deleteDoc} from "firebase/firestore";
import { db } from "../firebase/firebase";

import { Book } from "../models/book";

class BookService {
  constructor() {
    this.collection = "books";
  }

  async fetchBooks() {
    const collectionRef = collection(db, this.collection);
    const q = query(collectionRef);
    const qSnapshot = await getDocs(q);

    const books = [];

    qSnapshot.forEach((doc) => {
        const data = doc.data();
        const book = new Book(data.title, data.author, data.isbn, data.userId);

        books.push(book);
    })

    return books;
  }

  async createBook(book) {
    const collectionRef = collection(db, this.collection);

    const docRef = await addDoc(collectionRef, {
      title: book.title,
      author: book.author,
      isbn: book.isbn,
    });

    book.userId = docRef.userId;
    return book;
  }

  async updateBook(book) {
    const docRef = doc(db, this.collection, book.id);

    await updateDoc(docRef, {
        title: book.title,
        author: book.author,
        isbn: book.isbn
    })
    

    return book;
  }

  async deleteBook(isbn) {
    const docRef = doc(db, this.collection, isbn);

    await deleteDoc(docRef);
  }
}

const service = new BookService();
export default service;
