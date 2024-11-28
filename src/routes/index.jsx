import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project-imports
import ComponentsRoutes from './ComponentsRoutes';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

import Loadable from 'components/Loadable';
import { SimpleLayoutType } from 'config';
import SimpleLayout from 'layout/Dashboard';

// render - landing page
// const PagesLanding = Loadable(lazy(() => import('pages/landing')));

const PagesDashboardDefault = Loadable(lazy(() => import('pages/Dashboard/default')));
// ==============================|| ROUTES RENDER ||============================== //

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <SimpleLayout layout={SimpleLayoutType.LANDING} />,
      children: [
        {
          index: true,
          element: <PagesDashboardDefault />
        }
      ]
    },
    LoginRoutes,
    ComponentsRoutes,
    MainRoutes
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
