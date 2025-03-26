import FavoritesButton from "../FavoritesButton/FavoritesButton";
import Rating from "../Rating/Rating";

import styles from "./Card.module.css";

const Card = ({ linkImg, title, rating }) => {
  return (
    <article className={styles.card}>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <img className={styles.image} src={linkImg} alt={title} />
      <div className={styles.detail}>
        <a href="#">
          <h3 className={styles.title}>{title}</h3>
        </a>
        <FavoritesButton />
      </div>
    </article>
  );
};

export default Card;
