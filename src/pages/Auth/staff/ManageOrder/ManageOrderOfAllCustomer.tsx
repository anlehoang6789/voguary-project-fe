import { Table, Tag, Button, Dropdown, Input, Menu, notification } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { CiSearch, CiFilter } from 'react-icons/ci';
import { useState } from 'react';
import CustomGradientButton from 'components/CustomGradientButton';
import { OrderDetailByStaffItem } from 'types/Order.type';
import { useGetOrderForStaffQuery, useUpdateOrderStatusMutation } from 'services/order.services';

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
                Cập nhật trạng thái
              </Button>
            </Dropdown>
          </CustomGradientButton>
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
    </div>
  );
}
