import { Table, Tag, Button, Dropdown, Input } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { CiSearch, CiFilter } from 'react-icons/ci';
import { useState } from 'react';
import CustomGradientButton from 'components/CustomGradientButton';
import { OrderDetailByStaffItem } from 'types/Order.type';
import { useGetOrderForStaffQuery } from 'services/order.services';

const { Search } = Input;

const orderStatus = [
  { id: 1, status: 'Chờ Xác Nhận' },
  { id: 2, status: 'Chờ Giao Hàng' },
  { id: 3, status: 'Đang Vận Chuyển' },
  { id: 4, status: 'Đã Hoàn Thành' },
  { id: 5, status: 'Đã Hủy' }
];

export default function ManageOrderOfAllCustomer() {
  const [current, setCurrent] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [filteredStatus, setFilteredStatus] = useState<number | null>(null);

  const { data, isFetching } = useGetOrderForStaffQuery({
    pageNumber: current,
    pageSize: 10,
    status: filteredStatus !== null ? filteredStatus : undefined
  });

  const onChange = (page: number) => {
    setCurrent(page);
  };

  const onSearch = (value: string) => {
    setSearchText(value);
  };

  const handleStatusFilterChange = (statusId: number | string) => {
    setFilteredStatus(statusId === 'Tất cả' ? null : Number(statusId));
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
          case 'Chờ Xác Nhận':
            color = 'blue';
            break;
          case 'Chờ Giao Hàng':
            color = 'orange';
            break;
          case 'Đang Vận Chuyển':
            color = 'purple';
            break;
          case 'Đã Hoàn Thành':
            color = 'green';
            break;
          case 'Đã Hủy':
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
      render: () => (
        <div className='flex justify-center space-x-2 items-center'>
          <CustomGradientButton>
            <Dropdown
              menu={{
                items: orderStatus.map((status) => ({
                  key: status.id,
                  label: (
                    <Tag
                      color={
                        status.status === 'Chờ Xác Nhận'
                          ? 'blue'
                          : status.status === 'Chờ Giao Hàng'
                            ? 'orange'
                            : status.status === 'Đang Vận Chuyển'
                              ? 'purple'
                              : status.status === 'Đã Hoàn Thành'
                                ? 'green'
                                : 'red'
                      }
                    >
                      {status.status}
                    </Tag>
                  )
                }))
              }}
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
