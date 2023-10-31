import { LOCAL_STORAGE_KEY } from '@/constants';
import { RegisterResponseDto } from '@/gql-type-and-hook';
import { parseUserFromLocalStorage } from '@/utils/func';
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
