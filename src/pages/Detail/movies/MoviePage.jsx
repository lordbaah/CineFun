import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetailsById, fetchMovieVideos, fetchRelatedMovies, fetchMovieCredits } from '../../../utils/movie-details-api';
import MovieDetailSection from './MovieDetailSection';
import VideoSection from './videos/VideoSection';
import RelatedMoviesSection from './related_movies/RelatedMovies';
import CrewSection from './crew/CrewSection';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [crew, setCrew] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const [movieData, videosData, relatedMoviesData, creditsData] = await Promise.all([
          fetchMovieDetailsById(id),
          fetchMovieVideos(id),
          fetchRelatedMovies(id),
          fetchMovieCredits(id)
        ]);

        setMovie(movieData);
        setVideos(videosData.results);
        setRelatedMovies(relatedMoviesData.results);
        setCrew(creditsData.crew);
      } catch (err) {
        console.error(err);
        setError('Error fetching movie details');
      }
    };

    fetchMovieData();
  }, [id]);

  if (error) return <div>{error}</div>;
  if (!movie) return <div>Loading...</div>;

  return (
    <>
      <MovieDetailSection movie={movie} />
      <VideoSection videos={videos} />
      <RelatedMoviesSection relatedMovies={relatedMovies} />
      {/* <CrewSection crew={crew} /> */}
    </>
  );
}

export default MoviePage;
