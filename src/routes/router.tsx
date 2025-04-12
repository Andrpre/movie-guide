import { createBrowserRouter } from "react-router";

import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Layout from "../components/Layout/Layout";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import CardPage from "../pages/CardPage/CardPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/favorites",
        element: <FavoritesPage />,
      },
      {
        path: "/movie/:id",
        element: <CardPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
