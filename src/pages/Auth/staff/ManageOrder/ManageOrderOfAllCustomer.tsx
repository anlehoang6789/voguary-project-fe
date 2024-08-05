import { Table, Tag, Button, Dropdown, Input, Menu, notification, Tooltip, Modal } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { CiSearch, CiFilter } from 'react-icons/ci';
import { useState } from 'react';
import CustomGradientButton from 'components/CustomGradientButton';
import { OrderDetailByStaffItem } from 'types/Order.type';
import { useGetOrderForStaffQuery, useUpdateOrderStatusMutation } from 'services/order.services';
import { FaEye } from 'react-icons/fa6';
import { CiEdit } from 'react-icons/ci';

const { Search } = Input;

const orderStatus = [
  { id: 1, status: 'Chờ xác nhận' },
  { id: 2, status: 'Chờ giao hàng' },
  { id: 3, status: 'Đang vận chuyển' },
  { id: 4, status: 'Đã hoàn thành' },
  { id: 5, status: 'Đã hủy' }
];

export default function ManageOrderOfAllCustomer() {
  const [current, setCurrent] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [filteredStatus, setFilteredStatus] = useState<number | null>(null);

  const { data, isFetching, refetch } = useGetOrderForStaffQuery({
    pageNumber: current,
    pageSize: 10,
    status: filteredStatus !== null ? filteredStatus : undefined
  });

  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  const onChange = (page: number) => {
    setCurrent(page);
  };

  const onSearch = (value: string) => {
    setSearchText(value);
  };

  const handleStatusFilterChange = (statusId: number | string) => {
    setFilteredStatus(statusId === 'Tất cả' ? null : Number(statusId));
  };

  const handleUpdateOrderStatus = async (orderId: number, statusId: number) => {
    try {
      await updateOrderStatus({ orderId, status: statusId }).unwrap();

      notification.success({ message: 'Cập nhật trạng thái thành công' });
      refetch();
    } catch (error) {
      console.error('Failed to update order status:', error);
      notification.error({ message: 'Cập nhật trạng thái thất bại' });
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderDetailByStaffItem | null>(null);

  const handleViewDetails = (order: OrderDetailByStaffItem) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedOrder(null);
  };

  const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString('vi-VN');
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${formattedDate} lúc ${hours}h${minutes}phút`;
  };

  const filteredData =
    data?.data.filter((order) => {
      const matchesSearch = order.username.toLowerCase().includes(searchText.toLowerCase());
      const matchesStatus = filteredStatus
        ? order.status === orderStatus.find((status) => status.id === filteredStatus)?.status
        : true;
      return matchesSearch && matchesStatus;
    }) || [];

  const columns: ColumnsType<OrderDetailByStaffItem> = [
    {
      title: 'STT',
      dataIndex: 'index',
      key: 'index',
      render: (_: any, __: any, index: number) => {
        const calculatedIndex = (current - 1) * 10 + index + 1;
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
      align: 'center'
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'username',
      key: 'username',
      align: 'center'
    },

    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      align: 'center'
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
      align: 'center'
    },
    {
      title: 'Giá tiền đơn hàng',
      dataIndex: 'orderTotal',
      key: 'orderTotal',
      render: (total: number) => `${total.toLocaleString()} đ`,
      align: 'center'
    },
    {
      title: 'Ngày giao dịch',
      dataIndex: 'paymentTime',
      key: 'paymentTime',
      render: (text: string) => formatDateTime(text),
      align: 'center'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = '';
        switch (status) {
          case 'Chờ xác nhận':
            color = 'blue';
            break;
          case 'Chờ giao hàng':
            color = 'orange';
            break;
          case 'Đang vận chuyển':
            color = 'purple';
            break;
          case 'Đã hoàn thành':
            color = 'green';
            break;
          case 'Đã hủy':
            color = 'red';
            break;
        }
        return <Tag color={color}>{status}</Tag>;
      },
      align: 'center'
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <div className='flex justify-center space-x-2 items-center'>
          <CustomGradientButton>
            <Dropdown
              overlay={
                <Menu>
                  {orderStatus.map((status) => (
                    <Menu.Item key={status.id} onClick={() => handleUpdateOrderStatus(record.orderId, status.id)}>
                      <Tag
                        color={
                          status.status === 'Chờ xác nhận'
                            ? 'blue'
                            : status.status === 'Chờ giao hàng'
                              ? 'orange'
                              : status.status === 'Đang vận chuyển'
                                ? 'purple'
                                : status.status === 'Đã hoàn thành'
                                  ? 'green'
                                  : 'red'
                        }
                      >
                        {status.status}
                      </Tag>
                    </Menu.Item>
                  ))}
                </Menu>
              }
            >
              <Button type='primary' className='flex items-center'>
                <CiEdit style={{ fontSize: '15px' }} />
              </Button>
            </Dropdown>
          </CustomGradientButton>
          <Tooltip title='Xem chi tiết đơn hàng'>
            <Button icon={<FaEye style={{ fontSize: '15px' }} />} onClick={() => handleViewDetails(record)} />
          </Tooltip>
        </div>
      ),
      align: 'center'
    }
  ];

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Quản lý đơn hàng của khách hàng</h1>
      <div className='flex justify-between items-center mb-4'>
        <Search
          placeholder='Tìm kiếm theo tên khách hàng'
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
          className='w-[40%]'
        />
        <Dropdown
          menu={{
            items: [
              { key: 'Tất cả', label: 'Tất cả' },
              ...orderStatus.map((status) => ({ key: status.id, label: status.status }))
            ],
            onClick: (e) => handleStatusFilterChange(e.key)
          }}
        >
          <Button className='flex items-center'>
            <CiFilter className='text-base mr-2' /> Bộ lọc trạng thái
          </Button>
        </Dropdown>
      </div>
      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{
          current,
          pageSize: 10,
          total: data?.totalRecord || 0,
          onChange: onChange
        }}
        loading={isFetching}
        rowKey='orderId'
      />

      <Modal
        title={<span className='flex justify-center text-xl pb-3'>Chi tiết đơn hàng</span>}
        open={isModalVisible}
        onCancel={handleCloseModal}
        footer={[
          <CustomGradientButton>
            <Button key='close' onClick={handleCloseModal} type='primary'>
              Đóng
            </Button>
          </CustomGradientButton>
        ]}
      >
        {selectedOrder && (
          <div className='bg-[#ffffff] pl-8 pr-8 pt-2 pb-8 '>
            <div className=''>
              <div className='flex flex-col items-center flex-shrink-0'>
                {' '}
                <p className='font-semibold text-sm text-dimGray pb-2'>{selectedOrder.productName}</p>
                <img
                  src={selectedOrder.productImage}
                  alt={selectedOrder.productName}
                  className='product-img block rounded-md'
                  width='160px'
                />
                <p className='font-thin text-sm text-dimGray pt-2'>Số lượng: {selectedOrder.productQuantity}</p>
                <p className='font-thin text-sm text-dimGray pt-2 pb-2'>
                  {formatDateTime(selectedOrder.rentalStart)} - {formatDateTime(selectedOrder.rentalEnd)}
                </p>
              </div>
            </div>

            <div className='border-t-2 border-t-gainsboro pt-4 pl-8 pr-8 mt-7'>
              <div className='orderid flex justify-between mb-3'>
                <span className='inline-block'>Mã đơn hàng</span>
                <span className='inline-block'>
                  <span className='inline-block' id='orderid'>
                    {selectedOrder.orderCode}
                  </span>
                </span>
              </div>

              <div className='name flex justify-between mb-3'>
                <span className='inline-block'>Tên</span>
                <span className='inline-block'>
                  <span className='inline-block' id='name'>
                    {selectedOrder.username}
                  </span>
                </span>
              </div>

              <div className='address flex justify-between mb-3'>
                <span className='inline-block'>Địa chỉ</span>
                <span className='inline-block text-right' style={{ maxWidth: '200px', wordWrap: 'break-word' }}>
                  <span className='inline-block' id='address'>
                    {selectedOrder.address}
                  </span>
                </span>
              </div>

              <div className='phone flex justify-between mb-3'>
                <span className='inline-block'>Số điện thoại</span>
                <span className='inline-block'>
                  <span className='inline-block' id='phone'>
                    {selectedOrder.phone}
                  </span>
                </span>
              </div>

              <div className='payment flex justify-between mb-3'>
                <span className='inline-block'>Hình thức thanh toán</span>
                <span className='inline-block'>
                  <span className='inline-block' id='payment'>
                    {selectedOrder.paymentType}
                  </span>
                </span>
              </div>

              <div className='flex justify-between mb-3'>
                <span className='inline-block'>Ngày giao dịch</span>
                <span className='inline-block'>
                  <span className='inline-block' id='status'>
                    {formatDateTime(selectedOrder.paymentTime)}
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
                    {selectedOrder.orderTotal.toLocaleString()}
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
