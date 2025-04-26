import { FC } from "react";
import { useSelector } from "../../store/hook";
import { selectFavorites } from "../../store/slices/favorites.slice";
import { useContextSafe } from "../../hooks/useContextSafe/useContextSafe";
import { UserContext } from "../../context/user.context";

import { convertToIMovies } from "../../helpers/convertToIMovies";

import Title from "../../components/Title/Title";
import CardList from "../../components/CardList/CardList";

const FavoritesPage: FC = () => {
  const { activeUserName } = useContextSafe(UserContext);
  const favorites = useSelector(selectFavorites);
  const favoritesMovies = convertToIMovies(favorites);

  const personalFavoriteMovies = favoritesMovies.description.filter(
    (movie) => movie.userName === activeUserName
  );

  return (
    <>
      <Title text="Избранное" />
      <CardList data={{ description: personalFavoriteMovies }} />
    </>
  );
};

export default FavoritesPage;
