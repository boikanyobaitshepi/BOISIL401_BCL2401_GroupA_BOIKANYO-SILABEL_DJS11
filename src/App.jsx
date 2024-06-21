import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PodcastList from './pages/podcastlist';
import PodcastDetail from './pages/podcastdetails';
// import Header from './components/Header'
import Layout from './components/Layout';
// import NavBar from './components/NavBar';
// import Search from '../components/search';
import Seasons from './pages/seasons';
import About from './pages/About';
import Search from "./components/search";

// import SignOut from './pages/signout';
// import Login from './pages/login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<PodcastList />} />
          <Route path='podcast/:id' element={<PodcastDetail />} />
          <Route path='about' element={<About />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
