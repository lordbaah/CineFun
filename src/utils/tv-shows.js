const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const fetchTvShowsWithPagination = async (page = 1) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    };
  
    try {
      const response = await fetch(`${apiUrl}/tv/popular?language=en-US&page=${page}`, options);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching movies:', err);
      throw err;
    }
};