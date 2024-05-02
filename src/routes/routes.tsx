import AdminLayout from 'layouts/admin_layout/AdminLayout';
import ClientLayout from 'layouts/client_layout/ClientLayout';
import LoginLayout from 'layouts/login_layout/LoginLayout';
import DashboardPage from 'pages/Auth/admin/Dashboard/DashboardPage';
import LoginPage from 'pages/Auth/login/LoginPage';
import RegisterPage from 'pages/Auth/login/RegisterPage';
import HomePage from 'pages/clientPages/HomePage';
import NotFoundPage from 'pages/errorPages/NotFoundPage';

interface LayoutProps {
  children: React.ReactNode;
  //requiredRole?: RoleType
  //whenRoleUnAuthorized?: string
}

interface RouteProps {
  path: string;
  component: () => JSX.Element;
  layout: (children: LayoutProps) => JSX.Element;
}

const publicRoutes: RouteProps[] = [
  { path: '/', component: HomePage, layout: ClientLayout },
  { path: '/login', component: LoginPage, layout: LoginLayout },
  { path: '/register', component: RegisterPage, layout: LoginLayout },
  { path: '/*', component: NotFoundPage, layout: ClientLayout }
];

// const privateRoutes: RouteProps[] = [];

const adminRoutes: RouteProps[] = [{ path: '/admin', component: DashboardPage, layout: AdminLayout }];

// const staffRoutes: RouteProps[] = [];

export { publicRoutes, adminRoutes };