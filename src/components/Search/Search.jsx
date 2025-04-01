import { useRef } from "react";

import Title from "../Title/Title";
import Paragraph from "../Paragraph/Paragraph";
import Button from "../Button/Button";
import InputText from "../InputText/InputText";

import styles from "./Search.module.css";

const Search = () => {
  const inputRef = useRef();

  const handleClickButton = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <div className={styles.search}>
      <Title text="Поиск" />
      <div className={styles.description}>
        <Paragraph text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное." />
      </div>
      <form className={styles.form}>
        <InputText ref={inputRef} placeholder="Введите название" isSearch />
        <Button text="Искать" onClick={handleClickButton} />
      </form>
    </div>
  );
};

export default Search;
