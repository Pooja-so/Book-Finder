/*
  BookList.jsx - Enhanced component to display search results.
  Features improved grid layout, better empty states, error handling,
  and result counters for better user feedback.
*/

import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "./BookCard";
import Spinner from "./Spinner";
import { Book } from "lucide-react";

const BookList = () => {
  const { books, loading, error } = useContext(BookContext);

  // Show spinner while loading
  if (loading) return <Spinner />;

  // Show error state with styled error message
  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
          <div className="text-red-600 mb-4">
            <Book size={48} className="mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            Search Error
          </h3>
          <p className="text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Show enhanced empty state when no books found
  if (!books || books.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="text-gray-400 mb-6">
          <Book size={64} className="mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Ready to Explore?
        </h3>
        <p className="text-gray-500 mb-6">
          Enter a book title or author name above to start discovering amazing
          books.
        </p>
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
          <h4 className="font-semibold text-indigo-900 mb-2">Search Tips:</h4>
          <ul className="text-sm text-indigo-700 space-y-1 text-left max-w-sm mx-auto">
            <li>• Try popular authors like "Stephen King" or "J.K. Rowling"</li>
            <li>• Search for classic titles like "Pride and Prejudice"</li>
            <li>• Use filters to narrow down your results</li>
            <li>• Look for books with full-text available</li>
          </ul>
        </div>
      </div>
    );
  }

  // Render books in enhanced responsive grid
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Results Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Found {books.length} book{books.length !== 1 ? "s" : ""}
        </h2>
        <p className="text-gray-600 mt-1">Discover your next great read</p>
      </div>

      {/* Enhanced Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {books.map((book, idx) => (
          <BookCard key={book.key || `book-${idx}`} book={book} />
        ))}
      </div>

      {/* Load More Section (for future enhancement) */}
      {books.length >= 24 && (
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Showing {books.length} results. Refine your search for more specific
            results.
          </p>
        </div>
      )}
    </div>
  );
};

export default BookList;
