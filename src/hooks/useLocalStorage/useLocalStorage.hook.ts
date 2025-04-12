import { useState, useEffect } from "react";

// Обобщённый хук с generic-параметром <T>
export const useLocalStorage = <T>(key: string, initialValue: T): [T, (newValue: T) => void] => {
  const [data, setData] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (e) {
      console.error("Ошибка чтения localStorage:", e);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        setData(JSON.parse(item) as T);
      }
    } catch (e) {
      console.error("Ошибка чтения localStorage:", e);
    }
  }, [key]);

  const saveData = (newValue: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
      setData(newValue);
    } catch (e) {
      console.error("Ошибка записи в localStorage:", e);
    }
  };

  return [data, saveData];
};
