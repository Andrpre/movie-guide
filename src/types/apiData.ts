export interface IMovie {
  imdbId: string;
  short: {
    name: string;
    image: string;
    aggregateRating: { ratingCount: number };
  };
}

export interface IMovies {
  description: {
    #IMDB_ID: string;
    #TITLE: string;
    #IMG_POSTER: string;
    #RANK: number;
  }[];
}
