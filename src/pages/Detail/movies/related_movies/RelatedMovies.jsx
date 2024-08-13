import Card from '../../../../components/CardsSlider/Card/Card';
import './RelatedMovies.css'
// import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const RelatedMoviesSection = ({ relatedMovies }) => (
  <section className='section'>
    <div className="container related-movies">
      <h2>Recommended Movies</h2>
      <div className="related-movies-list">
        {relatedMovies.slice(0, 10).map((relatedMovie) => (
          <Card
          key={relatedMovie.id}
          card_img={relatedMovie.poster_path ? `https://image.tmdb.org/t/p/w500${relatedMovie.poster_path}` : 'https://placehold.co/200x300?text=No+Image'}
          card_desc={relatedMovie.title}
          movieId={relatedMovie.id}
          />
        ))}
      </div>
    </div>
  </section>
);

export default RelatedMoviesSection;
