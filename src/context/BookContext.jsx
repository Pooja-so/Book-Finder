/*
  BookContext.jsx
  ----------------
  Context provider for managing global book state.
  Handles book data, loading/error states, and exposes actions to consumers.
*/

import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useBookSearch } from "../hooks/useBookSearch";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  // 1. Manages states
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Hook provides reusable search logic
  const { searchBooks } = useBookSearch(setBooks, setLoading, setError, toast);

  // 3. Clear previous search results and errors
  const clearResults = () => {
    setBooks([]);
    setError(null);
  };

  const value = {
    books,
    loading,
    error,
    searchBooks,
    clearResults,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};
