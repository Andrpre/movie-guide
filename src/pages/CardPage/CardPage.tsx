import { FC } from "react";
import { useLoaderData } from "react-router";
import { formatDurationToMinutes } from "../../helpers/formatDurationToMinutes";

import Title from "../../components/Title/Title";
import Rating from "../../components/Rating/Rating";
import FavoritesButton from "../../components/FavoritesButton/FavoritesButton";
import CardParam from "../../components/Param/CardParamProps";
import CardReview from "../../components/CardReview/CardReview";

import { IMovie } from "../../types/apiData";
import styles from "./CardPage.module.css";

const CardPage: FC = () => {
  const movie = useLoaderData() as IMovie;

  const cardParams = [
    {
      id: 1,
      title: "Тип",
      text: movie.short["@type"],
    },
    {
      id: 2,
      title: "Дата выхода",
      text: movie.short.datePublished,
    },
    {
      id: 3,
      title: "Длительность",
      text: movie.short?.duration ? formatDurationToMinutes(movie.short.duration) : "N/A",
    },
    {
      id: 4,
      title: "Жанр",
      text: movie.short.genre?.join(", "),
    },
  ];

  return (
    <div>
      <div className={styles.titleWrapper}>
        <span className={styles.titleAdditional}>Поиск фильмов</span>
        <Title
          text={movie.short.name}
          style={{ fontSize: "var(--font-size-large)", lineHeight: "var(--line-height-large)" }}
        />
      </div>

      <div className={styles.cardBody}>
        <img src={movie.short.image} alt={movie.short.name} className={styles.cardImage} />

        <div className={styles.cardInfo}>
          <p>{movie.short.description}</p>

          <div className={styles.cardOpt}>
            {movie.short?.aggregateRating?.ratingCount && (
              <Rating rating={movie.short.aggregateRating.ratingValue} />
            )}
            <FavoritesButton data={movie} />
          </div>

          <div className={styles.params}>
            {cardParams.map((param) => {
              if (param.text)
                return <CardParam key={param.id} title={param.title} text={param.text} />;
            })}
          </div>
        </div>
      </div>

      {movie.short?.review && (
        <div className={styles.cardReview}>
          <h6 className={styles.cardReviewTitle}>Отзывы</h6>
          <CardReview
            title={movie.short.review.name}
            date={movie.short.review.dateCreated}
            text={movie.short.review.reviewBody}
          />
        </div>
      )}
    </div>
  );
};

export default CardPage;
