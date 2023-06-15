import { useMemo } from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { AuthImageTitle } from './Components/AuthImageTitle';
import { AuthImageBox, getAuthBgStyles } from './Components/AuthImageBox';
import { getRandomBackground } from 'Helpers';

export const AuthImage = () => {
	const backgroundUrl = useMemo(() => getRandomBackground(), []);
	const authBackground = getAuthBgStyles(backgroundUrl);

	return (
		<AuthImageBox style={authBackground}>
			<AcUnitIcon
				sx={{
					color: 'var(--orange)',
					fontSize: '12rem',
				}}
			/>
			<AuthImageTitle>TaDa</AuthImageTitle>
		</AuthImageBox>
	);
};
