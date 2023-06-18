import { SignIn } from 'pages/SignIn/SignIn';
import { SignUp } from 'pages/SignUp/SignUp';
import { useRoutesPaths } from './useRoutesPaths';
import { Panel } from 'Components';

export const useRoutes = () => {
  const { routes } = useRoutesPaths();

  return [
    {
      path: '*',
      element: <div>Not Found</div>,
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
