// Function to fetch movies from the API
export const fetchMovies = async (apiEndpoint) => {
  // API request configuration
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDhhNjg0Yzc1MzBiMTM5MTExZTQ2NWVlNTUyYzI0OCIsIm5iZiI6MTcyMjU4NjMwMi44MDk1NzEsInN1YiI6IjY2NmU5ZGVlMjY2OTUxNjQ1NDhjOTUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xRVzCdKOSqGTWoSGCmfOhFYecepGAFwezi32TMYzoeg'
    }
  };

  try {
    // Send the API request
    const response = await fetch(apiEndpoint, options);
    
    // Parse the JSON response
    const data = await response.json();
    
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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDhhNjg0Yzc1MzBiMTM5MTExZTQ2NWVlNTUyYzI0OCIsIm5iZiI6MTcyMzQ5MTA2OC4xMjAzOTUsInN1YiI6IjY2NmU5ZGVlMjY2OTUxNjQ1NDhjOTUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AsZC6AOOOqFVAxQTnv2dUQerJ3zBexMU-xZ2g8TZebk'
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching movies:', err);
    throw err;
  }
};

