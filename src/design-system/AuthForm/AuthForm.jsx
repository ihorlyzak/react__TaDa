import { TextField, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import {
  AccountActions,
  PasswordInput,
  TaDaBox,
  TaDaButton,
} from 'design-system';
import { AuthFormBox } from './components';

const AuthForm = ({ isSignUp = false }) => {
  const { loginValues, updateLoginValues, signIn, signUp } = useAuth();
  const authText = isSignUp ? 'Sign up' : 'Sign in';
  const handleSubmit = async e =>
    isSignUp ? await signUp(e) : await signIn(e);

  return (
    <AuthFormBox>
      <Typography
        variant='h5'
        component='h5'
        color='var(--orange)'
        fontWeight='700'
        mt={2}
      >
        {authText}
      </Typography>

      <AuthFormBox>
        <TaDaBox width='500px'>
          <TextField
            fullWidth
            id='outlined-basic'
            label='Login '
            variant='standard'
            size='medium'
            type='text'
            name='username'
            margin='normal'
            value={loginValues.username}
            onChange={updateLoginValues}
          />

          <PasswordInput
            fullWidth
            id='outlined-basic'
            variant='standard'
            size='medium'
            name='password'
            value={loginValues.password}
            onChange={updateLoginValues}
          />

          <TaDaButton
            fullWidth
            style={{ marginTop: '20px' }}
            size='large'
            variant='outlined'
            type='submit'
            color='primary'
            text={authText}
            onClick={handleSubmit}
          />
        </TaDaBox>

        <AccountActions />
      </AuthFormBox>
    </AuthFormBox>
  );
};

export default AuthForm;
