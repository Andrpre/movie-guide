import { FC } from "react";
import { useParams } from "react-router";

import Title from "../../components/Title/Title";
import { mockData } from "../../utils/mockData";

const CardPage: FC = () => {
  const { id } = useParams();

  const data = mockData.find((el) => el.id === Number(id)) || {
    id: 1,
    title: "Заголовок фильма",
    linkImg: "/",
    rating: "111",
  };

  return <Title text={data.title} />;
};

export default CardPage;
