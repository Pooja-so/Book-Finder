/*
  useBookSearch.js
  -----------------
  Custom hook containing the Open Library API search logic.
  Accepts state setters for books, loading, and error to keep it reusable.
*/
import { toast } from "react-toastify";

export const useBookSearch = (setBooks, setLoading, setError) => {
  // Handles searching books with provided filters
  const searchBooks = async ({ query, year, language, hasFullText }) => {
    setLoading(true);
    setError(null);

    // 1. API URL (User inputs)
    try {
      let url = "https://openlibrary.org/search.json?";
      // URLSearchParams → automatically handles & and encoding spaces to +.
      const params = new URLSearchParams();

      // Use general search parameter that searches across title, author, and other fields
      params.append("q", query.trim());
      if (year) params.append("first_publish_year", year);
      if (language) params.append("language", language);
      if (hasFullText) params.append("has_fulltext", "true");

      // Add a limit for better performance
      url += params.toString() + "&limit=24";

      // 2. Fetch results (Open Library API)
      const response = await fetch(url); 

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // 3. Handle successful response and errors notifications (react-toastify)
      if (data.docs && data.docs.length > 0) {
        setBooks(data.docs);
        toast.success(`Found ${data.docs.length} books!`);
      } else {
        setBooks([]);
        toast.info("No books found. Try different search terms.");
      }
    } catch (err) {
      console.error("Search error:", err);
      setError(
        "Failed to fetch books. Please check your connection and try again."
      );
      toast.error("Search failed. Please try again.");
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return { searchBooks };
};
