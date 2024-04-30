import { Layout } from 'antd';
import React from 'react';
import MySider from './SiderAdmin/Sider';
import HeaderAdmin from './HeaderAdmin/HeaderAdmin';
import ContentAdmin from './ContentAdmin/ContentAdmin';
import FooterAdmin from './FooterAdmin/FooterAdmin';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Layout className='min-h-screen'>
        <MySider />
        <Layout className='bg-white'>
          <HeaderAdmin />
          <ContentAdmin>{children}</ContentAdmin>
          <FooterAdmin />
        </Layout>
      </Layout>
    </>
  );
}
