import { useMemo } from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { AuthImageTitle } from './Components/AuthImageTitle';
import { getRandomBackground } from 'Helpers';
import { AuthImageBox, AuthImageLogo, getAuthBgStyles } from './Components';

export const AuthImage = () => {
	const backgroundUrl = useMemo(() => getRandomBackground(), []);
	const authBackground = getAuthBgStyles(backgroundUrl);

	return (
		<AuthImageBox style={authBackground}>
			<AuthImageLogo>
				<AcUnitIcon
					sx={{
						color: 'var(--orange)',
						fontSize: '12rem',
					}}
				/>
				<AuthImageTitle>TaDa</AuthImageTitle>
			</AuthImageLogo>
		</AuthImageBox>
	);
};
