// RatingPage.jsx
import React, { useState } from 'react';
import AlbumsList from '../Albums/AlbumList';
import SongsList from '../Songs/SongsList'; // You might have a component to display songs

const RatingPage = ({ albums }) => {
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(0);

  const handleNextAlbum = () => {
    // Move to the next album
    setSelectedAlbumIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevAlbum = () => {
    // Move to the previous album
    setSelectedAlbumIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const selectedAlbum = albums[selectedAlbumIndex];

  return (
    <div className='rating-page'>
      <h2>Ratings Page</h2>
      {selectedAlbum ? (
        <>
          {/* Display the selected album */}
          <h3>{selectedAlbum.title}</h3>
          {/* You might also display other album details like artist, cover, etc. */}
          
          {/* Display the songs for the selected album */}
          <SongsList songs={selectedAlbum.songs} />

          {/* Provide buttons to navigate to the next and previous albums */}
          <button onClick={handlePrevAlbum} disabled={selectedAlbumIndex === 0}>
            Previous Album
          </button>
          <button onClick={handleNextAlbum} disabled={selectedAlbumIndex === albums.length - 1}>
            Next Album
          </button>
        </>
      ) : (
        <p>No albums to rate</p>
      )}
    </div>
  );
};

export default RatingPage;
