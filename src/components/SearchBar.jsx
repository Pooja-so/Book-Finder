// Search input component.
// Captures user's query and triggers searchBooks function from the context.

import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext"; // Access global search function
import { Search } from "lucide-react"; // Icon for search button

const SearchBar = () => {
  const [query, setQuery] = useState(""); // Local state to track input text
  const { searchBooks } = useContext(BookContext); // Extract search function from context

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    searchBooks(query); // Trigger API search with current input
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center gap-2 mt-6 w-full max-w-md mx-auto"
    >
      {/* Text input for book title */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query on each keystroke
        placeholder="Search for books..."
        className="flex-1 border rounded-xl px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Search button with icon */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 flex items-center gap-1"
      >
        <Search size={18} /> Search
      </button>
    </form>
  );
};

export default SearchBar;
