/*
  BookContext.jsx - Provides global state for the Book Finder app.
  Uses the custom hook useBookSearch to manage books, loading, and search functionality.
  Enables access to book data across the application via React Context.
*/

import React, { createContext } from "react";
import { useBookSearch } from "../hooks/useBookSearch";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  // Destructure books, loading, and search function from custom hook
  const { books, loading, searchBooks } = useBookSearch();

  return (
    <BookContext.Provider value={{ books, loading, searchBooks }}>
      {children}
    </BookContext.Provider>
  );
};
