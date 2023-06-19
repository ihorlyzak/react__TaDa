import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { useRoutesPaths } from 'routes';
import { NotFoundLink } from './NotFoundLink';
import { useNavigate } from 'react-router-dom';

export const NotFoundButtons = () => {
  const { routes } = useRoutesPaths();
  const navigate = useNavigate();

  return (
    <NotFoundButtonsBox>
      <NotFoundLink to={routes.base()}>Home</NotFoundLink>
      <NotFoundLink to={navigate(-1)} background='var(--orange)'>
        Previous
      </NotFoundLink>
    </NotFoundButtonsBox>
  );
};

const NotFoundButtonsBox = styled(Box)({
  display: 'flex',
  gap: '1rem',
  marginTop: '2rem',
});
