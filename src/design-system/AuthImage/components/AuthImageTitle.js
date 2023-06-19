import { Typography } from '@mui/material';
import styled from 'styled-components';

export const AuthImageTitle = styled(Typography).attrs(props => {
  return {
    variant: props.variant || 'h2',
    component: props.component || 'h2',
  };
})({
  color: 'var(--white)',
  fontWeight: '700',
});
