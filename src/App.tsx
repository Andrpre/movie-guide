import { useAuthorization } from "./hooks/useAuthorization.hook";
import { createBrowserRouter, RouterProvider } from "react-router";
import { UserContext } from "./context/user.context";

import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./components/Layout/Layout";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import CardPage from "./pages/CardPage/CardPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
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

function App() {
  const [activeUserName, onAuthorizeUser, onLogoutUser] = useAuthorization();

  return (
    <UserContext.Provider value={{ activeUserName, onAuthorizeUser, onLogoutUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
