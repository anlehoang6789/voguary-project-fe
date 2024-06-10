// src/components/ManageOrderCancelledForStaff.tsx
import React, { useState } from 'react';
import { Table, Button, Input, Tag, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Order } from 'types/Order.type';
import { FaEye } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';
import CustomGradientButton from 'components/CustomGradientButton';

const aodai =
  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C3%A1o%20d%C3%A0i.jpg?alt=media&token=4de95e39-5ddf-4b30-982b-cafdbea76e40';

const dam =
  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C4%91%E1%BA%A7m.jpg?alt=media&token=9bb1841e-b10f-4bc5-b5c9-ec19e87121c5';

// Mock data
const mockOrders: Order[] = [
  {
    orderId: 1,
    userId: [
      {
        userId: 1,
        userName: 'user1',
        fullName: 'User One',
        password: '',
        phone: '',
        gender: 1,
        dateOfBirth: '',
        email: '',
        profileImage: '',
        accountStatus: 'Active',
        addresses: [],
        carts: [],
        deposits: [],
        feedbacks: [],
        memberships: [],
        notifications: [],
        payments: [],
        ratings: [],
        rentalOrders: [],
        roles: []
      }
    ],
    orderStatus: 'Cancelled',
    datePlaced: '2023-01-01',
    dueDate: '2023-01-10',
    returnDate: '2023-01-10',
    returnReason: 'Tới hạn trả hàng',
    orderTotal: 100,
    orderImg: aodai
  },
  {
    orderId: 2,
    userId: [
      {
        userId: 2,
        userName: 'user2',
        fullName: 'User Two',
        password: '',
        phone: '',
        gender: 1,
        dateOfBirth: '',
        email: '',
        profileImage: '',
        accountStatus: 'Active',
        addresses: [],
        carts: [],
        deposits: [],
        feedbacks: [],
        memberships: [],
        notifications: [],
        payments: [],
        ratings: [],
        rentalOrders: [],
        roles: []
      }
    ],
    orderStatus: 'Cancelled',
    datePlaced: '2023-01-01',
    dueDate: '2023-01-10',
    returnDate: '2023-01-05',
    returnReason: 'Khách yêu cầu trả',
    orderTotal: 100,
    orderImg: dam
  },
  {
    orderId: 3,
    userId: [
      {
        userId: 3,
        userName: 'user3',
        fullName: 'User Three',
        password: '',
        phone: '',
        gender: 1,
        dateOfBirth: '',
        email: '',
        profileImage: '',
        accountStatus: 'Active',
        addresses: [],
        carts: [],
        deposits: [],
        feedbacks: [],
        memberships: [],
        notifications: [],
        payments: [],
        ratings: [],
        rentalOrders: [],
        roles: []
      }
    ],
    orderStatus: 'Cancelled',
    datePlaced: '2023-01-01',
    dueDate: '2023-01-10',
    returnDate: '2023-01-10',
    returnReason: 'Tới hạn trả hàng',
    orderTotal: 100,
    orderImg: aodai
  }
];

