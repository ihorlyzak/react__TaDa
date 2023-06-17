import { useAuth } from 'hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import { useRoutesPaths } from './hooks';

export const ProtectedRoute = () => {
  const { userCredentials } = useAuth();
  const { routes } = useRoutesPaths();
  return userCredentials ? <Outlet /> : <Navigate to={routes.base()} />;
};
