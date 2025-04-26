import { FC, MouseEvent } from "react";
import { useContextSafe } from "../../hooks/useContextSafe/useContextSafe";
import { UserContext } from "../../context/user.context";
import { useSelector } from "../../store/hook";
import { NavLink, useNavigate } from "react-router";
import { selectFavorites } from "../../store/slices/favorites.slice";

import Logo from "../Logo/Logo";

import cn from "classnames";
import styles from "./Header.module.css";

const Header: FC = () => {
  const { activeUserName, onLogoutUser } = useContextSafe(UserContext);
  const navigate = useNavigate();
  const favorites = useSelector(selectFavorites);

  const quantityFilms = favorites.length;
  
  const handleClickLogout = (e: MouseEvent) => {
    e.preventDefault();
    onLogoutUser();

    navigate("/auth/login");
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
                  cn(styles.menuItem, styles.myFavorite, {
                    [styles.activeLink]: isActive,
                  })
                }
                to="/favorites"
              >
                Мои фильмы
                <span className={styles.quantityFilms}>{quantityFilms}</span>
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
                  to="/auth/login"
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
