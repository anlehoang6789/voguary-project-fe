import { useState } from 'react';
import { Table, Tooltip, Button, Pagination, Tag, Modal } from 'antd';
import { FaEye } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useGetOrdersByUserIdQuery } from 'services/order.services';
import { ColumnsType } from 'antd/es/table';
import { OrderByUserIdItem } from 'types/Order.type';

const formatDateTime = (dateTimeString: string) => {
  const date = new Date(dateTimeString);
  const formattedDate = date.toLocaleDateString('vi-VN');
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${formattedDate} lúc ${hours}h${minutes}phút`;
};

interface Order {
  key: string;
  orderId: string;
  price: string;
  transactionDate: string;
  status: string;
}

export default function ManageWaitingForPayment() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  //Lấy data từ redux store sau khi đăng nhập từ api thành công
  const userIdString = useSelector((state: RootState) => state.authLoginAPI.userId);
  const userId = parseInt(userIdString || '0');
  const {
    data: orderTrackingData,
    error,
    isFetching
  } = useGetOrdersByUserIdQuery({ userId, pageNumber: currentPage, pageSize });
  const orderTrackingChildren = orderTrackingData?.data || [];
  //Filter status để hiển thị đơn hàng đang vận chuyển
  const filteredOrdersStatus = orderTrackingChildren.filter((order) => order.orderStatus === 'Chờ xác nhận');
  const totalCount = filteredOrdersStatus.length;
  const currentData = filteredOrdersStatus.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // const handleViewDetails = (order: Order) => {
  //   setSelectedOrder(order);
  //   setIsModalVisible(true);
  // };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  const columns: ColumnsType<OrderByUserIdItem> = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      render: (_: any, __: any, index: number) => {
        const calculatedIndex = (currentPage - 1) * pageSize + index + 1;
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
      dataIndex: 'orderCode',
      key: 'orderCode',
      width: '10%'
    },
    {
      title: 'Tổng giá tiền đơn hàng',
      dataIndex: 'orderTotal',
      key: 'orderTotal',
      render: (total: number) => `${total.toLocaleString()} VND`,
      width: '15%'
    },
    {
      title: 'Ngày giao dịch',
      dataIndex: 'paymentTime',
      key: 'paymentTime',
      render: (text: string) => formatDateTime(text),
      width: '20%'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'orderStatus',
      key: 'orderStatus',
      render: (status: string) => {
        let color;
        switch (status) {
          case 'Chờ xác nhận':
            color = 'yellow';
            break;
          case 'Đang vận chuyển':
            color = 'blue';
            break;
          case 'Chờ giao hàng':
            color = 'purple';
            break;
          case 'Đã hoàn thành':
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
      render: (_: any) => (
        <Tooltip title='Xem chi tiết đơn hàng'>
          <Button icon={<FaEye style={{ fontSize: '25px' }} />} />
        </Tooltip>
      ),
      width: '10%'
    }
  ];

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className='mx-auto w-full min-h-screen space-y-4'>
      <Table
        columns={columns}
        dataSource={currentData}
        pagination={false}
        loading={isFetching}
        rowKey='key'
        scroll={{ x: '100%' }}
      />
      <Pagination
        className='flex justify-end'
        current={currentPage}
        pageSize={pageSize}
        total={totalCount}
        onChange={handlePageChange}
      />

      <Modal
        title={<span className='flex justify-center text-xl pb-3'>Chi tiết đơn hàng</span>}
        open={isModalVisible}
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
