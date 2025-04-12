import { FC, useState } from "react";
import cn from "classnames";
import styles from "./FavoritesButton.module.css";
import { FavoritesButtonProps } from "./FavoritesButton.Props";

const FavoritesButton: FC<FavoritesButtonProps> = ({ inFavorite = false }) => {
  const [isFavorite, setIsFavorite] = useState(inFavorite);

  const handleClickButton = () => {
    setIsFavorite((prev) => !prev);
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
      {isFavorite ? buttonAdded : buttonToAdd}
    </button>
  );
};

export default FavoritesButton;
