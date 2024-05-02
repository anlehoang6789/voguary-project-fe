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
      getItem('Thống kê', 'dashboard', <MdDashboard />),
      getItem('Xem tất cả hàng tồn kho', 'inventory', <MdInventory />),
      getItem('Quản lí tài khoản', 'sub2', <MdManageAccounts />, [
        getItem('Xem tất cả tài khoản', 'accountAll', <FaUsersViewfinder />),
        getItem('Tạo tài khoản cho nhân viên', 'createAccount', <IoMdPersonAdd />)
      ])
    ];
  };
  const navUrl = new Map<string, string>();
  navUrl.set('dashboard', '/admin/');

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
            src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Website%2Flogo_white_bg.jpg?alt=media&token=d4b8a3be-870c-469c-b93f-a7c8cc6a6bbe'
            alt='logo'
            className={cn('mx-auto max-w-[100px] max-h-[100px]', {
              hidden: collapsed
            })}
          />
          <img
            src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Website%2Flogo_white_bg.jpg?alt=media&token=d4b8a3be-870c-469c-b93f-a7c8cc6a6bbe'
            alt='logo'
            className={cn('mx-auto max-w-[50px]  py-2', {
              hidden: !collapsed
            })}
          />
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          mode='inline'
          items={getConditionalItems()}
          onSelect={(e) => {
            const link = navUrl.get(e.key);
            if (link) {
              navigate(link);
            }
          }}
        ></Menu>
      </Sider>
    </>
  );
}
