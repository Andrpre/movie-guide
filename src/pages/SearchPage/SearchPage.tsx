import { FC, useEffect, useState } from "react";
import axios from "axios";

import CardList from "../../components/CardList/CardList";
import Search from "../../components/Search/Search";
import Error from "../../components/Error/Error";

import { PREFIX } from "../../helpers/API";
import { IMovies } from "../../types/apiData";

const SearchPage: FC = () => {
  const [movieData, setMovieData] = useState<IMovies>();
  const [movieName, setMovieName] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!movieName) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await axios
          .get<IMovies>(`${PREFIX}/?q=${movieName}`)
          .then((res) => res.data);

        setMovieData(response);
      } catch (err) {
        <Error />;
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieName]);

  return (
    <>
      <Search onSubmit={setMovieName} />
      {isLoading && <CardList data={movieData} />}
    </>
  );
};

export default SearchPage;
