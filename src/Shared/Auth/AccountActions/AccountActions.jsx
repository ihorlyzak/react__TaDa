import React from 'react';
import { Typography } from '@mui/material';
import { useRoutesPaths } from 'Routes';
import { TaDaLink } from 'Shared/TaDaLink/TaDaLink';
import { AccountActionsBox } from './Components';
import { useAuthPage } from 'hooks/useAuthPage';

export const AccountActions = () => {
  const { isSignUpPage } = useAuthPage();
  const { routes } = useRoutesPaths();

  const routeTo = isSignUpPage ? routes.base() : routes.signUp();

  const text = {
    title: isSignUpPage
      ? 'Already have an account?'
      : 'Do not have an account?',
    buttonTitle: isSignUpPage ? 'Sign In' : 'Sign up',
  };

  return (
    <AccountActionsBox>
      <Typography variant='body1' component='h2'>
        {text.title}
      </Typography>

      <TaDaLink to={routeTo}>{text.buttonTitle}</TaDaLink>
    </AccountActionsBox>
  );
};
