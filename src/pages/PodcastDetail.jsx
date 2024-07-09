import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Episodes from '../components/Episodes';

const PodcastDetails = ({ addFavorite, removeFavorite, favorites }) => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPodcastDetails = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        const data = await response.json();
        setPodcast(data);
        const episodesResponse = await fetch(`https://podcast-api.netlify.app/id/${id}/episodes`);
        const episodesData = await episodesResponse.json();
        setEpisodes(episodesData);
      } catch (error) {
        console.error('Error fetching podcast details or episodes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcastDetails();
  }, [id]);

  const isFavorite = favorites.some(fav => fav.id === id);

  if (loading) return <div>Loading...</div>;
  if (!podcast) return <div>Podcast not found</div>;

  return (
    <div>
      <h1>{podcast.title}</h1>
      <img src={podcast.image} alt={podcast.title} />
      <p>{podcast.description}</p>
      <button onClick={() => isFavorite ? removeFavorite(id) : addFavorite(podcast)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      <Episodes episodes={episodes} />
    </div>
  );
};

export default PodcastDetails;
