import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.hook";
import { useState } from "react";

export const useAuthorization = () => {
  const [activeUserName, setActiveUserName] = useState();
  const [localData, setLocalData] = useLocalStorage("profiles");

  useEffect(() => {
    const existingUser = localData.find((data) => data.isLogined);
    if (existingUser) {
      setActiveUserName(existingUser.name);
    } else {
      setActiveUserName(null);
    }
  }, [localData]);

  const onAuthorizeUser = (login) => {
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
