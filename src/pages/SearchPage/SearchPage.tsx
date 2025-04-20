import { FC, useEffect, useState } from "react";
import axios from "axios";

import CardList from "../../components/CardList/CardList";
import Search from "../../components/Search/Search";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import EmptySearchResult from "../../components/EmptySearchResult/EmptySearchResult";

import { PREFIX } from "../../helpers/API";
import { IMovies } from "../../types/apiData";

const SearchPage: FC = () => {
  const [moviesData, setMoviesData] = useState<IMovies | null>(null);
  const [movieName, setMovieName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDataFetched, setIsDataFetched] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const isMoviesData = moviesData?.description?.length !== 0;
  const shouldShowEmptySearchResult = !isLoading && isDataFetched && !isMoviesData;
  const shouldShowCardList = !isLoading && moviesData && isMoviesData;

  useEffect(() => {
    if (!movieName) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setIsDataFetched(true);
      setError(false);

      try {
        const response = await axios.get<IMovies>(`${PREFIX}/?q=${movieName}`).then((res) => res.data);

        setMoviesData(response);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieName]);

  return (
    <>
      <Search onSubmit={setMovieName} />

      {isLoading && <Loading />}
      {error && <Error />}

      {shouldShowEmptySearchResult && <EmptySearchResult />}
      {shouldShowCardList && <CardList data={moviesData} />}
    </>
  );
};

export default SearchPage;
