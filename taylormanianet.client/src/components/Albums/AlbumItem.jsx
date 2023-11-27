// AlbumItem.js
import React from 'react';

const AlbumItem = ({ album, onSelectAlbum }) => {
  const handleClick = () => {
    onSelectAlbum(album.id);
  };

  return (
    <li onClick={handleClick}>
      {album.title} - {album.artist}
    </li>
  );
};

export default AlbumItem;
