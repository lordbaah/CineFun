import React from 'react';
import './Card.css';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Card component that displays individual movie information
const Card = ({ card_img, card_desc, movieId }) => {

  return (
    <Link to={`/movie-details/${movieId}`} className='card'>
      <div className="card-img-wrap">
        <LazyLoadImage
          src={card_img ? card_img : 'https://placehold.co/200x300?text=No+Image'}
          alt={card_desc}
          effect="blur"
          placeholderSrc="https://placehold.co/200x300?text=Loading"
          width="100%"
          height="100%"
        />
      </div>
      <p className='card-description'>{card_desc}</p>
    </Link>
  );
};

export default Card;