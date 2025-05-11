import { ReactNode, useState, useEffect } from "react";
import { Navigate } from "react-router";
import { selectActiveUserName } from "../store/slices/users.slice";

import { useSelector } from "../store/hook";

const ProtectedRouter = ({ children }: { children: ReactNode }) => {
  const activeUserName = useSelector(selectActiveUserName);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Когда данные из localStorage загружены, обновляем состояние
  useEffect(() => {
    setIsLoading(false);
  }, [activeUserName]);

  if (isLoading) {
    return null; // Пока данные загружаются, ничего не рендерим
  }

  if (!activeUserName) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRouter;
