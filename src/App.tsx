import MobileMaintenance from 'components/MobileMaintenance';
import ProtectedRoutes from 'components/ProtectedRoutes';
import { useEffect, useState } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { Route, Routes } from 'react-router-dom';
import { adminRoutes, privateRoutes, publicRoutes, staffRoutes } from 'routes/routes';
import { RoleType } from 'slice/authLoginAPISlice';

function App() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(isMobile || isTablet); // Sử dụng hàm isMobile và isTablet từ thư viện react-device-detect

  useEffect(() => {
    const handleResize = () => {
      // Không cần kiểm tra kích thước màn hình nữa, sử dụng hàm isMobile và isTablet từ thư viện react-device-detect để bắt thiết bị đăng nhập
      setIsMobileOrTablet(isMobile || isTablet);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobileOrTablet) return <MobileMaintenance />;
  return (
    <>
      <Routes>
        {publicRoutes.map(({ layout, component, path }, index) => {
          const Layout = layout;
          const Component = component;
          return (
            <Route
              key={index}
              path={path}
              element={
                <ProtectedRoutes allowedRoles={[RoleType.GUEST, RoleType.CUSTOMER]} redirectPath='/login'>
                  <Layout children={<Component />} />
                </ProtectedRoutes>
              }
            />
          );
        })}

        {adminRoutes.map(({ layout, component, path }, index) => {
          const Layout = layout;
          const Component = component;
          return (
            <Route
              key={index}
              path={path}
              element={
                <ProtectedRoutes allowedRoles={[RoleType.ADMIN]} redirectPath='/*'>
                  <Layout children={<Component />} />
                </ProtectedRoutes>
              }
            />
          );
        })}

        {privateRoutes.map(({ layout, component, path }, index) => {
          const Layout = layout;
          const Component = component;
          return (
            <Route
              key={index}
              path={path}
              element={
                <ProtectedRoutes allowedRoles={[RoleType.CUSTOMER]} redirectPath='/login'>
                  <Layout children={<Component />} />
                </ProtectedRoutes>
              }
            />
          );
        })}

        {staffRoutes.map(({ layout, component, path }, index) => {
          const Layout = layout;
          const Component = component;
          return (
            <Route
              key={index}
              path={path}
              element={
                <ProtectedRoutes allowedRoles={[RoleType.STAFF]} redirectPath='/*'>
                  <Layout children={<Component />} />
                </ProtectedRoutes>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
