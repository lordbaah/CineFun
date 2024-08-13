import React from 'react';
import { Link } from 'react-router-dom';
import './MovieDetailSection.css';

const MovieDetailSection = ({ movie }) => {
  const backgroundImageUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const posterImageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  const starRating = Math.round(movie.vote_average / 2); // Rating is out of 10, so divide by 2 for a 5-star system

  return (
    <section 
      className="movie-detail-section"
      style={{ 
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className='movie-content'>
          <Link to="/" style={{ color: '#fff', textDecoration: 'underline' }}>Go Back</Link>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <ul>
            <p>Genre:</p>
            {movie.genres && movie.genres.map((genre) => (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            ))}
          </ul>
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <span key={index} className={index <= starRating ? "on" : "off"}>
                  &#9733;
                </span>
              );
            })}
            <span className="rating-value">({movie.vote_average}/10)</span>
          </div>
        </div>

        <div className="movie-img">
          <img src={posterImageUrl} alt={`${movie.title} Poster`} />
        </div>
      </div>
    </section>
  );
};

export default MovieDetailSection;
