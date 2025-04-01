import { useAuthorization } from "../../hooks/useAuthorization.hook";

import Logo from "../Logo/Logo";

import cn from "classnames";
import styles from "./Header.module.css";

const Header = () => {
  const [activeUserName, _, logoutUser] = useAuthorization();

  const handleClickLogout = (e) => {
    e.preventDefault();
    logoutUser();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Logo />
        <nav>
          <ul>
            <li className={styles.menuList}>
              <a className={styles.menuItem} href="#">
                Поиск фильмов
              </a>
              <a className={styles.menuItem} href="#">
                Мои фильмы
              </a>
              {activeUserName ? (
                <>
                  <a className={cn(styles.menuItem, styles.login)} href="#">
                    <span>{activeUserName}</span>
                    <img src="/public/icons/user-icon.svg" alt="Иконка входа" />
                  </a>
                  <a
                    onClick={handleClickLogout}
                    className={cn(styles.menuItem, styles.login)}
                    href="#"
                  >
                    Выйти
                  </a>
                </>
              ) : (
                <a className={cn(styles.menuItem, styles.login)} href="#">
                  <span>Войти</span>
                  <img src="/public/icons/login-icon.svg" alt="Иконка входа" />
                </a>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
