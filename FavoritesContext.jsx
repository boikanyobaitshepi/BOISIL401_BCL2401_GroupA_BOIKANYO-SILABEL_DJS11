
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const FavoritesContext = createContext();

// export const useFavorites = () => useContext(FavoritesContext);

// export const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState(() => {
//     const storedFavorites = localStorage.getItem('favorites');
//     return storedFavorites ? JSON.parse(storedFavorites) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('favorites', JSON.stringify(favorites));
//   }, [favorites]);

//   const addFavorite = (podcast) => {
//     setFavorites((prevFavorites) => [...prevFavorites, podcast]);
//   };

//   const removeFavorite = (podcastId) => {
//     setFavorites((prevFavorites) => 
//       prevFavorites.filter((fav) => fav.id !== podcastId)
//     );
//   };

//   const isFavorite = (podcastId) => {
//     return favorites.some((fav) => fav.id === podcastId);
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };