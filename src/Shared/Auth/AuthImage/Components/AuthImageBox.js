import { Box } from '@mui/material/';
import styled from 'styled-components';

export const AuthImageBox = styled(Box)({
	maxWidth: '50%',
	width: '50%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
});

export const getAuthBgStyles = backgroundUrl => {
	const authBackground = {
		background: `linear-gradient(0deg, rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${backgroundUrl})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
	};

	return authBackground;
};
