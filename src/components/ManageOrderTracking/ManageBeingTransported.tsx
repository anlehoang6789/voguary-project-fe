import { useState, useEffect } from 'react';
import { Table, Tooltip, Button, Pagination, Tag, Modal } from 'antd';
import { FaEye } from 'react-icons/fa';

const mockData = [
  {
    key: '1',
    orderId: 'ORD001',
    price: '100.00',
    transactionDate: '2023-05-01',
    status: 'Đang vận chuyển'
  },
  {
    key: '2',
    orderId: 'ORD002',
    price: '200.00',
    transactionDate: '2023-05-02',
    status: 'Đang vận chuyển'
  },
  {
    key: '3',
    orderId: 'ORD003',
    price: '150.00',
    transactionDate: '2023-05-03',
    status: 'Đang vận chuyển'
  },
  {
    key: '4',
    orderId: 'ORD004',
    price: '150.00',
    transactionDate: '2023-05-04',
    status: 'Đang vận chuyển'
  },
  {
    key: '5',
    orderId: 'ORD005',
    price: '300.00',
    transactionDate: '2023-05-05',
    status: 'Đang vận chuyển'
  },
  {
    key: '6',
    orderId: 'ORD006',
    price: '250.00',
    transactionDate: '2023-05-06',
    status: 'Đang vận chuyển'
  },
  {
    key: '7',
    orderId: 'ORD007',
    price: '400.00',
    transactionDate: '2023-05-07',
    status: 'Đang vận chuyển'
  },
  {
    key: '8',
    orderId: 'ORD008',
    price: '350.00',
    transactionDate: '2023-05-08',
    status: 'Đang vận chuyển'
  },
  {
    key: '9',
    orderId: 'ORD009',
    price: '450.00',
    transactionDate: '2023-05-09',
    status: 'Đang vận chuyển'
  },
  {
    key: '10',
    orderId: 'ORD010',
    price: '450.00',
    transactionDate: '2023-05-09',
    status: 'Đang vận chuyển'
  }
];

interface Order {
  key: string;
  orderId: string;
  price: string;
  transactionDate: string;
  status: string;
}

export default function ManageBeingTransported() {
  const [pagination, setPagination] = useState({ current: 1, pageSize: 5, total: mockData.length });
  const [currentData, setCurrentData] = useState(mockData.slice(0, pagination.pageSize));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  useEffect(() => {
    const startIdx = (pagination.current - 1) * pagination.pageSize;
    const endIdx = startIdx + pagination.pageSize;
    setCurrentData(mockData.slice(startIdx, endIdx));
  }, [pagination]);

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, current: page });
  };

  const handleViewDetails = (order: Order) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
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
          case 'Đã hủy':
            color = 'red';
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
      render: (_: any, record: Order) => (
        <Tooltip title='Xem chi tiết đơn hàng'>
          <Button icon={<FaEye style={{ fontSize: '25px' }} />} onClick={() => handleViewDetails(record)} />
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

      <Modal
        title={<span className='flex justify-center text-xl pb-3'>Chi tiết đơn hàng</span>}
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key='close' onClick={handleCloseModal}>
            Đóng
          </Button>
        ]}
      >
        {selectedOrder && (
          <div className='bg-[#ffffff] pl-8 pr-8 pt-2 pb-8 '>
            <div className='flex gap-5 mb-auto overflow-y-auto'>
              <div className='flex flex-col items-center flex-shrink-0'>
                {' '}
                <p className='font-semibold text-sm text-dimGray pb-2'>Áo dài Tết</p>
                <img
                  src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C3%A1o%20d%C3%A0i.jpg?alt=media&token=4de95e39-5ddf-4b30-982b-cafdbea76e40'
                  alt='Ao dai'
                  className='product-img block rounded-md'
                  width='160px'
                />
                <p className='font-thin text-sm text-dimGray pt-2'>Số lượng: 1</p>
                <p className='font-thin text-sm text-dimGray pt-2 pb-2'>21/03/2024 - 24/03/2024</p>
              </div>

              <div className='flex flex-col items-center flex-shrink-0'>
                {' '}
                <p className='font-semibold text-sm text-dimGray pb-2'>Áo dài Tết</p>
                <img
                  src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C3%A1o%20d%C3%A0i.jpg?alt=media&token=4de95e39-5ddf-4b30-982b-cafdbea76e40'
                  alt='Ao dai'
                  className='product-img block rounded-md'
                  width='160px'
                />
                <p className='font-thin text-sm text-dimGray pt-2'>Số lượng: 1</p>
                <p className='font-thin text-sm text-dimGray pt-2 pb-2'>21/03/2024 - 24/03/2024</p>
              </div>

              <div className='flex flex-col items-center flex-shrink-0'>
                {' '}
                <p className='font-semibold text-sm text-dimGray pb-2'>Đầm dạ hội</p>
                <img
                  src='https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C4%91%E1%BA%A7m.jpg?alt=media&token=9bb1841e-b10f-4bc5-b5c9-ec19e87121c5'
                  alt='Dam'
                  className='product-img block rounded-md'
                  width='160px'
                />
                <p className='font-thin text-sm text-dimGray pt-2'>Số lượng: 1</p>
                <p className='font-thin text-sm text-dimGray pt-2 pb-2'>21/03/2024 - 24/03/2024</p>
              </div>
            </div>

            <div className='border-t-2 border-t-gainsboro pt-4 pl-8 pr-8 mt-7'>
              <div className='orderid flex justify-between mb-3'>
                <span className='inline-block'>Mã đơn hàng</span>
                <span className='inline-block'>
                  <span className='inline-block' id='orderid'>
                    {selectedOrder.orderId}
                  </span>
                </span>
              </div>

              <div className='name flex justify-between mb-3'>
                <span className='inline-block'>Tên</span>
                <span className='inline-block'>
                  <span className='inline-block' id='name'>
                    Hà Gia Minh
                  </span>
                </span>
              </div>

              <div className='address flex justify-between mb-3'>
                <span className='inline-block'>Địa chỉ</span>
                <span className='inline-block text-right' style={{ maxWidth: '200px', wordWrap: 'break-word' }}>
                  <span className='inline-block' id='address'>
                    12 đường số 12, phường 10, quận Tân Bình, tp. Hồ Chí Minh
                  </span>
                </span>
              </div>

              <div className='phone flex justify-between mb-3'>
                <span className='inline-block'>Số điện thoại</span>
                <span className='inline-block'>
                  <span className='inline-block' id='phone'>
                    0123456789
                  </span>
                </span>
              </div>

              <div className='payment flex justify-between mb-3'>
                <span className='inline-block'>Hình thức thanh toán</span>
                <span className='inline-block'>
                  <span className='inline-block' id='payment'>
                    COD
                  </span>
                </span>
              </div>

              <div className='flex justify-between mb-3'>
                <span className='inline-block'>Ngày giao dịch</span>
                <span className='inline-block'>
                  <span className='inline-block' id='status'>
                    {selectedOrder.transactionDate}
                  </span>
                </span>
              </div>

              <div className='flex justify-between mb-3'>
                <span className='inline-block'>Trạng thái đơn hàng</span>
                <span className='inline-block'>
                  <span className='inline-block' id='status'>
                    {selectedOrder.status}
                  </span>
                </span>
              </div>

              <div className='total flex justify-between border-t-2 pt-3 text-lg font-bold text-оnух'>
                <span className='inline-block'>Tổng cộng</span>{' '}
                <span className='inline-block'>
                  <span className='inline-block' id='total'>
                    {selectedOrder.price}
                  </span>{' '}
                  VND
                </span>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
