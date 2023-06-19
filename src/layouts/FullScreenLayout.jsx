import { AuthLayoutBox, LayoutGrid } from './components';

export const FullScreenLayout = ({ children, ...rest }) => (
  <LayoutGrid container {...rest}>
    <AuthLayoutBox>{children}</AuthLayoutBox>
  </LayoutGrid>
);
