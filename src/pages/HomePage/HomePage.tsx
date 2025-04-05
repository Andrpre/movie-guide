import { FC } from "react";
import CardList from "../../components/CardList/CardList";
import Search from "../../components/Search/Search";

import styles from "./HomePage.module.css";

const HomePage: FC = () => {
  return (
    <div className={styles.layout}>
      <Search />
      <CardList />
    </div>
  );
};

export default HomePage;
