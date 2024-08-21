import React from 'react';
import './modern-normalize.css'
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home_Page from './pages/Home/Home';
import Detail_Page from './pages/Detail/Detail';
import Movie_Page from './pages/Movie/MovieList';
import Tv_Show_Page from './pages/TvShows/TvShow';
import Anime_Page from './pages/Anime/Anime';
import TvShowDetails from './pages/TvShows/TvShowDetails';

const App = () => {
  // console.log('API Key:', import.meta.env.VITE_TMDB_API_KEY); // Log to verify the key is present

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home_Page />} />
            <Route path="/movie-details/:id" element={<Detail_Page />} />
            <Route path="/movies/:page?" element={<Movie_Page />} />
            <Route path="/tv-shows" element={<Tv_Show_Page />} />
            {/* <Route path="/anime" element={<Anime_Page />} /> */}
            <Route path='/tv-show-details/:id' element={<TvShowDetails/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
