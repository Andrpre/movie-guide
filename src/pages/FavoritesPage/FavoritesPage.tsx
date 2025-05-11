import { FC } from "react";
import { useSelector } from "../../store/hook";
import { selectFavorites } from "../../store/slices/favorites.slice";
import { selectActiveUserName } from "../../store/slices/users.slice";

import { convertToIMovies } from "../../helpers/convertToIMovies";

import Title from "../../components/Title/Title";
import CardList from "../../components/CardList/CardList";
import Empty from "../../components/Empty/Empty";

const FavoritesPage: FC = () => {
  const activeUserName = useSelector(selectActiveUserName);
  const favorites = useSelector(selectFavorites);
  const favoritesMovies = convertToIMovies(favorites);

  const personalFavoriteMovies = favoritesMovies.description.filter((movie) => movie.userName === activeUserName);
  const shouldShowFavorites = personalFavoriteMovies.length;

  return (
    <>
      {shouldShowFavorites ? (
        <>
          <Title text="Избранное" />
          <CardList data={{ description: personalFavoriteMovies }} />
        </>
      ) : (
        <Empty title="Пусто" text="Добавьте фильм в избранное, чтобы сохранить его здесь" />
      )}
    </>
  );
};

export default FavoritesPage;
