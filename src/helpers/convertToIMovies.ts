import { IMovie, IMovies, IMoviesWithUserName, IMovieWithUserName } from "../types/apiData";

export function convertToIMovies(movies: IMovieWithUserName[]): IMoviesWithUserName {
  return {
    description: movies.map((movie) => ({
      "#IMDB_ID": movie.imdbId,
      "#TITLE": movie.short.name,
      "#IMG_POSTER": movie.short.image,
      "#RANK": movie.short.aggregateRating.ratingCount,
      userName: movie.userName,
    })),
  };
}
