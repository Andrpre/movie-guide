import { Context, useContext } from "react";

export const useContextSafe = <T>(context: Context<T | null>): T => {
  const contextValue = useContext(context);

  if (!contextValue) {
    throw new Error(`${context.displayName || "Context"} must be used within its Provider`);
  }

  return contextValue;
};
