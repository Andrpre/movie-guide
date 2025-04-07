import { FC } from "react";
import { NavLink } from "react-router";

import styles from "./Logo.module.css";

const Logo: FC = () => {
  return (
    <NavLink to="/" className={styles.logo}>
      <img src="/public/icons/logo-icon.svg" />
    </NavLink>
  );
};

export default Logo;
