import { FullScreenLayout } from 'layouts';
import { AUTH_2 } from 'assets';
import { getBgStyles } from 'utils';
import {
  NotFoundBox,
  NotFoundButtons,
  NotFoundInfo,
  NotFoundInfoBox,
  NotFoundVideo,
} from './components';

export const NotFound = () => {
  const backgroundImageStyles = getBgStyles(AUTH_2);

  return (
    <FullScreenLayout style={backgroundImageStyles}>
      <NotFoundBox>
        <NotFoundVideo />
        <NotFoundInfoBox>
          <NotFoundInfo />
          <NotFoundButtons />
        </NotFoundInfoBox>
      </NotFoundBox>
    </FullScreenLayout>
  );
};
