import { FC } from "react";
import Card from "../Card/Card";

import styles from "./CardList.module.css";
import { mockData } from "../../utils/mockData";

const CardList: FC = () => {
  return (
    <section className={styles.cardList}>
      {mockData.map(({ id, linkImg, title, rating }) => (
        <Card key={id} rating={rating} linkImg={linkImg} title={title} />
      ))}
    </section>
  );
};

export default CardList;
