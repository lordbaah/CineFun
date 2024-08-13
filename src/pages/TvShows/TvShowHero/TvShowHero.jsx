import React from 'react'
import '../../Detail/movies/MovieDetailSection'

const TvShowHero = ({tvShow}) => {
    const backgroundImageUrl = `https://image.tmdb.org/t/p/original${tvShow.backdrop_path}`;
    const posterImageUrl = `https://image.tmdb.org/t/p/w300${tvShow.poster_path}`;
    const starRating = Math.round(tvShow.vote_average / 2); // Rating is out of 10, so divide by 2 for a 5-star system
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
      <div className='tvShow-content'>
        <h1>{tvShow.name}</h1>
        <p>{tvShow.overview}</p>
        
        <ul>
          <p>Genre:</p>
          {tvShow.genres && tvShow.genres.map((genre) => (
            <li key={genre.id}>
              <p>{genre.name}</p>
            </li>
          ))}
        </ul>

        <p>Number of Seasons: {tvShow.number_of_seasons}</p>
        <p>Number of Episodes: {tvShow.number_of_episodes}</p>

        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <span key={index} className={index <= starRating ? "on" : "off"}>
                &#9733;
              </span>
            );
          })}
          <span className="rating-value">({tvShow.vote_average}/10)</span>
        </div>
      </div>

      <div className="movie-img">
        <img src={posterImageUrl} alt={`${tvShow.title} Poster`} />
      </div>
    </div>
  </section>
  )
}

export default TvShowHero
