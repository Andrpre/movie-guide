import { FC } from "react";
import Card from "../Card/Card";

import { CardListProps } from "./CardList.props";
import styles from "./CardList.module.css";

const CardList: FC<CardListProps> = ({ data }) => {
  return (
    <section className={styles.cardList}>
      {data?.description.map((data) => (
        <Card key={data.#IMDB_ID} data={data} />
      ))}
    </section>
  );
};

export default CardList;
