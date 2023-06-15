import { RouterController } from './RouterController';
import { useRoutes } from './hooks';

export const AppRoutes = () => {
  const routes = useRoutes();

  return <RouterController routes={routes} />;
};
