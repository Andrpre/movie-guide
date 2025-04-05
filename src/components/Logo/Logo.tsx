import { FC } from "react";
import styles from "./Logo.module.css";

const Logo: FC = () => {
  return (
    <a href="/" className={styles.logo}>
      <img src="/public/icons/logo-icon.svg" />
    </a>
  );
};

export default Logo;
