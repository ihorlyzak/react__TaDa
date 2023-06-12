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
	background:
		'linear-gradient(0deg, rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752)',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
});
