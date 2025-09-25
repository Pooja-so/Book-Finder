// Displays a grid of books or a loading spinner.
// Consumes book data and loading state from the context.

import React, { useContext } from "react";
import { BookContext } from "../context/BookContext"; // Access books and loading state
import BookCard from "./BookCard";                   // Child component for each book
import Spinner from "./Spinner";                     // Loading indicator

const BookList = () => {
  const { books, loading } = useContext(BookContext); // Destructure context values

  // If data is still loading, show spinner
  if (loading) return <Spinner />;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto px-4">
      {/* Render each book as a BookCard */}
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
