import { useMemo } from 'react';

import { pathMaker } from '../pathMaker';

export const useRoutesPaths = () => {
  return useMemo(
    () => ({
      routes: {
        base: pathMaker('/'),
        signUp: pathMaker('/sign-up'),
      },
    }),
    [],
  );
};
