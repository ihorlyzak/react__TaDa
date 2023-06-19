import { Box } from '@mui/system';

const TaDaBox = ({ children, ...rest }) => {
  return <Box {...rest}>{children}</Box>;
};

export default TaDaBox;
