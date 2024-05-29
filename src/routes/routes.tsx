import AdminLayout from 'layouts/admin_layout/AdminLayout';
import ClientLayout from 'layouts/client_layout/ClientLayout';
import LoginLayout from 'layouts/login_layout/LoginLayout';
import DashboardPage from 'pages/Auth/admin/Dashboard/DashboardPage';
import CreateAccountForStaff from 'pages/Auth/admin/ManageUser/CreateAccountForStaff';
import UserAdmin from 'pages/Auth/admin/UserAdmin/UserAdmin';
import LoginPage from 'pages/Auth/login/LoginPage';
import RegisterPage from 'pages/Auth/login/RegisterPage';
import CheckoutPage from 'pages/clientPages/CheckoutPage/CheckoutPage';
import HomePage from 'pages/clientPages/HomePage';
import ManageInfor from 'pages/clientPages/ManageInfo/ManageInfor';
import ManageOrderTracking from 'pages/clientPages/ManageOrderTracking/ManageOrderTracking';
import ManageProduct from 'pages/clientPages/ManageProduct/ManageProduct';
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
  { path: '/product', component: ManageProduct, layout: ClientLayout },
  { path: '/product/:id', component: ManageProductDetailsPage, layout: ClientLayout }
];

const privateRoutes: RouteProps[] = [
  { path: '/user/:id', component: ManageInfor, layout: ClientLayout },
  { path: '/checkout', component: CheckoutPage, layout: ClientLayout },
  { path: '/orderTracking', component: ManageOrderTracking, layout: ClientLayout }
];

const adminRoutes: RouteProps[] = [
  { path: '/admin', component: DashboardPage, layout: AdminLayout },
  { path: '/admin/createAccount', component: CreateAccountForStaff, layout: AdminLayout },
  { path: '/admin/user', component: UserAdmin, layout: AdminLayout }
];

// const staffRoutes: RouteProps[] = [];

export { publicRoutes, adminRoutes, privateRoutes };