export default function ManageOrderCancelledForStaff() {
  const [current, setCurrent] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const onChange = (page: number) => {
    setCurrent(page);
  };

  const onSearch = (value: string) => {
    setSearchText(value);
  };

  const filteredOrders = mockOrders.filter((order) =>
    order.returnReason.toLowerCase().includes(searchText.toLowerCase())
  );

  const showModal = (order: Order) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns: ColumnsType<Order> = [
    {
      title: 'STT',
      dataIndex: 'orderId',
      key: 'orderId',
      render: (text) => <span>{text}</span>,
      align: 'center'
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'userId',
      key: 'userName',
      render: (users) => <span>{users[0].userName}</span>,
      align: 'center'
    },
    {
      title: 'Ngày đặt hàng',
      dataIndex: 'datePlaced',
      key: 'datePlaced',
      render: (text) => <span>{text}</span>,
      align: 'center'
    },
    {
      title: 'Ngày hết hạn',
      dataIndex: 'dueDate',
      key: 'dueDate',
      render: (text) => <span>{text}</span>,
      align: 'center'
    },
    {
      title: 'Ngày trả hàng',
      dataIndex: 'returnDate',
      key: 'returnDate',
      render: (text) => <span>{text}</span>,
      align: 'center'
    },
    {
      title: 'Lý do trả hàng',
      dataIndex: 'returnReason',
      key: 'returnReason',
      render: (text) => <Tag color={text === 'Tới hạn trả hàng' ? 'green' : 'red'}>{text}</Tag>,
      align: 'center'
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <div className='flex justify-center space-x-2 items-center'>
          <CustomGradientButton>
            <Button type='primary' className='flex items-center' onClick={() => showModal(record)}>
              <FaEye className='mr-2' /> Xem chi tiết
            </Button>
          </CustomGradientButton>
        </div>
      ),
      align: 'center'
    }
  ];

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Quản lý đơn hàng bị trả về</h1>
      <Input.Search
        placeholder='Tìm kiếm theo lí do trả hàng'
        allowClear
        enterButton={
          <Button
            type='primary'
            icon={<CiSearch />}
            style={{ background: 'linear-gradient(to right, #00c6ff, #0072ff)', borderColor: 'transparent' }}
          >
            Tìm kiếm
          </Button>
        }
        onSearch={onSearch}
        className='mb-4 w-[40%]'
      />
      <Table
        columns={columns}
        dataSource={filteredOrders}
        pagination={{
          current,
          pageSize: 10,
          total: filteredOrders.length,
          onChange: onChange
        }}
        rowKey='orderId'
      />

      <Modal
        title={<span className='flex justify-center text-xl pb-3'>Chi tiết đơn hàng</span>}
        visible={isModalVisible}
        footer={[
          <Button key='back' onClick={handleCancel}>
            OK
          </Button>
        ]}
        onCancel={handleCancel}
      >
        {selectedOrder && (
          <div>
            <div className='flex justify-center '>
              <img src={selectedOrder.orderImg} alt='Ao dai' className='product-img block rounded-md' width='160px' />
            </div>

            <div className='border-t-2 border-t-gainsboro pt-4 pl-8 pr-8 mt-5'>
              <div className=' flex justify-between mb-3'>
                <span className='inline-block font-semibold'>Tên khách hàng</span>
                <span className='inline-block'>
                  <span className='inline-block' id='datePlaced'>
                    {selectedOrder.userId[0].userName}
                  </span>
                </span>
              </div>

              <div className='orderid flex justify-between mb-3'>
                <span className='inline-block font-semibold'>Mã đơn hàng</span>
                <span className='inline-block'>
                  <span className='inline-block' id='orderid'>
                    {selectedOrder.orderId}
                  </span>
                </span>
              </div>

              <div className=' flex justify-between mb-3'>
                <span className='inline-block font-semibold'>Ngày đặt hàng</span>
                <span className='inline-block'>
                  <span className='inline-block' id='datePlaced'>
                    {selectedOrder.datePlaced}
                  </span>
                </span>
              </div>

              <div className=' flex justify-between mb-3'>
                <span className='inline-block font-semibold'>Ngày hết hạn</span>
                <span className='inline-block'>
                  <span className='inline-block' id='dueDate'>
                    {selectedOrder.dueDate}
                  </span>
                </span>
              </div>

              <div className=' flex justify-between mb-3'>
                <span className='inline-block font-semibold'>Ngày trả hàng</span>
                <span className='inline-block'>
                  <span className='inline-block' id='returnDate'>
                    {selectedOrder.returnDate}
                  </span>
                </span>
              </div>

              <div className='flex justify-between mb-6'>
                <span className='inline-block font-semibold'>Lý do trả hàng</span>
                <span className='inline-block '>
                  <span className='inline-block' id='payment'>
                    {selectedOrder.returnReason}
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
