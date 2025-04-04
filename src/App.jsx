import { useAuthorization } from "./hooks/useAuthorization.hook";
import { UserContext } from "./context/user.context";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const [activeUserName, onAuthorizeUser, onLogoutUser] = useAuthorization();

  return (
    <UserContext.Provider value={{ activeUserName, onAuthorizeUser, onLogoutUser }}>
      <Header />
      <LoginPage />
      <HomePage />
    </UserContext.Provider>
  );
}

export default App;
