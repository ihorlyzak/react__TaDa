import { AuthBox, AuthGrid } from './components';

const AuthContainer = ({ children }) => (
  <AuthGrid container>
    <AuthBox>{children}</AuthBox>
  </AuthGrid>
);

export default AuthContainer;
