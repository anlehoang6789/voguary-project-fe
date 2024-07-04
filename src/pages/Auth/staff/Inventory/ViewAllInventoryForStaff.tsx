import { Tag, Table, Button, Input } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { CiSearch } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';
import CustomGradientButton from 'components/CustomGradientButton';
import { GetInventorybyStaffItem } from 'types/Inventory.type';
import { useGetInventoriesQuery } from 'services/inventory.services';

const columns: ColumnsType<GetInventorybyStaffItem> = [
  {
    title: 'STT',
    dataIndex: 'inventoryId',
    key: 'inventoryId',
    align: 'center'
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'productName',
    key: 'productName',
    align: 'center'
  },
  {
    title: 'Hình ảnh sản phẩm',
    dataIndex: 'productImage',
    key: 'productImage',
    render: (product) => <img src={product} alt={product.productName} className='w-16 h-16 mx-auto' />,
    align: 'center'
  },
  {
    title: 'Tên loại sản phẩm',
    dataIndex: 'categoryName',
    key: 'categoryName',
    align: 'center'
  },
  {
    title: 'Số lượng hiện hữu',
    dataIndex: 'quantityAvailable',
    key: 'quantityAvailable',
    align: 'center'
  },
  {
    title: 'Trạng thái sản phẩm',
    dataIndex: 'status',
    key: 'status',
    render: (product) => <Tag color={product === 'In Stock' ? 'green' : 'red'}>{product}</Tag>,
    align: 'center'
  },
  {
    title: 'Hành động',
    key: 'action',
    render: () => (
      <div className='flex justify-center space-x-2 items-center'>
        <CustomGradientButton>
          <Button type='primary' className='flex items-center'>
            <FaEye className='mr-2' /> Xem chi tiết
          </Button>
        </CustomGradientButton>
        <Button danger className='flex items-center'>
          <MdDelete className='mr-2' /> Xóa
        </Button>
      </div>
    ),
    align: 'center'
  }
];

export default function ViewAllInventoryForStaff() {
  const [current, setCurrent] = useState(1);
  const [searchText, setSearchText] = useState('');

  const { data, isFetching } = useGetInventoriesQuery({
    pageNumber: current,
    pageSize: 10
  });

  const onChange = (page: number) => {
    setCurrent(page);
  };

  const onSearch = (value: string) => {
    setSearchText(value);
  };

  const filteredData =
    data?.data.filter((order) => {
      const matchesSearch = order.productName.toLowerCase().includes(searchText.toLowerCase());
      return matchesSearch;
    }) || [];

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Tất cả hàng tồn kho</h1>
      <Input.Search
        placeholder='Tìm kiếm theo tên sản phẩm'
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
        dataSource={filteredData}
        pagination={{
          pageSize: 10,
          total: data?.totalRecord || 0,
          onChange: onChange
        }}
        loading={isFetching}
        rowKey='inventoryId'
      />
    </div>
  );
}
