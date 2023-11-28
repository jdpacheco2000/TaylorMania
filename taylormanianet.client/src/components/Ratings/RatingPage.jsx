import React, { useState } from 'react';
import AlbumsList from '../Albums/AlbumList';
import SongsList from '../Songs/SongsList';

const RatingPage = ({ albums }) => {
  const [selectedAlbumIndex, setSelectedAlbumIndex] = useState(0);

  const handleNextAlbum = () => {
    setSelectedAlbumIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevAlbum = () => {
    setSelectedAlbumIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const selectedAlbum = albums[selectedAlbumIndex];

  return (
    <div className="container mt-4">
      <h2 className="mb-4" style={{ fontSize: '2.5rem', font: 'revert' }}>Ratings Page</h2>

      {selectedAlbum ? (
        <div className="card">
          <div className="card-body" style={{ maxHeight: '459px', overflowY: 'auto' }}>
            <h3 className="card-title" style={{ color: selectedAlbum.color }}>{selectedAlbum.title}</h3>
            {/* Additional album details can go here */}

            <div className="d-flex flex-row">
              <SongsList album={selectedAlbum} songs={selectedAlbum.songs} />
              {/* Add other elements as needed */}
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <button
              className="btn btn-secondary"
              onClick={handlePrevAlbum}
              disabled={selectedAlbumIndex === 0}
            >
              Previous Album
            </button>
            <button
              className="btn btn-secondary"
              onClick={handleNextAlbum}
              disabled={selectedAlbumIndex === albums.length - 1}
            >
              Next Album
            </button>
          </div>
        </div>
      ) : (
        <p>No albums to rate</p>
      )}
    </div>
  );
};

export default RatingPage;
