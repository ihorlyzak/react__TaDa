import React from 'react';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useRoutesPaths } from 'Routes';
import { TaDaLink } from 'Shared/TaDaLink/TaDaLink';
import { AccountActionsBox } from './Components';

export const AccountActions = () => {
  const location = useLocation();
  const { routes } = useRoutesPaths();

  const isSignUpPage = location.pathname.includes(routes.signUp());
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
