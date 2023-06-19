import React, { useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';

export const RouterController = ({ children, routes }) => {
  const routeMapper = useCallback((route, index) => {
    const { isProtected, path, element, caseSensitive, isIndex } = route;

    if (isProtected) {
      return (
        <Route
          key={path ?? `index-route-${index}`}
          element={<ProtectedRoute />}
        >
          <Route
            path={path}
            element={element}
            caseSensitive={caseSensitive}
            index={isIndex}
          />
        </Route>
      );
    }

    return (
      <Route
        key={path ?? `index-route-${index}`}
        path={path}
        element={element}
        caseSensitive={caseSensitive}
        index={isIndex}
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
