import styles from "./Rating.module.css";

const Rating = ({ rating }) => {
  return (
    <div className={styles.ratingWrapper}>
      <img src="/public/icons/favorites-icon.svg" />
      <span className={styles.ratingValue}>{rating}</span>
    </div>
  );
};

export default Rating;