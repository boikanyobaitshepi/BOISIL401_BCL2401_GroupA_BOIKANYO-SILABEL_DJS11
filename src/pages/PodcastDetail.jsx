import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PodcastDetail = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPodcast(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!podcast) {
    return <p>Podcast not found.</p>;
  }

  return (
    <div className="card">
      <img src={podcast.image} alt={podcast.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{podcast.title}</h5>
        <p className="card-text">{podcast.description}</p>
        <Link to={`/podcasts/${podcast.id}`}>Podcast Details</Link>
      </div>
    </div>
  );
};

export default PodcastDetail;
