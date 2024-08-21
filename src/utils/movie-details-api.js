const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

const fetchMovieDetails = async (endpoint) => {
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

export const fetchMovieDetailsById = (id) => fetchMovieDetails(`${apiUrl}/movie/${id}`);
export const fetchMovieVideos = (id) => fetchMovieDetails(`${apiUrl}/movie/${id}/videos`);
export const fetchRelatedMovies = (id) => fetchMovieDetails(`${apiUrl}/movie/${id}/recommendations`);
export const fetchMovieCredits = (id) => fetchMovieDetails(`${apiUrl}/movie/${id}/credits`);
