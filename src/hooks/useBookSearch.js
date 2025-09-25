/*
  useBookSearch.js - Custom hook to manage book search functionality.
  Handles API calls to Open Library, loading state, and error handling.
  Accepts search parameters including title, author, and optional filters.
*/

import { useState } from "react";
import { toast } from "react-toastify";

export const useBookSearch = () => {
  const [books, setBooks] = useState([]);       // Stores the fetched books
  const [loading, setLoading] = useState(false); // Tracks loading state during API call

  // Function to search books with optional filters
  const searchBooks = async ({
    title = "",
    author = "",
    year = "",
    language = "",
    hasFullText = false
  }) => {
    // Prevent empty search
    if (!title.trim() && !author.trim()) {
      toast.error("Please enter a title or author to search.");
      return;
    }

    setLoading(true); // Set loading true while fetching data

    // Build query parameters dynamically
    let query = [];
    if (title) query.push(`title=${encodeURIComponent(title)}`);
    if (author) query.push(`author=${encodeURIComponent(author)}`);
    if (year) query.push(`first_publish_year=${year}`);
    if (language) query.push(`language=${language}`);
    if (hasFullText) query.push(`has_fulltext=true`);

    const apiUrl = `https://openlibrary.org/search.json?${query.join("&")}`;

    try {
      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error("Failed to fetch books");

      const data = await res.json();

      // Handle no results
      if (!data.docs || data.docs.length === 0) {
        toast.info("No books found. Try different filters.");
        setBooks([]);
      } else {
        setBooks(data.docs.slice(0, 20)); // Limit results to 20
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false); // Stop loading once fetch completes
    }
  };

  // Return books, loading state, and search function
  return { books, loading, searchBooks };
};
