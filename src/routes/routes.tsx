import AdminLayout from 'layouts/admin_layout/AdminLayout';
import UserAdmin from 'layouts/admin_layout/UserAdmin/UserAdmin';
import AllProduct from 'layouts/client_layout/AllProductClient/AllProduct';
import ClientLayout from 'layouts/client_layout/ClientLayout';
import LoginLayout from 'layouts/login_layout/LoginLayout';
import DashboardPage from 'pages/Auth/admin/Dashboard/DashboardPage';
import LoginPage from 'pages/Auth/login/LoginPage';
import RegisterPage from 'pages/Auth/login/RegisterPage';
import HomePage from 'pages/clientPages/HomePage';

import ManageInfor from 'pages/clientPages/ManageInfo/ManageInfor';
import ManageProductDetailsPage from 'pages/clientPages/ManageProductDetails/ManageProductDetailsPage';
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
  { path: '/*', component: NotFoundPage, layout: ClientLayout },
  { path: '/product', component: AllProduct, layout: ClientLayout },
  { path: '/product/:id', component: ManageProductDetailsPage, layout: ClientLayout }
];

const privateRoutes: RouteProps[] = [
  { path: '/user/:id', component: ManageInfor, layout: ClientLayout },
  { path: '/admin/user', component: UserAdmin, layout: AdminLayout }
];

const adminRoutes: RouteProps[] = [{ path: '/admin', component: DashboardPage, layout: AdminLayout }];

// const staffRoutes: RouteProps[] = [];

export { publicRoutes, adminRoutes, privateRoutes };
