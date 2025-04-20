import { FC } from "react";

import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";

import styles from "./EmptySearchResult.module.css";

const EmptySearchResult: FC = () => {
  return (
    <div className={styles.layout}>
      <Title text="Упс... Ничего не найдено" />
      <Paragraph>Попробуйте изменить запрос или ввести более точное название фильма</Paragraph>
    </div>
  );
};

export default EmptySearchResult;
