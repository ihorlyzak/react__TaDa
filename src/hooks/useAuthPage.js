import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRoutesPaths } from 'routes';

export const useAuthPage = () => {
  const [isSignUpPage, setIsSignUpPage] = useState(false);
  const { routes } = useRoutesPaths();
  const location = useLocation();

  useEffect(() => {
    setIsSignUpPage(location.pathname.includes(routes.signUp()));
  }, [location.pathname, routes]);

  return { isSignUpPage };
};
