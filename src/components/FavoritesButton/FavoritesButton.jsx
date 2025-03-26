import { useState } from "react";
import styles from "./FavoritesButton.module.css";

const FavoritesButton = ({ inFavorite = false }) => {
  const [isFavorite, setIsFavorite] = useState(inFavorite);

  const handleClickButton = () => {
    setIsFavorite(prev => !prev);
  }

  const buttonToAdd = (
    <>
      <img src="/public/icons/like-icon.svg" alt="" />
      <span className={`${styles.buttonText} ${styles.likeVatiant}`}>В избранное</span>
    </>
  );

  const buttonAdded = (
    <>
      <img src="/public/icons/bookmark-icon.svg" />
      <span className={`${styles.buttonText} ${styles.bookmarkVatiant}`}>В избраном</span>
    </>
  );

  return (
    <button className={styles.favoritesButton} onClick={handleClickButton}>
      {isFavorite ? buttonAdded : buttonToAdd}
    </button>
  );
};

export default FavoritesButton;
