import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PodcastList from './pages/podcastlist';
import PodcastDetail from './pages/podcastdetails';
import Podcast from './pages/podcast';
// import Header from './components/Header'
import Layout from './components/Layout';
// import NavBar from './components/NavBar';
// import Search from '../components/search';
import Seasons from './pages/seasons';
import About from './pages/About';
import Search from "./components/search";

// import SignOut from './pages/signout';
// import Login from './pages/login';
import { onAuthStateChanged } from 'firebase/auth';
// import { auth, db } from './firebase';
import { doc, onSnapshot } from 'firebase/firestore';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<PodcastList />} />
          <Route path='podcasts/:id' element={<PodcastDetail />} />
          <Route path='about' element={<About />} />
          <Route path='podcast' element={<PodcastList />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
