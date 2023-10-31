import { LOCAL_STORAGE_KEY } from '@/constants';
import { RegisterResponseDto } from '@/gql-type-and-hook';
import { createContext, ReactNode, useCallback, useState } from 'react';

interface AuthContext {
  user: RegisterResponseDto | null;
  setUser: (user: RegisterResponseDto | null) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
  logout: () => {},
});

const parseUserFromLocalStorage = (): RegisterResponseDto | null => {
  const jsonString = localStorage.getItem(LOCAL_STORAGE_KEY.AUTH);
  try {
    if (jsonString) {
      const user: RegisterResponseDto = JSON.parse(jsonString);
      return user;
    }
    return null;
  } catch (error) {
    console.warn(`Can't parse json, set null for default`);
    return null;
  }
};

export const AuthWrapperContext = (props: { children: ReactNode }) => {
  const [user, setUserWithoutLocalStorage] = useState<RegisterResponseDto | null>(parseUserFromLocalStorage());
  const setUser = useCallback(
    (user: RegisterResponseDto | null) => {
      setUserWithoutLocalStorage(user);
      localStorage.setItem(LOCAL_STORAGE_KEY.AUTH, JSON.stringify(user));
    },
    [setUserWithoutLocalStorage],
  );
  const logout = useCallback(() => {
    setUser(null);
  }, [setUser]);
  return <AuthContext.Provider value={{ user, setUser, logout }}>{props.children}</AuthContext.Provider>;
};
