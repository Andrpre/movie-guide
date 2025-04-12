import { FC, MouseEvent, useRef } from "react";

import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import InputText from "../InputText/InputText";

import styles from "./Search.module.css";

const Search: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickButton = (e: MouseEvent) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
  };

  return (
    <div className={styles.search}>
      <Title text="Поиск" />
      <div className={styles.description}>
        <Paragraph>
          Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
        </Paragraph>
      </div>
      <form className={styles.form}>
        <InputText ref={inputRef} placeholder="Введите название" isSearch />
        <Button text="Искать" onClick={handleClickButton} />
      </form>
    </div>
  );
};

export default Search;
