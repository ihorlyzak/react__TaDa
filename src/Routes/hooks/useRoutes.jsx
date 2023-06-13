import { SignIn } from 'Pages/SignIn/SignIn';
import { SignUp } from 'Pages/SignUp/SignUp';

import { useRoutesPaths } from './useRoutesPaths';

export const useRoutes = () => {
	const { routes } = useRoutesPaths();

	return [
		{
			path: '*',
			element: <div>Not Found</div>,
		},
		// {
		// 	path: routes.base(),
		// 	element: <VirtualFriendListPage />,
		// },
		{
			path: routes.signIn(),
			element: <SignIn />,
		},
		{
			path: routes.signUp(),
			element: <SignUp />,
		},
	];
};
