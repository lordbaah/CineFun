import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../../components/TvShowCard/Tvshowcard';
import { fetchTvShowsWithPagination } from '../../utils/tv-shows';
// import './MovieList.css';

const TvShow = () => {
  const location = useLocation();
  const navigate = useNavigate();


  const [TvShows, setTvShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(parseInt(new URLSearchParams(location.search).get('page')) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const { results, total_pages } = await fetchTvShowsWithPagination(currentPage);
        setTvShows(results);
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
      navigate(`/tv-shows?page=${nextPage}`);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      setCurrentPage(prevPage);
      navigate(`/tv-shows?page=${prevPage}`);
    }
  };


  return (
      <section>
        <div className="container">
          <h1>Tv Shows</h1>
          {loading ? (
          <p>Loading...</p>
          ) : (
          <div className="card-container">
            {TvShows.map((show) => (
              <Card
                key={show.id}
                card_img={show.poster_path ? `https://image.tmdb.org/t/p/w500${show.poster_path}` : 'https://placehold.co/200x300?text=No+Image'}
                card_desc={show.name}
                tvId={show.id}
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

export default TvShow;
