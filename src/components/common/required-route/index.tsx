import { useAuth } from '@/contexts/auth-context/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export function RequiredRoute({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
