import { useAuthorization } from "./hooks/useAuthorization/useAuthorization.hook";
import { RouterProvider } from "react-router";
import { UserContext } from "./context/user.context";
import { ROUTER } from "./routes/router";

function App() {
  const [activeUserName, onAuthorizeUser, onLogoutUser] = useAuthorization();

  return (
    <UserContext.Provider value={{ activeUserName, onAuthorizeUser, onLogoutUser }}>
      <RouterProvider router={ROUTER} />
    </UserContext.Provider>
  );
}

export default App;
