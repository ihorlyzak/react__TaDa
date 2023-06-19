import { AuthForm, AuthImage } from 'design-system';
import { FullScreenLayout } from 'layouts';

export const SignIn = () => {
  return (
    <FullScreenLayout>
      <AuthImage />
      <AuthForm />
    </FullScreenLayout>
  );
};
