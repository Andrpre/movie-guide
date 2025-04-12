import { FC, Suspense } from "react";
import { Await, useLoaderData } from "react-router";

import Title from "../../components/Title/Title";
import Loading from "../../components/Loading/Loading";
import { IMovie } from "../../types/apiData";

const CardPage: FC = () => {
  const data = useLoaderData();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Await resolve={data}>
          {(resolvedData: IMovie) => <Title text={resolvedData.short.name} />}
        </Await>
      </Suspense>
    </>
  );
};

export default CardPage;
