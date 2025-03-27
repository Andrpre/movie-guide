import Logo from "../Logo/Logo";
import cn from "classnames";
import styles from "./Header.module.css";

const Header = () => {
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
              <a className={cn(styles.menuItem, styles.login)} href="#">
                <span>Войти</span>
                <img src="/public/login-icon.svg" alt="Иконка входа" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
