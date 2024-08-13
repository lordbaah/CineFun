export const fetchTvShowsWithPagination = async (page = 1) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDhhNjg0Yzc1MzBiMTM5MTExZTQ2NWVlNTUyYzI0OCIsIm5iZiI6MTcyMzQ5MTA2OC4xMjAzOTUsInN1YiI6IjY2NmU5ZGVlMjY2OTUxNjQ1NDhjOTUwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AsZC6AOOOqFVAxQTnv2dUQerJ3zBexMU-xZ2g8TZebk'
      }
    };
  
    try {
      const response = await fetch(`https://api.themoviedb.org/3/tv/popular?language=en-US&page=${page}`, options);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Error fetching movies:', err);
      throw err;
    }
};