// Renders individual book details inside a styled card.

import React from "react";

const BookCard = ({ book }) => {
  // Determine cover image URL or fallback placeholder
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg transition">
      {/* Book cover */}
      <img
        src={coverUrl}
        alt={book.title}
        className="w-32 h-48 object-cover rounded-md mb-3"
      />

      {/* Book title */}
      <h3 className="text-lg font-semibold">{book.title}</h3>

      {/* Book authors */}
      <p className="text-sm text-gray-600">
        {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
      </p>

      {/* First publication year */}
      <p className="text-sm text-gray-500 mt-1">
        {book.first_publish_year
          ? `First Published: ${book.first_publish_year}`
          : ""}
      </p>
    </div>
  );
};

export default BookCard;
