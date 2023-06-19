import { TaDaLink } from 'design-system';
import styled from '@emotion/styled';

export const NotFoundLink = styled(TaDaLink)(props => ({
  minWidth: '4rem',
  padding: '1rem 1.5rem',
  backgroundColor: props.background ? props.background : 'var(--blue)',
  textAlign: 'center',
  color: 'var(--white)',
  textDecoration: 'none',
  borderRadius: '5px',
}));

