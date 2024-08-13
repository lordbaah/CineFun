import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import CardSlider from '../../components/CardsSlider/CardSlider';

// Home component that displays the main page content
const Home = () => {
  return (
    <>
      <Hero
        apiEndpoint='https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
      />
      <CardSlider
        title='Trending Movies'
        apiEndpoint='https://api.themoviedb.org/3/trending/movie/week'
      />
      <CardSlider
        title='Upcoming Movies'
        apiEndpoint='https://api.themoviedb.org/3/movie/upcoming'
      />
      <CardSlider
        title='Action Movies'
        apiEndpoint='https://api.themoviedb.org/3/discover/movie?with_genres=28'
      />
      {/* <CardSlider
        title='Science Fiction'
        apiEndpoint='https://api.themoviedb.org/3/discover/movie?with_genres=878'
      /> */}
      <CardSlider
        title='Animation'
        apiEndpoint='https://api.themoviedb.org/3/discover/movie?with_genres=16'
      />
    </>
  );
};

export default Home;