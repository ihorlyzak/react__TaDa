import { AuthForm, AuthImage } from 'design-system';
import { FullScreenLayout } from 'layouts';

export const SignUp = () => (
  <FullScreenLayout>
    <AuthForm isSignUp />
    <AuthImage />
  </FullScreenLayout>
);
