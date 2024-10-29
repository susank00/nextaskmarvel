"use client";
import React, { useEffect, useState } from "react";

const SeriesPage = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="p-4 bg-gradient-to-b from-red-700 to-black text-white font-serif">
      <h1 className="text-4xl mb-4">Marvel Comic Series</h1>
      <div className="comic-card-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {series.map((item) => (
          <div
            key={item.id}
            className="comic-card bg-white text-black rounded-lg p-3 shadow-md transition-transform transform hover:scale-105"
            // style={{ width: "350 px" }} // Set a fixed width for smaller cards
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
    </div>
  );
};

export default SeriesPage;
