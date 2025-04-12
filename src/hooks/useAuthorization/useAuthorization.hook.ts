import { useState, useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage/useLocalStorage.hook";

import { User } from "./useAuthorization.props";

export const useAuthorization = (): [string | null, (login: string) => void, () => void] => {
  const [activeUserName, setActiveUserName] = useState<string | null>(null);
  const [localData, setLocalData] = useLocalStorage<User[]>("profiles", []);

  useEffect(() => {
    const existingUser = localData.find((data) => data.isLogined);
    if (existingUser) {
      setActiveUserName(existingUser.name);
    } else {
      setActiveUserName(null);
    }
  }, [localData]);

  const onAuthorizeUser = (login: string) => {
    localData;
    const existingUser = localData.find((user) => user.name === login);
    if (existingUser) {
      setLocalData(
        localData.map((user) => (user.name === login ? { ...user, isLogined: true } : user))
      );
    } else {
      setLocalData([
        ...localData,
        {
          name: login,
          isLogined: true,
        },
      ]);
    }
  };

  const onLogoutUser = () => {
    setLocalData(localData.map((user) => ({ ...user, isLogined: false })));
  };

  return [activeUserName, onAuthorizeUser, onLogoutUser];
};
