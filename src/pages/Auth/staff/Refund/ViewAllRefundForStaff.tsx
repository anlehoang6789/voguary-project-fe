// src/components/ViewAllRefundForStaff.tsx
import React, { useState } from 'react';
import { Table, Button, Input, Tag, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Refund } from 'types/Refund.type';
import { FaEye } from 'react-icons/fa6';
import { CiSearch } from 'react-icons/ci';
import CustomGradientButton from 'components/CustomGradientButton';

// Mock data
const mockRefunds: Refund[] = [
  {
    refundId: 1,
    customerName: 'Nguyễn Văn A',
    itemName: 'Áo vest',
    returnReason: 'Không đúng kích cỡ',
    orderDate: '2024-05-01',
    returnRequestDate: '2024-05-10',
    refundAmount: 100000,
    status: 'Chưa xử lí'
  },
  {
    refundId: 2,
    customerName: 'Nguyễn Văn B',
    itemName: 'Quần tây',
    returnReason: 'Không có mô tả',
    orderDate: '2024-04-20',
    returnRequestDate: '2024-04-25',
    refundAmount: 200000,
    status: 'Đã xử lí'
  }
];

export default function ViewAllRefundForStaff() {
  const [current, setCurrent] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRefund, setSelectedRefund] = useState<Refund | null>(null);

  const onChange = (page: number) => {
    setCurrent(page);
  };

  const onSearch = (value: string) => {
    setSearchText(value);
  };

  const filteredRefunds = mockRefunds.filter((refund) =>
    refund.returnReason.toLowerCase().includes(searchText.toLowerCase())
  );

  const showModal = (refund: Refund) => {
    setSelectedRefund(refund);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns: ColumnsType<Refund> = [
    {
      title: 'STT',
      dataIndex: 'refundId',
      key: 'refundId',
      render: (text) => <span>{text}</span>,
      align: 'center'
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'customerName',
      key: 'customerName',
      render: (text) => <span>{text}</span>,
      align: 'center'
    },
    {
      title: 'Tên món đồ bị trả',
      dataIndex: 'itemName',
      key: 'itemName',
      render: (text) => <span>{text}</span>,
      align: 'center'
    },
    {
      title: 'Mô tả lí do trả hàng',
      dataIndex: 'returnReason',
      key: 'returnReason',
      render: (text) => <Tag color={text === 'Defective product' ? 'red' : 'blue'}>{text}</Tag>,
      align: 'center'
    },
    {
      title: 'Ngày bắt đầu đặt',
      dataIndex: 'orderDate',
      key: 'orderDate',
      render: (text) => <span>{text}</span>,
      align: 'center'
    },
    {
      title: 'Ngày yêu cầu trả hàng',
      dataIndex: 'returnRequestDate',
      key: 'returnRequestDate',
      render: (text) => <span>{text}</span>,
      align: 'center'
    },
    {
      title: 'Số tiền cần trả lại khách hàng',
      dataIndex: 'refundAmount',
      key: 'refundAmount',
      render: (text) => (
        <span>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(text)}</span>
      ),
      align: 'center'
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (text) => <Tag color={text === 'Chưa xử lí' ? 'red' : 'green'}>{text}</Tag>,
      align: 'center'
    },
    {
      title: 'Hành động',
      key: 'action',
      render: (_, record) => (
        <div className='flex justify-center space-x-2 items-center'>
          <CustomGradientButton>
            <Button type='primary' className='flex items-center' onClick={() => showModal(record)}>
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
      <h1 className='text-2xl font-bold mb-4'>Danh sách trả hàng</h1>
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
        dataSource={filteredRefunds}
        pagination={{
          current,
          pageSize: 10,
          total: filteredRefunds.length,
          onChange: onChange
        }}
        rowKey='refundId'
      />

      <Modal
        title={<span className='flex justify-center text-xl pb-3'>Chi tiết trả hàng</span>}
        visible={isModalVisible}
        footer={[
          <Button key='back' onClick={handleCancel}>
            OK
          </Button>
        ]}
        onCancel={handleCancel}
      >
        {selectedRefund && (
          <div className='border-t-2 border-t-gainsboro pt-4 pl-8 pr-8 mt-5'>
            <div className='flex justify-between mb-3'>
              <span className='inline-block font-semibold'>Tên khách hàng</span>
              <span className='inline-block'>{selectedRefund.customerName}</span>
            </div>

            <div className='flex justify-between mb-3'>
              <span className='inline-block font-semibold'>Tên món đồ bị trả</span>
              <span className='inline-block'>{selectedRefund.itemName}</span>
            </div>

            <div className='flex justify-between mb-3'>
              <span className='inline-block font-semibold'>Mô tả lí do trả hàng</span>
              <span className='inline-block'>{selectedRefund.returnReason}</span>
            </div>

            <div className='flex justify-between mb-3'>
              <span className='inline-block font-semibold'>Ngày bắt đầu đặt</span>
              <span className='inline-block'>{selectedRefund.orderDate}</span>
            </div>

            <div className='flex justify-between mb-3'>
              <span className='inline-block font-semibold'>Ngày yêu cầu trả hàng</span>
              <span className='inline-block'>{selectedRefund.returnRequestDate}</span>
            </div>

            <div className='flex justify-between mb-3'>
              <span className='inline-block font-semibold'>Số tiền cần trả lại khách hàng</span>
              <span className='inline-block'>
                {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                  selectedRefund.refundAmount
                )}
              </span>
            </div>

            <div className='flex justify-between mb-3'>
              <span className='inline-block font-semibold'>Trạng thái</span>
              <span className='inline-block'>{selectedRefund.status}</span>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
