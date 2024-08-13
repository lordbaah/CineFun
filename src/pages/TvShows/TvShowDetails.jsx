import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchTvShowDetailsById,
  fetchTvShowVideos,
  fetchTvShowEpisodes,
  fetchRelatedTvShows,
  fetchTvShowCredits
} from '../../utils/tv-show-details';
import TvShowHero from './TvShowHero/TvShowHero';
import TvShowEpisode from './episode/TvShowEpisode';
import TVShowVideo from './TvShowVideo/TVShowVideo';
import RelatedTvShows from './Related/RelatedTvShows';

const TvShowDetails = () => {
  const { id } = useParams(); // Get the TV show ID from the URL params
  const [tvShow, setTvShow] = useState(null);
  const [videos, setVideos] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [relatedShows, setRelatedShows] = useState([]);
  const [credits, setCredits] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error state for handling errors

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching

      try {
        const [tvShowData, tvShowVideos, tvShowEpisodes, tvShowRelated, tvShowCredits] = await Promise.all([
          fetchTvShowDetailsById(id),
          fetchTvShowVideos(id),
          fetchTvShowEpisodes(id, 1), // Fetching episodes for season 1
          fetchRelatedTvShows(id),
          fetchTvShowCredits(id)
        ]);

        setTvShow(tvShowData);
        setVideos(tvShowVideos.results);
        setEpisodes(tvShowEpisodes.episodes);
        setRelatedShows(tvShowRelated.results);
        setCredits(tvShowCredits);
      } catch (error) {
        console.error('Error fetching TV show details:', error);
        setError('Failed to fetch TV show details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!tvShow) {
    return <div>TV show not found</div>;
  }

  return (
    <div>
      <TvShowHero tvShow={tvShow}/>
      <TVShowVideo videos={videos}/>
      <RelatedTvShows relatedShows={relatedShows}/>
      {/* <TvShowEpisode episodes={episodes}/> */}

      {/* <h2>Credits</h2>
      <ul>
        {credits.cast && credits.cast.map((castMember) => (
          <li key={castMember.id}>{castMember.name} as {castMember.character}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default TvShowDetails;
