import ManageAllOrder from 'components/ManageOrderTracking/ManageAllOrder';
import { ManageOrderTrackingMenu } from './ManageOrderTracking.enum';
import ManageWaitingForPayment from 'components/ManageOrderTracking/ManageWaitingForPayment';
import ManageBeingTransported from 'components/ManageOrderTracking/ManageBeingTransported';
import ManageWaitingForDelivery from 'components/ManageOrderTracking/ManageWaitingForDelivery';
import ManageOrderCompleted from 'components/ManageOrderTracking/ManageOrderCompleted';
import { useState } from 'react';
import { Divider, Menu, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import ManageOrderCancelled from 'components/ManageOrderTracking/ManageOrderCancelled';

interface ManageOrderTrackingProps {
  type: ManageOrderTrackingMenu;
  MenuTitle: string;
  component: JSX.Element;
}
const { Title } = Typography;

export default function ManageOrderTracking() {
  const userDataWithLoginGoogle = useSelector((state: RootState) => state.authLoginGoogle.user);
  const [selectedComponent, setSelectedComponent] = useState<JSX.Element | null>(<ManageAllOrder />);
  const [defaultSelectedKey, setDefaultSelectedKey] = useState<string>('0');

  const menuList: ManageOrderTrackingProps[] = [
    {
      type: ManageOrderTrackingMenu.ALL_ORDERS,
      MenuTitle: 'Tất cả',
      component: <ManageAllOrder />
    },
    {
      type: ManageOrderTrackingMenu.WAITING_FOR_PAYMENT,
      MenuTitle: 'Chờ Voguary xác nhận',
      component: <ManageWaitingForPayment />
    },
    {
      type: ManageOrderTrackingMenu.BEING_TRANSPORTED,
      MenuTitle: 'Đang vận chuyển',
      component: <ManageBeingTransported />
    },
    {
      type: ManageOrderTrackingMenu.WAITING_FOR_DELIVERY,
      MenuTitle: 'Chờ giao hàng',
      component: <ManageWaitingForDelivery />
    },
    {
      type: ManageOrderTrackingMenu.COMPLETED,
      MenuTitle: 'Đã hoàn thành',
      component: <ManageOrderCompleted />
    },
    {
      type: ManageOrderTrackingMenu.CANCELLED,
      MenuTitle: 'Đã hủy',
      component: <ManageOrderCancelled />
    }
  ];

  const handleClickMenu = (component: JSX.Element, key: string) => {
    setSelectedComponent(component);
    setDefaultSelectedKey(key);
  };

  return (
    <div className='w-full md:w-4/5 mx-auto min-h-screen'>
      <div className='mb-4'>
        <Title level={3}>Đơn hàng của {userDataWithLoginGoogle?.name}</Title>
      </div>
      <div className='w-full'>
        <Menu
          mode='horizontal'
          selectedKeys={[defaultSelectedKey]}
          onClick={(e) => {
            const selected = menuList[parseInt(e.key, 10)];
            handleClickMenu(selected.component, e.key);
          }}
          className='w-full flex justify-center items-center p-4 text-lg '
        >
          {menuList.map((item, index) => (
            <Menu.Item key={index.toString()}>{item.MenuTitle}</Menu.Item>
          ))}
        </Menu>
      </div>
      <Divider />
      <div className='w-full mt-4'>{selectedComponent}</div>
    </div>
  );
}
