import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import PodcastDetail from './pages/PodcastDetail';
import Podcasts from './pages/Podcasts';
import Layout from './components/Layout';
import About from './pages/About';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Podcasts />} />
          <Route path='show/:id' element={<PodcastDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='podcasts/:id' element={<PodcastDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
