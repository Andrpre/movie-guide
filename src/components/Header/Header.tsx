import { FC, MouseEvent } from "react";
import { useContextSafe } from "../../hooks/useContextSafe/useContextSafe";
import { UserContext } from "../../context/user.context";
import { NavLink } from "react-router";

import Logo from "../Logo/Logo";

import cn from "classnames";
import styles from "./Header.module.css";

const Header: FC = () => {
  const { activeUserName, onLogoutUser } = useContextSafe(UserContext);

  const handleClickLogout = (e: MouseEvent) => {
    e.preventDefault();
    onLogoutUser();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Logo />
        <nav>
          <ul>
            <li className={styles.menuList}>
              <NavLink
                className={({ isActive }) =>
                  cn(styles.menuItem, {
                    [styles.activeLink]: isActive,
                  })
                }
                to="/"
              >
                Поиск фильмов
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  cn(styles.menuItem, {
                    [styles.activeLink]: isActive,
                  })
                }
                to="/favorites"
              >
                Мои фильмы
              </NavLink>
              {activeUserName ? (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      cn(styles.menuItem, styles.login, {
                        [styles.activeLink]: isActive,
                      })
                    }
                    to="/profile"
                  >
                    <span>{activeUserName}</span>
                    <img src="/public/icons/user-icon.svg" alt="Иконка входа" />
                  </NavLink>
                  <a
                    onClick={handleClickLogout}
                    className={cn(styles.menuItem, styles.login)}
                    href="#"
                  >
                    Выйти
                  </a>
                </>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    cn(styles.menuItem, styles.login, {
                      [styles.activeLink]: isActive,
                    })
                  }
                  to="/login"
                >
                  <span>Войти</span>
                  <img src="/public/icons/login-icon.svg" alt="Иконка входа" />
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
