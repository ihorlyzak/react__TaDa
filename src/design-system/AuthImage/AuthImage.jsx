import { useMemo } from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { AuthImageTitle } from './components/AuthImageTitle';
import { AuthImageBox, AuthImageLogo } from './components';
import { getRandomBackground } from 'utils';
import { getBgStyles } from 'utils';

const AuthImage = () => {
  const backgroundUrl = useMemo(() => getRandomBackground(), []);
  const authBackground = getBgStyles(backgroundUrl);

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

export default AuthImage;
