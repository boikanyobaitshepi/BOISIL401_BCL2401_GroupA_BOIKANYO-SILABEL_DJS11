import React from 'react';
import {BrowserRouter ,Routes, Route, } from 'react-router-dom';
import PodcastList from './pages/podcastList';
import PodcastDetail from './pages/podcastdetails';
// import Header from './components/Header'
import Layout from './components/Layout';
// import HomePage from './pages/HomePage';
import {Link, } from 'react-router-dom';
// import AudioPlayer from './components/AudioPlayer'
// import { Preview } from './pages/Preview';
// import Search from './Search';
// import { PodcastProvider } from './context/PodcastContext';

// import Preview from './pages/preview';
// import Search from './pages/search';
import Seasons from './pages/seasons';




function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>} >
        <Route index element={<PodcastList />} />
        <Route path='podcast/:id' element={<PodcastDetail />} />
        {/* <Route path='preview' element={<Preview />} /> */}
        </Route>
       
        
    </Routes>
  </BrowserRouter>
       
 )
}

export default App;
