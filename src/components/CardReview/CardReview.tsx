import { FC } from "react";

import { CardReviewProps } from "./CardReview.props";

import styles from "./CardReview.module.css";

const CardReview: FC<CardReviewProps> = ({ title, date, text }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <h5 className={styles.title}>{title}</h5>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default CardReview;
