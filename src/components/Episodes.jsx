// Episodes.jsx
import React from 'react';
const Episodes = ({ episodes }) => {
  return (
    <div>
      {episodes.map((episode, index) => (
        <div key={index}>
          <h3>{episode.title}</h3>
          <p>{episode.description}</p>
          <audio controls src={episode.file}>
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default Episodes;