export async function getLatestMovies() {
  const API_KEY = "3f216655cf8a85c869f0ab1c05c81842";
  const LATEST_MOVIES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  

  const rawData = await fetch(LATEST_MOVIES);
  const json = await rawData.json();

  const { results } = json;

  return results.map((item) => {
    const { id,overview, release_date, title, poster_path } = item;

     const image = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return {
      id,
      overview,
      release_date,
      title,
      image,
    };
  });
}


export async function getGameDetails(slug) {
  const GAME_DETAILS = `https://internal-prod.apigee.fandom.net/v1/xapi/composer/metacritic/pages/games/${slug}/web?&apiKey=1MOZgmNFxvmljaQR1X9KAij9Mo4xAY3u`;

  const rawData = await fetch(GAME_DETAILS);
  const json = await rawData.json();

  const { components } = json;
  const { title, description, criticScoreSummary, images } = components[0];
  const { score } = criticScoreSummary;

  // get the card image
  const cardImage = images.find((image) => image.typeName === "cardImage");
  const { bucketType, bucketPath } = cardImage;
  const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

  const rawReviews = components[3].data.items;

  // get the reviews
  const reviews = rawReviews.map((review) => {
    const { quote, score, date, publicationName, author } = review;
    return { quote, score, date, publicationName, author };
  });

  return {
    img,
    title,
    slug,
    description,
    score,
    reviews,
  };
}