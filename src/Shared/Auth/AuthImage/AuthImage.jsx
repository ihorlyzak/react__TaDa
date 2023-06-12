import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';

import { AuthImageTitle } from './Components/AuthImageTitle';
import { AuthImageBox } from './Components/AuthImageBox';

export const AuthImage = () => {
	return (
		<AuthImageBox>
			<SportsBasketballIcon
				sx={{
					color: 'var(--orange)',
					fontSize: '12rem',
				}}
			/>
			<AuthImageTitle>Tada</AuthImageTitle>
		</AuthImageBox>
	);
};
