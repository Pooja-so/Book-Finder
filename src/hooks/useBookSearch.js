// Custom hook for handling book search logic and related state.
// Encapsulates API fetching, loading state, and error handling for reuse in components or context.

import { useState } from "react";
import { toast } from "react-toastify";

export const useBookSearch = () => {
  const [books, setBooks] = useState([]);       // Store fetched book results
  const [loading, setLoading] = useState(false); // Track API loading status

  // Fetch books from Open Library API based on provided title
  const searchBooks = async (title) => {
    if (!title.trim()) {                        // Validate input
      toast.error("Please enter a book title to search.");
      return;
    }
    setLoading(true);                            // Show loading indicator
    try {
      const res = await fetch(`https://openlibrary.org/search.json?title=${title}`);
      if (!res.ok) throw new Error("Failed to fetch books"); // Handle bad HTTP response

      const data = await res.json();             // Parse JSON response
      if (!data.docs || data.docs.length === 0) {
        toast.info("No books found. Try a different title."); // Inform if no results
        setBooks([]);
      } else {
        setBooks(data.docs.slice(0, 20));        // Limit results to first 20
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again later."); // Catch network or parsing errors
    } finally {
      setLoading(false);                          // Hide loading indicator
    }
  };

  return { books, loading, searchBooks };        // Expose state and action
};
