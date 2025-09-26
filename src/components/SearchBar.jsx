/*
  SearchBar.jsx - Compact search bar with filter toggle on the right.
  Clean UI with advanced filters displayed below in a flex-column layout.
*/

import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import { Search, Sliders } from "lucide-react";

const SearchBar = () => {
  const { searchBooks } = useContext(BookContext);

  const [query, setQuery] = useState(""); // Combined title/author input
  const [showFilters, setShowFilters] = useState(false); // Toggle for advanced filters
  const [year, setYear] = useState(""); // Filter: first publish year
  const [language, setLanguage] = useState(""); // Filter: language code
  const [hasFullText, setHasFullText] = useState(false); // Filter: full-text availability

  const handleSubmit = (e) => {
    e.preventDefault();
    searchBooks({
      title: query,
      author: query,
      year,
      language,
      hasFullText,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 mt-6 max-w-lg mx-auto p-4 bg-white rounded-xl shadow"
    >
      {/* Search Input + Filter Toggle */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title or author"
          className="flex-grow border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-1 text-sm cursor-pointer"
        >
          <Search size={16} /> Search
        </button>

        {/* Filter Toggle Button */}
        <button
          type="button"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-1 text-gray-700 px-3 py-2 border rounded-lg hover:bg-gray-100 text-sm cursor-pointer"
        >
          <Sliders size={16} /> Filters
        </button>
      </div>

      {/* Advanced Filters Panel */}
      {showFilters && (
        <div className="flex flex-col gap-3 mt-2 p-3 bg-gray-50 border border-gray-200 rounded-lg">
          {/* Row 1: Year and Language */}
          <div className="flex flex-wrap gap-3 justify-evenly">
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="First publish year"
              className="border rounded-lg px-3 py-2 w-1.2/3 text-sm focus:ring-2 focus:ring-blue-500"
            />
            {/* Language Dropdown */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border rounded-lg px-3 py-2 w-40 text-sm focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="">Select language</option>
              <option value="eng">English</option>
              <option value="fre">French</option>
              <option value="spa">Spanish</option>
              <option value="ger">German</option>
              <option value="ita">Italian</option>
              <option value="hin">Hindi</option>
              <option value="jpn">Japanese</option>
              <option value="chi">Chinese</option>
            </select>
          </div>

          {/* Row 2: Full-text checkbox */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={hasFullText}
              onChange={(e) => setHasFullText(e.target.checked)}
              className="w-4 h-4"
            />
            Full-text only
          </label>
        </div>
      )}
    </form>
  );
};

export default SearchBar;
