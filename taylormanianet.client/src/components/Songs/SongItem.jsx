// SongItem.js
import React from 'react';

const SongItem = ({ song, rating, onRateSong }) => {
  return (
    <li className='song-item'>
      {song.title} - <input type="number" value={rating || ''} onChange={(e) => onRateSong(Number(e.target.value))} />
    </li>
  );
};

export default SongItem;
