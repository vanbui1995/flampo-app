import { useContext } from 'react';
import { AuthContext } from './auth-context';

export const useAuth = () => {
  const value = useContext(AuthContext);
  return value;
};
