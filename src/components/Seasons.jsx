// Seasons.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Episodes from './Episodes';
import './Seasons.css';

const Seasons = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [seasonsVisibility, setSeasonsVisibility] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPodcast(data);
        initializeSeasonsVisibility(data.seasons);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching podcast:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const initializeSeasonsVisibility = (seasons) => {
    const initialVisibility = {};
    seasons.forEach(season => {
      initialVisibility[season.seasonNumber] = false;
    });
    setSeasonsVisibility(initialVisibility);
  };

  const toggleSeason = (seasonNumber) => {
    setSeasonsVisibility(prev => ({
      ...prev,
      [seasonNumber]: !prev[seasonNumber]
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!podcast) {
    return <div>Podcast not found.</div>;
  }

  return (
    <div className="podcast-details">
      <Link to="/podcasts/" className="back-link">Back to Podcasts</Link>
      <h1>{podcast.title}</h1>
      <img src={podcast.image} alt={podcast.title} className="podcast-image" />
      <p className="podcast-description">{podcast.description}</p>

      {podcast.seasons.map(season => (
        <div key={season.seasonNumber} className="season">
          <h2 onClick={() => toggleSeason(season.seasonNumber)} className="season-title">
            {season.title}
          </h2>
          {seasonsVisibility[season.seasonNumber] && (
            <div className="season-content">
              {season.image && (
                <img src={season.image} alt={`Season ${season.seasonNumber}`} className="season-image" />
              )}
              <Episodes episodes={season.episodes} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Seasons;
