import { Box } from '@mui/system';
import React from 'react';

export const TaDaBox = ({ children, ...rest }) => {
	return (
		<Box {...rest}>
			{children}
		</Box>
	);
};
