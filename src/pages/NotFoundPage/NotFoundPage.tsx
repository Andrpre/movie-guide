import { FC } from "react";

import styles from "./NotFoundPage.module.css";

const NotFoundPage: FC = () => {
  return (
    <div className={styles.layout}>
      <p className={styles.title}>Страница не найдена :(</p>
      <p className={styles.code}>404</p>
    </div>
  );
};

export default NotFoundPage;
