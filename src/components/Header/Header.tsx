import { FC, MouseEvent } from "react";
import { useDispatch, useSelector } from "../../store/hook";
import { NavLink, useNavigate } from "react-router";
import { selectFavorites } from "../../store/slices/favorites.slice";
import { logoutUser, selectActiveUserName } from "../../store/slices/users.slice";

import Logo from "../Logo/Logo";

import cn from "classnames";
import styles from "./Header.module.css";

const Header: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector(selectFavorites);
  const activeUserName = useSelector(selectActiveUserName);
  
  const quantityFilms = favorites.filter((movie) => movie.userName === activeUserName).length;
  const hasFilms = Boolean(quantityFilms);

  const handleClickLogout = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(logoutUser());

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
                {hasFilms && <span className={styles.quantityFilms}>{quantityFilms}</span>}
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
                  <a onClick={handleClickLogout} className={cn(styles.menuItem, styles.login)} href="#">
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
