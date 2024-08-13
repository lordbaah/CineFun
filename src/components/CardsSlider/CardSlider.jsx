
import React, { useEffect, useState, useRef } from 'react';
import Slider from "react-slick";
import './CardSlider.css';
import Card from './Card/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { fetchMovies } from '../../utils/fetch-movies';
import { settings } from './sliderSettings';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// CardSlider component that displays a slider of movie cards
const CardSlider = ({ title, apiEndpoint }) => {
  // State variables
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Reference to the slider component
  const sliderRef = useRef(null);

  // Effect to fetch movies when the component mounts or apiEndpoint changes
  useEffect(() => {
    const loadMovies = async () => {
      try {
        const movies = await fetchMovies(apiEndpoint);
        setCardsData(movies);
        setError(null); // Reset error state if fetch is successful
      } catch (error) {
        setError('Error fetching movies. Please try again later.');
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [apiEndpoint]);

  // Functions to handle slider navigation
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section className='card-slider-section home-section'>
      <div className="container">
        <div className='slider-section-head'>
          <h2>{title}</h2>
          <div className="slider-arrows">
            <FaArrowLeft className="slider-arrow-prev" onClick={handlePrev} />
            <FaArrowRight className="slider-arrow-next" onClick={handleNext} />
          </div>
        </div>
        {error && <div className="error-message">{error}</div>}
        {loading ? (
          // Display skeleton loading while fetching data
          <Slider {...settings} className="card_slide_container" ref={sliderRef}>
            {[...Array(5)].map((_, index) => (
              <div key={index} className="card">
                <Skeleton height={300} />
                <Skeleton width={`60%`} style={{ marginTop: '10px' }} />
              </div>
            ))}
          </Slider>
        ) : (
          // Display movie cards once data is loaded
          <Slider {...settings} className="card_slide_container" ref={sliderRef}>
            {cardsData.map((card, index) => (
              <Card
                key={index}
                card_img={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
                card_desc={card.title}
                movieId={card.id}
              />
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default CardSlider;