import React from 'react';
import { Box, Typography } from '@mui/material';

export const Header = () => (
	<Box textAlign='left' marginBottom='10px'>
		<Typography sx={{ fontSize: 35 }} variant='h1' component='h1'>
			TaDa
		</Typography>
	</Box>
);
