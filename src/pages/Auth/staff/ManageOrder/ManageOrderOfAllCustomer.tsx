import { Table, Tag, Button, Dropdown, Input } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { CiSearch, CiFilter } from 'react-icons/ci';
import { useState } from 'react';
import CustomGradientButton from 'components/CustomGradientButton';
import mockOrderData, { Order } from './mockDataOrderOfAllCustomer';

const { Search } = Input;

const orderStatus = ['Chờ xác nhận', 'Chờ giao hàng', 'Đang vận chuyển', 'Đã hoàn thành', 'Đã hủy'];

const columns: ColumnsType<Order> = [
  {
    title: 'STT',
    dataIndex: 'orderId',
    key: 'orderId',
    render: (text) => <span>{text}</span>,
    align: 'center'
  },
  {
    title: 'Mã đơn hàng',
    dataIndex: 'orderCode',
    key: 'orderCode',
    align: 'center'
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'customerName',
    key: 'customerName',
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
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    align: 'center'
  },
  {
    title: 'Ngày giao dịch',
    dataIndex: 'transactionDate',
    key: 'transactionDate',
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
    render: (text, record) => (
      <div className='flex justify-center space-x-2 items-center'>
        <CustomGradientButton>
          <Dropdown
            menu={{
              items: orderStatus.map((status) => ({
                key: status,
                label: (
                  <Tag
                    color={
                      status === 'Chờ xác nhận'
                        ? 'blue'
                        : status === 'Chờ giao hàng'
                          ? 'orange'
                          : status === 'Đang vận chuyển'
                            ? 'purple'
                            : status === 'Đã hoàn thành'
                              ? 'green'
                              : 'red'
                    }
                  >
                    {status}
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

export default function ManageOrderOfAllCustomer() {
  const [current, setCurrent] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [filteredStatus, setFilteredStatus] = useState<string | null>(null);

  const onChange = (page: number) => {
    setCurrent(page);
  };

  const onSearch = (value: string) => {
    setSearchText(value);
  };

  const handleStatusFilterChange = (status: string) => {
    setFilteredStatus(status === 'Tất cả' ? null : status);
  };

  const filteredData = mockOrderData.filter((order) => {
    const matchesSearch = order.customerName.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = filteredStatus ? order.status === filteredStatus : true;
    return matchesSearch && matchesStatus;
  });

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
              ...orderStatus.map((status) => ({ key: status, label: status }))
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
          total: filteredData.length,
          onChange: onChange
        }}
        rowKey='orderId'
      />
    </div>
  );
}
