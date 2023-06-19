import { useRoutesPaths } from './useRoutesPaths';
import { Panel } from 'Components';
import { NotFound, SignIn, SignUp } from 'pages';

export const useRoutes = () => {
  const { routes } = useRoutesPaths();

  return [
    {
      path: '*',
      element: <NotFound />,
      isProtected: false,
    },
    {
      path: routes.base(),
      element: <SignIn />,
      isProtected: false,
    },
    {
      path: routes.signUp(),
      element: <SignUp />,
      isProtected: false,
    },

    {
      path: routes.mainPage(),
      element: <Panel />,
      isProtected: true,
    },
  ];
};
