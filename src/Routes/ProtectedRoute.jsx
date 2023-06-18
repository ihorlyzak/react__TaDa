import { Navigate, Outlet } from 'react-router-dom';
import { useRoutesPaths } from './hooks';
import { UserAuth } from 'context/AuthContext';

export const ProtectedRoute = () => {
  const { userCredentials } = UserAuth();
  const { routes } = useRoutesPaths();

  return userCredentials ? <Outlet /> : <Navigate to={routes.base()} />;
};
