import MobileMaintenance from 'components/MobileMaintenance';
import { useEffect, useState } from 'react';
import { isMobile as initialIsMobile, isTablet, isAndroid, isIOS, isWinPhone } from 'react-device-detect';
import { Route, Routes } from 'react-router-dom';
import { adminRoutes, privateRoutes, publicRoutes, staffRoutes } from 'routes/routes';

function App() {
  const [isMobile, setIsMobile] = useState(initialIsMobile || isTablet || isAndroid || isIOS || isWinPhone);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      const tablet = /iPad|Tablet|Surface/.test(navigator.userAgent);
      setIsMobile(mobile || tablet);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) return <MobileMaintenance />;
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
