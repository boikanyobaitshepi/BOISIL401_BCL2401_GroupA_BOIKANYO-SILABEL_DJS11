import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import PodcastDetails from './pages/PodcastDetail';
import Podcasts from './pages/Podcasts';
import Layout from './components/Layout';
import About from './pages/About';
import Favorites from './components/Favorites';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Podcasts />} />
          <Route path='podcasts/:id' element={<PodcastDetails />} />
          <Route path='/about' element={<About />} />
        <Route path="/favorites" element={<Favorites/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}


export default App;
