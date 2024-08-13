const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDhhNjg0Yzc1MzBiMTM5MTExZTQ2NWVlNTUyYzI0OCIsIm5iZiI6MTcyMjU4NjMwMi44MDk1NzEsInN1YiI6IjY2NmU5ZGVlMjY2OTUxNjQ1NDhjOTUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xRVzCdKOSqGTWoSGCmfOhFYecepGAFwezi32TMYzoeg';

const fetchTvShowDetails = async (endpoint) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };

  try {
    const response = await fetch(endpoint, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchTvShowDetailsById = (id) => fetchTvShowDetails(`https://api.themoviedb.org/3/tv/${id}`);
export const fetchTvShowVideos = (id) => fetchTvShowDetails(`https://api.themoviedb.org/3/tv/${id}/videos`);
export const fetchTvShowEpisodes = (id, seasonNumber) => fetchTvShowDetails(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNumber}`);
export const fetchRelatedTvShows = (id) => fetchTvShowDetails(`https://api.themoviedb.org/3/tv/${id}/recommendations`);
export const fetchTvShowCredits = (id) => fetchTvShowDetails(`https://api.themoviedb.org/3/tv/${id}/credits`);
