// // Favorites.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useFavorites } from '../FavoritesContext';

// const Favorites = () => {
//   const { favorites } = useFavorites();

//   if (favorites.length === 0) return <p>No favorites added yet.</p>;

//   return (
//     <div>
//       <h2>Favorites</h2>
//       {favorites.map(podcast => (
//         <div key={podcast.id}>
//           <Link to={`/podcasts/${podcast.id}`}>
//             <h3>{podcast.title}</h3>
//             <img src={podcast.image} alt={podcast.title} />
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Favorites;