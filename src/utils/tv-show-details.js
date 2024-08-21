const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

const fetchTvShowDetails = async (endpoint) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
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

export const fetchTvShowDetailsById = (id) => fetchTvShowDetails(`${apiUrl}/tv/${id}`);
export const fetchTvShowVideos = (id) => fetchTvShowDetails(`${apiUrl}/tv/${id}/videos`);
export const fetchTvShowEpisodes = (id, seasonNumber) => fetchTvShowDetails(`${apiUrl}/tv/${id}/season/${seasonNumber}`);
export const fetchRelatedTvShows = (id) => fetchTvShowDetails(`${apiUrl}/tv/${id}/recommendations`);
export const fetchTvShowCredits = (id) => fetchTvShowDetails(`${apiUrl}/tv/${id}/credits`);
