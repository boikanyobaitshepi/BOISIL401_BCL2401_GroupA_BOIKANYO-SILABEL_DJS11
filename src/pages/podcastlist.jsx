
import React from 'react';
import { Link } from 'react-router-dom';

const PodcastList = ({ podcasts }) => {
  return (
    <div className="row">
      {podcasts.map((podcast) => (
        <div key={podcast.id} className="col-md-3 mb-4">
          <div className="card">
            <img src={podcast.image} alt={podcast.title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{podcast.title}</h5>
              <p className="card-text">{podcast.description.slice(0, 100)}...</p>
              <Link to={`/podcast/${podcast.id}`} className="btn btn-primary">Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PodcastList;
