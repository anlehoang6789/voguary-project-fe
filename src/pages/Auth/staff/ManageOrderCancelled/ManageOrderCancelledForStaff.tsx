// src/components/ManageOrderCancelledForStaff.tsx
import React, { useState } from 'react';
import { Table, Button, Input, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Order } from 'types/Order.type';
import { FaEye } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';

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
    orderTotal: 100
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
    orderTotal: 100
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
    orderTotal: 100
  }
];

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
    render: () => (
      <div className='flex justify-center space-x-2 items-center'>
        <Button type='primary' className='flex items-center'>
          <FaEye className='mr-2' /> Xem chi tiết
        </Button>
      </div>
    ),
    align: 'center'
  }
];

export default function ManageOrderCancelledForStaff() {
  const [current, setCurrent] = useState(1);
  const [searchText, setSearchText] = useState('');

  const onChange = (page: number) => {
    setCurrent(page);
  };

  const onSearch = (value: string) => {
    setSearchText(value);
  };

  const filteredOrders = mockOrders.filter((order) =>
    order.returnReason.toLowerCase().includes(searchText.toLowerCase())
  );

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
    </div>
  );
}
