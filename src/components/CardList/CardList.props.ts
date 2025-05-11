import { IMovies, IMoviesWithUserName } from "../../types/apiData";

export interface CardListProps {
  data: IMovies | IMoviesWithUserName;
}
