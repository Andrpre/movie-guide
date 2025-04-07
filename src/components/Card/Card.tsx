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
        <Rating rating={data.rating} />
      </div>
      <NavLink to={`/movie/${data.id}`}>
        <img className={styles.image} src={data.linkImg} alt={data.title} />
      </NavLink>
      <div className={styles.detail}>
        <NavLink to={`/movie/${data.id}`}>
          <h3 className={styles.title}>{data.title}</h3>
        </NavLink>
        <FavoritesButton />
      </div>
    </article>
  );
};

export default Card;
