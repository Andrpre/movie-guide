import Card from "../../components/Card/Card";
import { mockData } from "../../utils/mockData";
import styles from "./CardList.module.css";

const CardList = () => {
  return (
    <section className={styles.cardList}>
      {mockData.map(({ id, linkImg, title, rating }) => (
        <Card key={id} rating={rating} linkImg={linkImg} title={title} />
      ))}
    </section>
  );
};

export default CardList;
