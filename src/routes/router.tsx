import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import axios from "axios";
import { PREFIX } from "../helpers/API";

import Layout from "../components/Layout/Layout";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import ProtectedRouter from "../helpers/ProtectedRouter";

const SearchPage = lazy(() => import("../pages/SearchPage/SearchPage"));
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const FavoritesPage = lazy(() => import("../pages/FavoritesPage/FavoritesPage"));
const CardPage = lazy(() => import("../pages/CardPage/CardPage"));

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRouter>
        <Layout />
      </ProtectedRouter>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: "/favorites",
        element: (
          <Suspense fallback={<Loading />}>
            <FavoritesPage />
          </Suspense>
        ),
      },
      {
        path: "/movie/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <CardPage />
          </Suspense>
        ),
        errorElement: <Error />,
        loader: async ({ params }) => {
          return await axios.get(`${PREFIX}/?tt=${params.id}`).then((res) => res.data);
        },
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <LoginPage />
          </Suspense>
        ),
      },
    ],
  },
]);
