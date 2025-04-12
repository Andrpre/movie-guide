import { FC } from "react";
import { Outlet } from "react-router";

import Header from "../Header/Header";

import styles from "./Layout.module.css";

const layout: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.layout}>
        <Outlet />
      </main>
    </>
  );
};

export default layout;
