import { Button } from '@mui/material';
import styled from 'styled-components';

export const CustomButton = styled(Button)(({ fullWidth, margin }) => ({
  width: fullWidth ? '100%' : 'fit-content',
  padding: '5px 20px',
  margin: margin,
}));
