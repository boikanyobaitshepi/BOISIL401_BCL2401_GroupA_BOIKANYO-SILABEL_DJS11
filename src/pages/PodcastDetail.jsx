// PodcastDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Episodes from '../components/Episodes';
// import { useFavorites } from '../../FavoritesContext';

const PodcastDetails = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  // const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const fetchPodcastDetails = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        const data = await response.json();
        setPodcast(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching podcast details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcastDetails();
  }, [id]);

  const handleFavoriteToggle = () => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite({
        id: podcast.id,
        title: podcast.title,
        image: podcast.image,
      });
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!podcast) return <div>Podcast not found</div>;

  return (
    <div>
      <h1>{podcast.title}</h1>
      <img src={podcast.image} alt={podcast.title} />
      <button onClick={handleFavoriteToggle}>
        {/* {isFavorite(id) ? 'Remove from Favorites' : 'Add to Favorites'} */}
      </button>
      <p>{podcast.description}</p>
      
      {podcast.seasons.map((season) => (
        <div key={season.season}>
          <h2>{season.title}</h2>
          <Episodes episodes={season.episodes} />
        </div>
      ))}
    </div>
  );
};

export default PodcastDetails;