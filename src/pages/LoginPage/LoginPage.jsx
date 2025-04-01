import { useRef } from "react";
import { useAuthorization } from "../../hooks/useAuthorization.hook";

import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import InputText from "../../components/InputText/InputText";

import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const [_, setUser] = useAuthorization();
  const inputRef = useRef();

  const handleClickLogin = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) {
      return;
    }

    setUser(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className={styles.layout}>
      <Title text="Вход" />
      <form className={styles.form}>
        <InputText ref={inputRef} placeholder="Ваше имя" />
        <Button text="Войти в профиль" onClick={handleClickLogin} />
      </form>
    </div>
  );
};

export default LoginPage;
