// AlbumsList.js
import React from 'react';
import AlbumItem from './AlbumItem';

const AlbumsList = ({ albums, onSelectAlbum }) => {
  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map((album) => (
          <AlbumItem key={album.id} album={album} onSelectAlbum={onSelectAlbum} />
        ))}
      </ul>
    </div>
  );
};

export default AlbumsList;
