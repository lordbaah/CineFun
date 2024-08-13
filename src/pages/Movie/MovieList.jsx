import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../../components/CardsSlider/Card/Card';
import { fetchMoviesWithPagination } from '../../utils/fetch-movies';
import './MovieList.css';

const MovieList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(parseInt(new URLSearchParams(location.search).get('page')) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const { results, total_pages } = await fetchMoviesWithPagination(currentPage);
        setMovies(results);
        setTotalPages(total_pages);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      navigate(`/movies?page=${nextPage}`);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      navigate(`/movies?page=${prevPage}`);
    }
  };

  return (
    <section>
      <div className="container">
        <h1>Movies</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="card-container">
            {movies.map((movie) => (
              <Card
                key={movie.id}
                card_img={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://placehold.co/200x300?text=No+Image'}
                card_desc={movie.title}
                movieId={movie.id}
              />
            ))}
          </div>
        )}
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      </div>
    </section>
  );
};

export default MovieList;
