"use client";
import React, { useEffect, useState } from "react";

const ComicCardPage = () => {
  const [comics, setComics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await fetch("/api/comics");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setComics(data.data.results);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchComics();
  }, []);

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!comics.length) return <p className="text-white">Loading...</p>;

  return (
    <div className="p-4 bg-gradient-to-b from-red-700 to-black text-white font-serif">
      <h1 className="text-4xl mb-4">Marvel Comic Collection</h1>
      <div className="comic-card-container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {comics.map((comic) => (
          <div
            key={comic.id}
            className="comic-card bg-white text-black rounded-lg p-3 shadow-md transition-transform transform hover:scale-105"
          >
            <h2 className="text-xl font-bold mb-1">{comic.title}</h2>
            {comic.thumbnail && (
              <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
                className="w-full h-80 rounded-md mb-1"
              />
            )}
            <p className="text-xs mb-1">
              <strong>Issue Number:</strong> {comic.issueNumber}
            </p>
            <p className="text-sm mb-1">
              {comic.description || "No description available."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicCardPage;
