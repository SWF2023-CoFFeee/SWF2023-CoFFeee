import { useState, useEffect } from 'react';

export const useLocalStorage = <T,>(
  key: string,
  initialValue: T,
): [T, (value: T | ((val: T) => T)) => void, () => void, () => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error as Error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)): void => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error as Error);
    }
  };

  const deleteValue = (): void => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.log(error as Error);
    }
  };

  const clearStorage = (): void => {
    try {
      window.localStorage.clear();
      setStoredValue(initialValue);
    } catch (error) {
      console.log(error as Error);
    }
  };

  useEffect(() => {
    const handleStorageChange = (): void => {
      const item = window.localStorage.getItem(key);
      setStoredValue(item ? JSON.parse(item) : initialValue);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, initialValue]);

  return [storedValue, setValue, deleteValue, clearStorage];
};
