export interface IMovie {
  imdbId: string;
  short: {
    name: string;
    image: string;
    aggregateRating: { ratingCount: number };
  };
}

export interface IMovieWithUserName {
  imdbId: string;
  short: {
    name: string;
    image: string;
    aggregateRating: { ratingCount: number };
  };
  userName: string | null;
}

export interface IMovies {
  description: {
    "#IMDB_ID": string;
    "#TITLE": string;
    "#IMG_POSTER": string;
    "#RANK": number;
  }[];
}

export interface IMoviesWithUserName {
  description: {
    "#IMDB_ID": string;
    "#TITLE": string;
    "#IMG_POSTER": string;
    "#RANK": number;
    userName: string | null;
  }[];
}
