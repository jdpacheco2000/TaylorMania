// In SongsList.jsx
import React, { useState } from 'react';

const SongsList = ({ songs }) => {
  const [songRatings, setSongRatings] = useState({});

  const handleRatingChange = (songId, rating) => {
    setSongRatings((prevRatings) => ({
      ...prevRatings,
      [songId]: rating,
    }));
  };

  return (
    <ul className="songs-list"> {/* Ensure the class name matches your CSS */}
      {songs.map((song) => (
        <li key={song.id}>
          {song.title ? (
            <div>
              <span>{song.title}</span>
              {/* Add your song details here */}
              <select
                value={songRatings[song.id] || ''}
                onChange={(e) => handleRatingChange(song.id, e.target.value)}
              >
                <option value="">-- Rate Song --</option>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <span style={{ color: 'red' }}>Title Missing</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SongsList;
