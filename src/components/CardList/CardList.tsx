import { FC } from "react";
import Card from "../Card/Card";

import { CardListProps } from "./CardList.props";
import styles from "./CardList.module.css";

const CardList: FC<CardListProps> = ({ data }) => {
  return (
    <section className={styles.cardList}>
      {data.map((data) => (
        <Card key={data.id} data={data} />
      ))}
    </section>
  );
};

export default CardList;
