import { FC, useMemo } from "react";
import { useDispatch, useSelector } from "../../store/hook";
import { addToFavorites, removeFromFavorites, selectFavorites } from "../../store/slices/favorites.slice";
import { useContextSafe } from "../../hooks/useContextSafe/useContextSafe";
import { UserContext } from "../../context/user.context";

import { FavoritesButtonProps } from "./FavoritesButton.Props";

import styles from "./FavoritesButton.module.css";
import cn from "classnames";

const FavoritesButton: FC<FavoritesButtonProps> = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const { activeUserName } = useContextSafe(UserContext);

  const isInFavorites = useMemo(
    () => favorites.some((item) => item.imdbId === data.imdbId && item.userName === activeUserName),
    [favorites, data.imdbId]
  );

  const handleClickButton = () => {
    dispatch(!isInFavorites ? addToFavorites({ userName: activeUserName, ...data }) : removeFromFavorites(data.imdbId));
  };

  const buttonToAdd = (
    <>
      <img src="/public/icons/like-icon.svg" alt="" />
      <span className={cn(styles.buttonText, styles.likeVatiant)}>В избранное</span>
    </>
  );

  const buttonAdded = (
    <>
      <img src="/public/icons/bookmark-icon.svg" />
      <span className={cn(styles.buttonText, styles.bookmarkVatiant)}>В избраном</span>
    </>
  );

  return (
    <button className={styles.favoritesButton} onClick={handleClickButton}>
      {isInFavorites ? buttonAdded : buttonToAdd}
    </button>
  );
};

export default FavoritesButton;
