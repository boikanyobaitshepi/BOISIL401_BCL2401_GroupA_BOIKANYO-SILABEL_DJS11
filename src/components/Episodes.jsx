// Episodes.jsx
import React from 'react';

const Episodes = ({ episodes }) => {
  return (
    <div>
      {episodes.map((episode, index) => (
        <div key={index}>
          <h2>{episode.title}</h2>
          <p>{episode.description}</p>
          <p>
            <audio controls src={episode.audio_url} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default Episodes;
