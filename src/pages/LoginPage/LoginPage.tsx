import { useRef, MouseEvent, FC } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../context/user.context";
import { useContextSafe } from "../../hooks/useContextSafe/useContextSafe";

import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import InputText from "../../components/InputText/InputText";

import styles from "./LoginPage.module.css";

const LoginPage: FC = () => {
  const { onAuthorizeUser } = useContextSafe(UserContext);
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickLogin = (e: MouseEvent) => {
    e.preventDefault();

    if (!inputRef.current?.value) {
      return;
    }

    onAuthorizeUser(inputRef.current.value);
    inputRef.current.value = "";

    navigate("/");
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
