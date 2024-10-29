"use client";
import React, { useEffect, useState } from "react";

const SeriesPerPage = 7; // Number of series to display per page

const SeriesPage = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await fetch("/api/series");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSeries(data.data.results); // Adjust based on your API response structure
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  // Calculate total pages and slice the series array for the current page
  const totalPages = Math.ceil(series.length / SeriesPerPage);
  const startIndex = (currentPage - 1) * SeriesPerPage;
  const currentSeries = series.slice(startIndex, startIndex + SeriesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4 bg-gradient-to-b from-red-700 to-black text-white font-serif">
      <h1 className="text-4xl mb-4">Marvel Comic Series</h1>
      <div className="comic-card-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentSeries.map((item) => (
          <div
            key={item.id}
            className="comic-card bg-white text-black rounded-lg p-3 shadow-md transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-bold mb-1">{item.title}</h2>
            {item.thumbnail && (
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt={item.title}
                className="w-full h-80 rounded-md mb-1"
              />
            )}
            <p className="text-xs mb-1">
              <strong>Start Year:</strong> {item.startYear}
            </p>
            <p className="text-xs mb-2">
              <strong>End Year:</strong> {item.endYear}
            </p>
            <p className="text-sm mb-1">
              {item.description || "No description available."}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 gap-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SeriesPage;
