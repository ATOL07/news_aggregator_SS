import React, { useState } from 'react';

const BookmarkList = () => {
  const [bookmarks, setBookmarks] = useState([
    { title: 'React 18 Release', url: 'https://reactjs.org' },
    { title: 'Tailwind CSS 3.0', url: 'https://tailwindcss.com' },
    // Add more bookmarks here
  ]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-gray-100 mb-6">Your Bookmarks</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarks.map((bookmark, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{bookmark.title}</h3>
            <a
              href={bookmark.url}
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkList;
