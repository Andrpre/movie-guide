import { FC } from "react";

import CardList from "../../components/CardList/CardList";
import Search from "../../components/Search/Search";

import { mockData } from "../../utils/mockData";

const HomePage: FC = () => {
  return (
    <>
      <Search />
      <CardList data={mockData} />
    </>
  );
};

export default HomePage;
