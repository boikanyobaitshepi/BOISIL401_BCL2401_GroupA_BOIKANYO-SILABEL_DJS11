import React from 'react';
import {BrowserRouter ,Routes, Route, } from 'react-router-dom';
import PodcastList from './pages/podcastlist';
import PodcastDetail from './pages/podcastdetails';
// import Header from './components/Header'
import Layout from './components/Layout';

import {Link, } from 'react-router-dom';
import AudioPlayer from './components/AudioPlayer'






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
