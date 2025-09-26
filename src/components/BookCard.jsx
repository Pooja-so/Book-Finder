/*
  BookCard.jsx - Enhanced book card with modern design and animations.
  Features hover effects, rating badges and better visual hierarchy.
  Includes fallback images and improved metadata display.
*/

import React from "react";
import { languageMap } from "../utils/constants";
import { Calendar, Globe, Star, CheckCircle } from "lucide-react";

const BookCard = ({ book }) => {
  const {
    cover_i,
    title,
    author_name,
    first_publish_year,
    language,
    has_fulltext,
  } = book;

  // Enhanced cover image handling with better fallback
  const coverUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&crop=center";

  // Process languages for better display
  const readableLanguages = language
    ?.slice(0, 2)
    .map((code) => languageMap[code] || code);

  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.src =
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop&crop=center";
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
      {/* 1. Book Cover Image with hover Effects */}
      <div className="relative overflow-hidden">
        <img
          src={coverUrl}
          alt={title || "Book cover"}
          className="w-full h-60 sm:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
          onError={handleImageError}
          loading="lazy"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Enhanced Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {/* 2. Full-text Badge */}
          {has_fulltext && (
            <div className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-lg">
              <CheckCircle size={12} />
              <span className="hidden sm:inline">Full Text</span>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Content Section */}
      <div className="p-5">
        {/* 3. Title with Improved Typography */}
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200 leading-tight">
          {title || "Untitled"}
        </h3>

        {/* 4. Author Information */}
        {author_name && author_name.length > 0 && (
          <p className="text-gray-600 mb-3 text-sm font-medium">
            by {author_name.slice(0, 2).join(", ")}
            {author_name.length > 2 && (
              <span className="text-gray-400">
                {" "}
                & {author_name.length - 2} more
              </span>
            )}
          </p>
        )}

        <div className="space-y-2 text-xs text-gray-500 mb-3">
          {/* 5. Publication Year */}
          {first_publish_year && (
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-indigo-400 flex-shrink-0" />
              <span>Published {first_publish_year}</span>
            </div>
          )}

          {/* 6. Languages */}
          {readableLanguages && readableLanguages.length > 0 && (
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-indigo-400 flex-shrink-0" />
              <span>{readableLanguages.join(", ")}</span>
            </div>
          )}

        </div>

        {/* Interactive Elements (for future enhancement) */}
        <div className="mt-4 pt-3 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="flex justify-between items-center text-xs text-gray-400">
            <span>Click to view details</span>
            {has_fulltext && (
              <span className="text-emerald-600">• Read online</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
