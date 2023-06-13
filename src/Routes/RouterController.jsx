import { useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

export const RouterController = ({ children, routes }) => {
	const routeMapper = useCallback((route, index) => {
		return (
			<Route
				key={route.path ?? `index-route-${index}`}
				path={route.path}
				element={route.element}
				caseSensitive={route.caseSensitive}
				index={route.index}
			/>
		);
	}, []);

	return (
		<Routes>
			{children}
			{routes.map(routeMapper)}
		</Routes>
	);
};
