import { useAuthorization } from "./hooks/useAuthorization.hook";
import { createBrowserRouter, RouterProvider } from "react-router";
import { UserContext } from "./context/user.context";
import axios from "axios";
import { PREFIX } from "./helpers/API";
import { lazy, Suspense } from "react";

import Layout from "./components/Layout/Layout";
import CardPage from "./pages/CardPage/CardPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";

const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "/login",
        element: (
          <Suspense fallback={<Loading />}>
            <LoginPage />
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
        element: <CardPage />,
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
]);

function App() {
  const [activeUserName, onAuthorizeUser, onLogoutUser] = useAuthorization();

  return (
    <UserContext.Provider value={{ activeUserName, onAuthorizeUser, onLogoutUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
