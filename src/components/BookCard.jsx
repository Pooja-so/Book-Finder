/*
  BookCard.jsx - Displays a single book’s information in a card layout.
  Shows cover image, title, authors, first publish year, language, and full-text availability.
  Handles missing cover images gracefully with a placeholder.
*/

import React from "react";
import { languageMap } from "../utils/constants";

const BookCard = ({ book }) => {
  const {
    cover_i,
    title,
    author_name,
    first_publish_year,
    language,
    has_fulltext,
  } = book;

  // Construct cover image URL or fallback placeholder
  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : "https://placehold.co/150x220?text=No+Cover+Page";

  const readbleLanguages = language?.map((code) => languageMap[code] || code);
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center
    ">
      <img
        src={coverUrl}
        alt={title}
        className="w-32 h-44 object-cover mb-2 rounded"
      />
      <h3 className="font-semibold text-lg">{title}</h3>
      {author_name && <p className="text-gray-600">{author_name.join(", ")}</p>}
      {first_publish_year && (
        <p className="text-gray-500 text-sm">Published: {first_publish_year}</p>
      )}
      {language && (
        <p className="text-gray-500 text-sm">Language: {readbleLanguages.join(", ")}</p>
      )}
      {has_fulltext && (
        <span className="mt-1 inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
          Full-text available
        </span>
      )}
    </div>
  );
};

export default BookCard;
