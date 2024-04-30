import { Footer } from 'antd/es/layout/layout';

export default function FooterAdmin() {
  return (
    <Footer className='border-t-[1px] border-gray-200 bg-white text-center'>
      ©{new Date().getFullYear()} Created by Voguary
    </Footer>
  );
}
