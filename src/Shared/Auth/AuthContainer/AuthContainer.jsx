import { AuthBox } from '../AuthBox';
import { AuthGrid } from '../AuthGrid';

export const AuthContainer = ({ children }) => (
  <AuthGrid container>
    <AuthBox>{children}</AuthBox>
  </AuthGrid>
);
