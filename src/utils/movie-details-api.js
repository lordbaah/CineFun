const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDhhNjg0Yzc1MzBiMTM5MTExZTQ2NWVlNTUyYzI0OCIsIm5iZiI6MTcyMjU4NjMwMi44MDk1NzEsInN1YiI6IjY2NmU5ZGVlMjY2OTUxNjQ1NDhjOTUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xRVzCdKOSqGTWoSGCmfOhFYecepGAFwezi32TMYzoeg';

const fetchMovieDetails = async (endpoint) => {
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

export const fetchMovieDetailsById = (id) => fetchMovieDetails(`https://api.themoviedb.org/3/movie/${id}`);
export const fetchMovieVideos = (id) => fetchMovieDetails(`https://api.themoviedb.org/3/movie/${id}/videos`);
export const fetchRelatedMovies = (id) => fetchMovieDetails(`https://api.themoviedb.org/3/movie/${id}/recommendations`);
export const fetchMovieCredits = (id) => fetchMovieDetails(`https://api.themoviedb.org/3/movie/${id}/credits`);
