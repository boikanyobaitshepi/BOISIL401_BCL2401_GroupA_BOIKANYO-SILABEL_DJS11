import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import PodcastDetail from './pages/PodcastDetail';
import Podcasts from './pages/Podcasts';
import Layout from './components/Layout';
import About from './pages/About';
import Favorites from './components/Favorites';


function App() {

  // const App = () => {
  //   const [favorites, setFavorites] = useState([]);
  
  //   useEffect(() => {
  //     const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  //     setFavorites(savedFavorites);
  //   }, []);
  
  //   useEffect(() => {
  //     localStorage.setItem('favorites', JSON.stringify(favorites));
  //   }, [favorites]);
  
  //   const addFavorite = (podcast) => {
  //     setFavorites([...favorites, podcast]);
  //   };
  
  //   const removeFavorite = (podcastId) => {
  //     setFavorites(favorites.filter(p => p.id !== podcastId));
  //   };
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Podcasts />} />
          <Route path='show/:id' element={<PodcastDetail />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='podcasts/:id' element={<PodcastDetail />} /> */}
          {/* <Route path="/" element={<Podcasts addFavorite={addFavorite} removeFavorite={removeFavorite} favorites={favorites} />} /> */}
        {/* <Route path="/podcasts/:id" element={<PodcastDetail addFavorite={addFavorite} removeFavorite={removeFavorite} favorites={favorites} />} /> */}
        <Route path="/favorites" element={<Favorites/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}


export default App;
