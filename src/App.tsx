import MobileMaintenance from 'components/MobileMaintenance';
import { useEffect, useState } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { Route, Routes } from 'react-router-dom';
import { adminRoutes, privateRoutes, publicRoutes, staffRoutes } from 'routes/routes';

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
          return <Route key={index} path={path} element={<Layout children={<Component />} />} />;
        })}

        {adminRoutes.map(({ layout, component, path }, index) => {
          const Layout = layout;
          const Component = component;
          return <Route key={index} path={path} element={<Layout children={<Component />} />} />;
        })}

        {privateRoutes.map(({ layout, component, path }, index) => {
          const Layout = layout;
          const Component = component;
          return <Route key={index} path={path} element={<Layout children={<Component />} />} />;
        })}

        {staffRoutes.map(({ layout, component, path }, index) => {
          const Layout = layout;
          const Component = component;
          return <Route key={index} path={path} element={<Layout children={<Component />} />} />;
        })}
      </Routes>
    </>
  );
}

export default App;
