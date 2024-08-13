import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import { fetchMovies } from '../../utils/fetch-movies';

const Hero = ({ apiEndpoint }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await fetchMovies(apiEndpoint);
      setMovie(movies[0]);
      // console.log(movies[0]);
    };

    loadMovies();
  }, [apiEndpoint]);

  if (!movie) return <div>Loading...</div>;

  return (
    <section className="hero-section">
      <div className="hero-img-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="hero-img"
        />
      </div>

      <div className="hero-content container">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <div>
          <Link className='btn' to={`/movie-details/${movie.id}`}>Watch Now</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
