import { FC } from "react";
import { useLoaderData } from "react-router";

import Title from "../../components/Title/Title";

import { IMovie } from "../../types/apiData";
import styles from "./CardPage.module.css";

const CardPage: FC = () => {
  const movie = useLoaderData() as IMovie;

  return (
    <div>
      <div className={styles.titleWrapper}>
        <span className={styles.titleAdditional}>Поиск фильмов</span>
        <Title
          text={movie.short.name}
          style={{ fontSize: "var(--font-size-large)", lineHeight: "var(--line-height-large)" }}
        />
      </div>

      <div>
        <img src={movie.short.image} alt={movie.short.name} />
        <div></div>
      </div>
    </div>
  );
};

export default CardPage;
