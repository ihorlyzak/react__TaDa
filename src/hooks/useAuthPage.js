import { useEffect, useState } from 'react';
import { useRoutesPaths } from 'Routes';
import { useLocation } from 'react-router-dom';

export const useAuthPage = () => {
  const [isSignUpPage, setIsSignUpPage] = useState(false);
  const { routes } = useRoutesPaths();
  const location = useLocation();

  useEffect(() => {
    setIsSignUpPage(location.pathname.includes(routes.signUp()));
  }, [location.pathname, routes]);

  return { isSignUpPage };
};
