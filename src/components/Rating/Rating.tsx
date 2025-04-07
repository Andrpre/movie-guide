import { FC } from "react";
import styles from "./Rating.module.css";
import { RatingProps } from "./Rating.props";

const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <div className={styles.ratingWrapper}>
      <img src="/public/icons/favorites-icon.svg" />
      <span className={styles.ratingValue}>{rating}</span>
    </div>
  );
};

export default Rating;