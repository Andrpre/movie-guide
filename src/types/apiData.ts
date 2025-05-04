export interface IMovie {
  imdbId: string;
  short: {
    name: string;
    image: string;
    aggregateRating: { ratingCount: number; ratingValue: number };
    description?: string;
    datePublished?: string;
    duration?: string;
    genre?: string[];
    "@type"?: string;
    review?: {
      name: string;
      dateCreated: string;
      reviewBody: string;
    };
  };
}

export interface IMovieWithUserName extends IMovie {
  userName: string | null;
}

export type IMovieDescription = {
  "#IMDB_ID": string;
  "#TITLE": string;
  "#IMG_POSTER": string;
  "#RANK": number;
};

export type IMovieDescriptionWithUserName = IMovieDescription & {
  userName: string | null;
};

export interface IMovies {
  description: IMovieDescription[];
}

export interface IMoviesWithUserName {
  description: IMovieDescriptionWithUserName[];
}
