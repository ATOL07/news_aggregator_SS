

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const NewsList = ({ category }) => {
  const [allArticles, setAllArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [author, setAuthor] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  const fetchAllNews = async () => {
    try {
      const initialResponse = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          category: category || 'general',
          apiKey: '66970e8af88943acb9ed0c6472ba8cb1',
          pageSize: articlesPerPage,
          page: 1,
        },
      });

      const totalResults = initialResponse.data.totalResults;
      const totalPages = Math.ceil(totalResults / articlesPerPage);

      let allFetchedArticles = [...initialResponse.data.articles];

      for (let page = 2; page <= totalPages; page++) {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            category: category || 'general',
            apiKey: '66970e8af88943acb9ed0c6472ba8cb1',
            pageSize: articlesPerPage,
            page,
          },
        });
        allFetchedArticles = [...allFetchedArticles, ...response.data.articles];
      }

      setAllArticles(allFetchedArticles);
      setFilteredArticles(allFetchedArticles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchAllNews();
  }, [category]);

  useEffect(() => {
    let filtered = [...allArticles];

    if (searchTerm) {
      filtered = filtered.filter(
        (article) =>
          article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (author) {
      filtered = filtered.filter((article) =>
        article.author?.toLowerCase().includes(author.toLowerCase())
      );
    }

    if (startDate || endDate) {
      filtered = filtered.filter((article) => {
        const articleDate = new Date(article.publishedAt);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;
        return (!start || articleDate >= start) && (!end || articleDate <= end);
      });
    }

    setFilteredArticles(filtered);
    setCurrentPage(1);
  }, [searchTerm, author, startDate, endDate, allArticles]);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const displayedArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const formatDate = (dateString) => {
    return format(new Date(dateString), 'PPP');
  };

  return (
    <div>
      <h2 className="text-3xl text-yellow-300 font-bold my-6 text-center">
        News Feed {category && `- ${category}`}
      </h2>

      {/* Search Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search articles..."
          className="p-3 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author..."
          className="p-3 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="date"
          className="p-3 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="p-3 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {/* Article Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedArticles.map((article, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {article.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {formatDate(article.publishedAt)}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              <strong>Author:</strong> {article.author || 'Unknown'} | <strong>Source:</strong>{' '}
              {article.source?.name || 'Unknown'}
            </p>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="Article"
                className="w-full h-48 object-cover rounded-lg mb-4"
                style={{ objectFit: 'cover' }}
              />
            )}
            <p className="text-gray-700 dark:text-gray-300 mb-4">{article.description}</p>
            <a
              href={article.url}
              className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-l-lg hover:bg-blue-600 transition"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            } hover:bg-blue-400 transition`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsList;



















