import React, { useEffect, useState } from 'react';
import { Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useNavigate } from 'react-router-dom';
import { cn } from 'utils/cn';
import { MdDashboard, MdManageAccounts, MdInventory, MdOutlineMenu } from 'react-icons/md';
import { FaUsersViewfinder } from 'react-icons/fa6';
import { IoMdPersonAdd } from 'react-icons/io';

export default function MySider() {
  type MenuItem = Required<MenuProps>['items'][number];

  function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return {
      key,
      icon,
      children,
      label
    } as MenuItem;
  }

  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 1280);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getConditionalItems = (): MenuItem[] => {
    return [
      getItem('Thống kê', 'dashboard', <MdDashboard className='text-base' />),
      getItem('Xem tất cả hàng tồn kho', 'inventory', <MdInventory className='text-base' />),
      getItem('Quản lí tài khoản', 'sub2', <MdManageAccounts className='text-base' />, [
        getItem('Xem tất cả tài khoản', 'accountAll', <FaUsersViewfinder className='text-base' />),
        getItem('Tạo tài khoản cho nhân viên', 'createAccount', <IoMdPersonAdd className='text-base' />)
      ])
    ];
  };
  const navUrl = new Map<string, string>();
  navUrl
    .set('dashboard', '/admin')
    .set('accountAll', '/admin/user')
    .set('createAccount', '/admin/createAccount')
    .set('inventory', '/admin/inventory');

  return (
    <>
      <Sider
        theme='light'
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className='overflow-hidden border-r-[1px]'
        trigger={
          <div className='w-full border-r-[1px] border-t-[1px] flex items-center justify-center text-2xl pt-2'>
            <MdOutlineMenu />
          </div>
        }
        width={256}
      >
        <div className='border-r-[1px] border-gray-200'>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Website%2Fvoguary_logo_orange.jpg?alt=media&token=82366765-ee4d-4cf0-92c4-e6d6d3fa0e89'
            alt='logo'
            className={cn('mx-auto max-w-[100px] max-h-[100px]', {
              hidden: collapsed
            })}
          />
          <img
            src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Website%2Fvoguary_logo_orange.jpg?alt=media&token=82366765-ee4d-4cf0-92c4-e6d6d3fa0e89'
            alt='logo'
            className={cn('mx-auto max-w-[50px]  py-2', {
              hidden: !collapsed
            })}
          />
        </div>
        <Menu
          defaultSelectedKeys={['dashboard']}
          mode='inline'
          items={getConditionalItems()}
          onSelect={(e) => {
            const link = navUrl.get(e.key);
            if (link) {
              navigate(link);
            }
          }}
          className='text-base'
        ></Menu>
      </Sider>
    </>
  );
}
