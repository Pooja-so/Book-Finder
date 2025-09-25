// Main page layout of the application.
// Combines the search bar and book list to create the full user interface.

import React from "react";
import SearchBar from "../components/SearchBar"; // User input component
import BookList from "../components/BookList"; // Displays search results

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* App heading */}
      <h1 className="text-3xl font-bold text-center text-blue-700">
        📚 Book Finder
      </h1>

      {/* Search bar for entering book titles */}
      <SearchBar />

      {/* Display list of books returned from the API */}
      <BookList />
    </div>
  );
};

export default Home;
