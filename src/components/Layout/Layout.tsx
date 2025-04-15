import { FC } from "react";
import { Outlet, useNavigation } from "react-router";

import Header from "../Header/Header";
import Loading from "../Loading/Loading";

import styles from "./Layout.module.css";

const Layout: FC = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <main className={styles.layout}>
        {isLoading && <Loading />}
        {!isLoading && <Outlet />}
      </main>
    </>
  );
};

export default Layout;
