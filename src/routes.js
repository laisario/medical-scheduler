import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import UserPage from './pages/UserPage';
import AgendaPage from './pages/AgendaPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import DashboardAppPage from './pages/DashboardAppPage';
import AppointmentPage from './pages/AppointmentsPage';
import FinancialPage from './pages/ FinancialPage';
import RoomsPage from './pages/RoomsPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        {
          path: 'home',
          element: <DashboardAppPage />,
        },
        {
          path: 'pacientes',
          element: <UserPage />,
        },
        {
          path: 'agenda',
          element: <AgendaPage />,
        },
        {
          path: 'consultas',
          element: <AppointmentPage />,
        },
        {
          path: 'financeiro',
          element: <FinancialPage />,
        },
        {
          path: 'salas',
          element: <RoomsPage />,
        },
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
  ]);

  return routes;
}
