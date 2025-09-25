// Context for managing and providing global book search state and actions.
// Uses the custom useBookSearch hook to encapsulate API fetching, loading state, and search functionality.
// Allows any component in the app tree to access books, loading status, and the searchBooks function.

import React, { createContext } from "react";
import { useBookSearch } from "../hooks/useBookSearch";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const { books, loading, searchBooks } = useBookSearch();

  return (
    <BookContext.Provider value={{ books, loading, searchBooks }}>
      {children}
    </BookContext.Provider>
  );
};
