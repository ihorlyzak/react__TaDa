import { Typography } from '@mui/material';

export const NotFoundInfo = () => {
  return (
    <>
      <Typography
        variant='h2'
        component='h2'
        color='var(--orange)'
        fontWeight='700'
        mb={1}
      >
        Uh oh!
      </Typography>
      <Typography variant='h4' component='h4' color='var(--orange)' mb={1}>
        404 Error: Page not found
      </Typography>
      <Typography variant='p' component='p' color='var(--orange)'>
        It looks like you tried your best, but the page you`re looking for does
        not exist
      </Typography>
    </>
  );
};
