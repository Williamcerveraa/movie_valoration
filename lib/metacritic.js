export async function getLatestMovies() {
  const API_KEY = "3f216655cf8a85c869f0ab1c05c81842";
  const LATEST_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  

  const rawData = await fetch(LATEST_MOVIES);
  const json = await rawData.json();

  const { results } = json;

  return results.map((item) => {
    const { id,overview, release_date, title, poster_path, vote_average } = item;

     const image = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return {
      id,
      overview,
      release_date,
      title,
      image,
      vote_average,
    };
  });
}


export async function getMovieDetails(movie_id) {
    const API_KEY = "3f216655cf8a85c869f0ab1c05c81842";
  const MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}`;

  const rawData = await fetch(MOVIE_DETAILS);
  const json = await rawData.json();

  const {
    id,
    overview,
    release_date,
    title,
    poster_path,
    vote_average,
  } = json;

  const image = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return {
    id,
    overview,
    release_date,
    title,
    image,
    vote_average,
  };
}
