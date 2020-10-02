import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

function BookList({ data }) {
  const [selected, setSelected] = useState(null);
  const displayBooks = () => {
    if (data.loading) {
      return <div>Loading Books....</div>;
    } else {
      return data.books.map((book) => (
        <li
          onClick={(e) => {
            setSelected(book.id);
          }}
          key={book.id}
        >
          {book.name}
        </li>
      ));
    }
  };
  return (
    <>
      <ul id="book-list">{displayBooks()}</ul>
      <BookDetails bookId={selected} />
    </>
  );
}

export default graphql(getBooksQuery)(BookList);
