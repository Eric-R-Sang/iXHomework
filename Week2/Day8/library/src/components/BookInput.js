import React, { useState, useEffect } from "react";
import { Book } from "../models/book";

export default function BookInput(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  useEffect(() => {
    if (props.bookToEdit) {
      setTitle(props.bookToEdit.title);
      setAuthor(props.bookToEdit.author);
      setIsbn(props.bookToEdit.isbn);
    }
  }, [props.bookToEdit]);

  function onBookFormSubmit(e) {
    e.preventDefault();

    if (!isValid()) {
      return;
    }

    props.onBookCreate(title, author, isbn);
    clearInputs();
  }

  function isValid() {
    return title !== "" && author !== "" && isbn !== "";
  }

  function clearInputs() {
    setTitle("");
    setAuthor("");
    setIsbn("");
  }

  return (
    <div>
      <form onSubmit={onBookFormSubmit}>
        <div className="mb-3">
          <label className="form-label"> Title </label>
          <input
            id="title-input"
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Author </label>
          <input
            id="author-input"
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> #ISBN </label>
          <input
            id="isbn-input"
            type="text"
            className="form-control"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
          />
        </div>

        <div className="d-grid mt-4">
          <button className="btn btn-outline-primary" type="submit">
            {props.bookToEdit ? "Update Book" : "Add Book"}
          </button>
        </div>
      </form>
    </div>
  );
}
