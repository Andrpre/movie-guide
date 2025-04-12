import { FC } from "react";
import { useLoaderData } from "react-router";

import Title from "../../components/Title/Title";
import { IMovie } from "../../types/apiData";

const CardPage: FC = () => {
  const movie = useLoaderData() as IMovie;

  return <Title text={movie.short.name} />;
};

export default CardPage;
