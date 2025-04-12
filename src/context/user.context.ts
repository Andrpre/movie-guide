import { createContext } from "react";

interface UserContextType {
  activeUserName: string | null;
  onAuthorizeUser: (login: string) => void;
  onLogoutUser: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);
