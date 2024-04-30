import Footer from 'layouts/client_layout/FooterClient/Footer';
import Header from 'layouts/client_layout/HeaderClient/Header';

export interface ClientLayoutProps {
  children: React.ReactNode;
  //requiredRole?: RoleType
  //whenRoleUnAuthorized?: string
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Header />
      <div className='mt-4 py-4'>{children}</div>
      <Footer />
    </>
  );
}
