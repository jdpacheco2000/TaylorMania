import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const SongsList = ({ album, songs }) => {
  const [songRatings, setSongRatings] = useState({});

  const handleRatingChange = (songId, rating) => {
    setSongRatings((prevRatings) => ({
      ...prevRatings,
      [songId]: rating,
    }));

    // You would typically make an HTTP request here to update the server/database
    // Example using axios:
    // axios.post('/api/updateSongRating', { songId, rating })
    //   .then(response => console.log(response))
    //   .catch(error => console.error(error));
  };

  return (
    <ul className="songs-list">
      {songs.map((song) => (
        <li key={song.id}>
          {song.title ? (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="col">
                <span className="badge" style={{ backgroundColor: album.color, color: '#ffffff' }}>{song.title}</span>
                {/* Add your song details here */}
              </div>
              <div className="col" style={{ position: 'relative', width: '300px' }}>
                
                <Form.Range
                  value={songRatings[song.id] || 0}
                  onChange={(e) => handleRatingChange(song.id, parseInt(e.target.value, 10))}
                  min={0}
                  max={10}
                  step={1}
                  style={{ marginLeft: '20px' , backgroundColor: '#999999'}}
                />
                <span style={{ position: 'absolute', right: '0px', top: '0%', transform: 'translateY(-80%)', zIndex: '1' }}>
                  {songRatings[song.id]}
                </span>
              </div>
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
