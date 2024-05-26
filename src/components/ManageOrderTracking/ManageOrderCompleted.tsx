import { useState, useEffect } from 'react';
import { Table, Tooltip, Button, Pagination, Tag } from 'antd';
import { FaEye } from 'react-icons/fa';

const mockData = [
  {
    key: '1',
    orderId: 'ORD001',
    price: '100.00',
    transactionDate: '2023-05-01',
    status: 'Hoàn thành'
  },
  {
    key: '2',
    orderId: 'ORD002',
    price: '200.00',
    transactionDate: '2023-05-02',
    status: 'Hoàn thành'
  },
  {
    key: '3',
    orderId: 'ORD003',
    price: '150.00',
    transactionDate: '2023-05-03',
    status: 'Hoàn thành'
  },
  {
    key: '4',
    orderId: 'ORD004',
    price: '150.00',
    transactionDate: '2023-05-04',
    status: 'Hoàn thành'
  },
  {
    key: '5',
    orderId: 'ORD005',
    price: '300.00',
    transactionDate: '2023-05-05',
    status: 'Hoàn thành'
  },
  {
    key: '6',
    orderId: 'ORD006',
    price: '250.00',
    transactionDate: '2023-05-06',
    status: 'Hoàn thành'
  },
  {
    key: '7',
    orderId: 'ORD007',
    price: '400.00',
    transactionDate: '2023-05-07',
    status: 'Hoàn thành'
  },
  {
    key: '8',
    orderId: 'ORD008',
    price: '350.00',
    transactionDate: '2023-05-08',
    status: 'Hoàn thành'
  },
  {
    key: '9',
    orderId: 'ORD009',
    price: '450.00',
    transactionDate: '2023-05-09',
    status: 'Hoàn thành'
  },
  {
    key: '10',
    orderId: 'ORD010',
    price: '450.00',
    transactionDate: '2023-05-09',
    status: 'Hoàn thành'
  }
];

export default function ManageOrderCompleted() {
  const [pagination, setPagination] = useState({ current: 1, pageSize: 5, total: mockData.length });
  const [currentData, setCurrentData] = useState(mockData.slice(0, pagination.pageSize));

  useEffect(() => {
    const startIdx = (pagination.current - 1) * pagination.pageSize;
    const endIdx = startIdx + pagination.pageSize;
    setCurrentData(mockData.slice(startIdx, endIdx));
  }, [pagination]);

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, current: page });
  };

  const columns = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      render: (_: any, __: any, index: number) => {
        const calculatedIndex = (pagination.current - 1) * pagination.pageSize + index + 1;
        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span>{calculatedIndex}</span>
          </div>
        );
      },
      width: '5%'
    },
    {
      title: 'Mã đơn hàng',
      dataIndex: 'orderId',
      key: 'orderId',
      width: '20%'
    },
    {
      title: 'Giá tiền',
      dataIndex: 'price',
      key: 'price',
      width: '15%',
      render: (price: string) => `${price} VND`
    },
    {
      title: 'Ngày giao dịch',
      dataIndex: 'transactionDate',
      key: 'transactionDate',
      width: '20%'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color;
        switch (status) {
          case 'Chờ thanh toán':
            color = 'yellow';
            break;
          case 'Đang vận chuyển':
            color = 'blue';
            break;
          case 'Chờ giao hàng':
            color = 'purple';
            break;
          case 'Hoàn thành':
            color = 'green';
            break;
          default:
            color = 'default';
        }
        return <Tag color={color}>{status}</Tag>;
      },
      width: '15%'
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Tooltip title='Xem chi tiết đơn hàng'>
          <Button icon={<FaEye style={{ fontSize: '25px' }} />} />
        </Tooltip>
      ),
      width: '10%'
    }
  ];
  return (
    <div className='mx-auto w-full min-h-screen space-y-4'>
      <Table columns={columns} dataSource={currentData} pagination={false} rowKey='key' scroll={{ x: '100%' }} />
      <Pagination
        className='flex justify-end'
        current={pagination.current}
        pageSize={pagination.pageSize}
        total={pagination.total}
        onChange={handlePageChange}
      />
    </div>
  );
}
