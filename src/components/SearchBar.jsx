/*
  SearchBar.jsx - Enhanced search bar with modern design and improved UX.
  Features gradient buttons, better spacing, animated filter panel, and enhanced form validation.
*/

import React, { useState, useContext } from "react";
import { BookContext } from "../context/BookContext";
import { Search, Sliders, CheckCircle } from "lucide-react";
import {toast} from 'react-toastify';

const SearchBar = () => {
  const { searchBooks } = useContext(BookContext);

  const [query, setQuery] = useState(""); // Combined title/author input
  const [showFilters, setShowFilters] = useState(false); // Toggle for advanced filters
  const [year, setYear] = useState(""); // Filter: first publish year
  const [language, setLanguage] = useState(""); // Filter: language code
  const [hasFullText, setHasFullText] = useState(false); // Filter: full-text availability

  const handleSubmit = (e) => {
    e.preventDefault();
    
 // Input validation to avoid empty queries
 if (!query || !query.trim()) {
  toast.error("Please enter a book title or author name to start your search.");
  return;
}
    searchBooks({
      query,
      year,
      language,
      hasFullText,
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* Main Search Interface */}
        <div className="relative">
          <div className="flex gap-3">
            {/* Search Input with Icon */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              {/* 1. Search input element: Book title and author name for searching books*/}
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Search by title or author..."
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all duration-200 bg-white shadow-sm placeholder-gray-400"
              />
            </div>

            {/* 2. Search Button with Gradient */}
            <button
              type="button"
              onClick={handleSubmit}
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
            >
              <Search size={20} />
              <span className="hidden sm:inline">Search</span>
            </button>

            {/* Filter Toggle Button */}
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className={`cursor-pointer px-4 py-4 border-2 rounded-2xl transition-all duration-200 flex items-center gap-2 font-medium ${
                showFilters
                  ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <Sliders size={20} />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>
        </div>

        {/* 3. Advanced Filters Panel with Animation */}
        {showFilters && (
          <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Sliders size={20} className="text-indigo-600" />
              Advanced Filters
            </h3>

            {/* Filter Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 3.a Publication Year Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Publication Year
                </label>
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="e.g., 2020"
                  min="1000"
                  max="2025"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-colors"
                />
              </div>

              {/* 3.b. Language Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-colors bg-white cursor-pointer"
                >
                  <option value="">All Languages</option>
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
            </div>

            {/* 3.c. Full-text Checkbox */}
            <div className="mt-4">
              <label className="flex items-center gap-3 text-sm font-medium text-gray-700 cursor-pointer p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  checked={hasFullText}
                  onChange={(e) => setHasFullText(e.target.checked)}
                  className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <CheckCircle size={18} className="text-emerald-500" />
                Show only books with full-text available
              </label>
            </div>

            {/* 4. Clear Filters Button */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => {
                  setYear("");
                  setLanguage("");
                  setHasFullText(false);
                }}
                className="text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
