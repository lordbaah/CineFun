const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

// console.log("API Key:", apiKey);
// console.log("API URL:", apiUrl);

// Function to fetch movies from the API
export const fetchMovies = async (apiEndpoint) => {
  // API request configuration
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };

  try {
    // Send the API request
    const response = await fetch(apiEndpoint, options);
    
    // Parse the JSON response
    const data = await response.json();
    // const text = await response.text();
    // console.log(text);
    
    // Return the array of movies from the 'results' property
    return data.results || [];
  } catch (error) {
    // Log any errors that occur during the API request
    console.error('Error fetching movies:', error);
    
    // Return an empty array if there's an error
    return [];
  }
};

// movie-page

export const fetchMoviesWithPagination = async (page = 1) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  };

  try {
    const response = await fetch(`${apiUrl}/movie/now_playing?language=en-US&page=${page}`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching movies:', err);
    throw err;
  }
};

