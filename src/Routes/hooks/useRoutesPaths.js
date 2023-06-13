import * as React from 'react';

import { pathMaker } from '../pathMaker';

export const useRoutesPaths = () => {
	return React.useMemo(
		() => ({
			routes: {
				base: pathMaker('/'),
				signIn: pathMaker('/sign-in'),
				signUp: pathMaker('/sign-up'),
			},
		}),
		[],
	);
};
