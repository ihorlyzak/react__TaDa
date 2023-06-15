import { Button } from '@mui/material';
import styled from 'styled-components';

export const TaDaButton = ({ text, onClick, ...rest }) => {
  return (
    <CustomButton onClick={onClick} {...rest}>
      {text}
    </CustomButton>
  );
};

const CustomButton = styled(Button)(({ fullWidth, margin }) => ({
  width: fullWidth ? '100%' : 'fit-content',
  padding: '5px 20px',
  margin: margin,
}));
