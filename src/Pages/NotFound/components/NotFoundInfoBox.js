import { Box } from '@mui/system';
import styled from 'styled-components';

export const NotFoundInfoBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 'var(--radiusMain)',
  backgroundColor: 'rgba(0, 0, 0, .4)',
  margin: '2rem 0 1rem 0',
  padding: '1rem',
});
