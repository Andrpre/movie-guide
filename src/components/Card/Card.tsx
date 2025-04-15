import { FC } from "react";
import { NavLink } from "react-router";

import FavoritesButton from "../FavoritesButton/FavoritesButton";
import Rating from "../Rating/Rating";

import styles from "./Card.module.css";
import { CardProps } from "./Card.props";

const Card: FC<CardProps> = ({ data }) => {
  return (
    <article className={styles.card}>
      <div className={styles.rating}>
        <Rating rating={data.short.aggregateRating.ratingCount} />
      </div>
      <NavLink to={`/movie/${data.imdbId}`}>
        <img className={styles.image} src={data.short.image} alt={data.short.name} />
      </NavLink>
      <div className={styles.detail}>
        <NavLink to={`/movie/${data.imdbId}`}>
          <h3 className={styles.title}>{data.short.name}</h3>
        </NavLink>
        <FavoritesButton />
      </div>
    </article>
  );
};

export default Card;
