/*
  BookList.jsx - Displays a list of books fetched from Open Library API.
  Uses BookCard for individual book display and handles loading and empty states.
  Implements responsive grid layout for mobile and desktop.
*/

import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "./BookCard";
import Spinner from "./Spinner";

const BookList = () => {
  const { books, loading } = useContext(BookContext);

  // Show spinner while loading
  if (loading) return <Spinner />;

  // Show message if no books found
  if (!books || books.length === 0)
    return <p className="text-center mt-6 text-gray-600">No books found.</p>;

  // Render books in a responsive grid
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6 px-4">
      {books.map((book, idx) => (
        <BookCard key={idx} book={book} />
      ))}
    </div>
  );
};

export default BookList;
