import { FC } from 'react';

import Title from '../../components/Title/Title';
import CardList from "../../components/CardList/CardList";

import { mockData } from "../../utils/mockData";

const FavoritesPage: FC = () => {
  return (
    <>
      <Title text="Избранное" />
      <CardList data={mockData} />
    </>
  );
};

export default FavoritesPage;