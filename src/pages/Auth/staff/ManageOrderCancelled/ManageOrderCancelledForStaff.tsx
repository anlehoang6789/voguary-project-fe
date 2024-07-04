// src/components/ManageOrderCancelledForStaff.tsx
import React, { useState } from 'react';
import { Table, Button, Input, Tag, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { GetRentalReturnOrderByStaffResponse, Order, ReturnOrderByStaffItem } from 'types/Order.type';
import { FaEye } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';
import CustomGradientButton from 'components/CustomGradientButton';
import { useGetReturnOrdersQuery } from 'services/order.services';

export default function ManageOrderCancelledForStaff() {
  const [current, setCurrent] = useState(1);
  const [searchText, setSearchText] = useState('');

  const { data, isFetching, error, isLoading, isSuccess } = useGetReturnOrdersQuery({
    pageNumber: current,
    pageSize: 5
  });
  const pageSize = 5;
  const returnOrderDataChildren = data?.data || [];
  const [currentPage, setCurrentPage] = useState(1);
  const currentData = returnOrderDataChildren.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const [selectedTransaction, setSelectedTransaction] = useState<ReturnOrderByStaffItem | null>(null);

  const onChange = (page: number) => {
    setCurrent(page);
  };

  const onSearch = (value: string) => {
    setSearchText(value);
  };

  const handleCardClick = (transaction: ReturnOrderByStaffItem): void => {
    setSelectedTransaction(transaction);
  };

  const filteredData =
    data?.data.filter((order) => {
      const matchesSearch = order.username.toLowerCase().includes(searchText.toLowerCase());
      return matchesSearch;
    }) || [];

  const handleClosePopup = (): void => {
    setSelectedTransaction(null);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error loading return order:', error);
    return <div>Error loading return order</div>;
  }
  if (!isSuccess || !data) {
    return <div>No cart items found</div>;
  }
  const columns: ColumnsType<ReturnOrderByStaffItem> = [
    {
      title: 'STT',
      dataIndex: 'orderId',
      key: 'orderId',
      align: 'center'
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'username',
      key: 'username',
      align: 'center'
    },

    {
      title: 'Lý do trả hàng',
      dataIndex: 'returnReason',
      key: 'returnReason',
      render: (text) => (
        <Tag
          color={
            text === 'Trả lại sau khi sử dụng'
              ? 'green'
              : text === 'Đang xử lý'
                ? 'blue'
                : text === 'Đang giao hàng'
                  ? 'gold'
                  : text === 'Khách hàng hủy'
                    ? 'error'
                    : 'pink'
          }
        >
          {text}
        </Tag>
      ),
      align: 'center'
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (record) => (
        <div className='flex justify-center space-x-2 items-center'>
          <CustomGradientButton>
            <Button type='primary' className='flex items-center' onClick={() => handleCardClick(record)}>
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
        open={!!selectedTransaction}
        onCancel={handleClosePopup}
        footer={null}
        centered
      >
        {selectedTransaction && (
          <div>
            <div className='flex justify-center '>
              {/* <img src={selectedTransaction.orderId} alt='Ao dai' className='product-img block rounded-md' width='160px' /> */}
            </div>

            <div className='border-t-2 border-t-gainsboro pt-4 pl-8 pr-8 mt-5'>
              <div className=' flex justify-between mb-3'>
                <span className='inline-block font-semibold'>Tên khách hàng</span>
                <span className='inline-block'>
                  <span className='inline-block' id='datePlaced'>
                    {selectedTransaction.username}
                  </span>
                </span>
              </div>

              <div className='orderid flex justify-between mb-3'>
                <span className='inline-block font-semibold'>Mã đơn hàng</span>
                <span className='inline-block'>
                  <span className='inline-block' id='orderid'>
                    {selectedTransaction.orderId}
                  </span>
                </span>
              </div>

              <div className=' flex justify-between mb-3'>
                <span className='inline-block font-semibold'>Ngày đặt hàng</span>
                <span className='inline-block'>
                  <span className='inline-block' id='datePlaced'>
                    {selectedTransaction.datePlaced}
                  </span>
                </span>
              </div>

              <div className=' flex justify-between mb-3'>
                <span className='inline-block font-semibold'>Ngày hết hạn</span>
                <span className='inline-block'>
                  <span className='inline-block' id='dueDate'>
                    {selectedTransaction.dueDate}
                  </span>
                </span>
              </div>

              <div className=' flex justify-between mb-3'>
                <span className='inline-block font-semibold'>Ngày trả hàng</span>
                <span className='inline-block'>
                  <span className='inline-block' id='returnDate'>
                    {selectedTransaction.returnDate}
                  </span>
                </span>
              </div>

              <div className='flex justify-between mb-6'>
                <span className='inline-block font-semibold'>Lý do trả hàng</span>
                <span className='inline-block '>
                  <span className='inline-block' id='payment'>
                    {selectedTransaction.returnReason}
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
