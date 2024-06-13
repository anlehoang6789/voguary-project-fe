import React, { useState, useEffect } from 'react';
import { FaMoneyCheckAlt, FaFilter } from 'react-icons/fa';
import { Pagination, Select, Modal, Tag } from 'antd';

const { Option } = Select;

interface Transaction {
  transactionName: string;
  transactionTime: string;
  transactionDay: string;
  transactionAmount: number;
}

const fakeData = [
  {
    transactionName: 'Thuê áo',
    transactionTime: '5:30:34 PM',
    transactionDay: '2024-05-01',
    transactionAmount: 1000000
  },
  {
    transactionName: 'Thuê áo',
    transactionTime: '5:30:34 PM',
    transactionDay: '2024-05-01',
    transactionAmount: 200000
  },
  {
    transactionName: 'Thuê áo',
    transactionTime: '5:30:34 PM',
    transactionDay: '2024-04-01',
    transactionAmount: 2000000
  },
  {
    transactionName: 'Thuê áo',
    transactionTime: '5:30:34 PM',
    transactionDay: '2024-04-01',
    transactionAmount: 309000
  },
  {
    transactionName: 'Thuê áo',
    transactionTime: '5:30:34 PM',
    transactionDay: '2024-03-01',
    transactionAmount: 600000
  },
  {
    transactionName: 'Thuê áo',
    transactionTime: '5:30:34 PM',
    transactionDay: '2024-02-01',
    transactionAmount: 200000
  },
  { transactionName: 'Thuê áo', transactionTime: '5:30:34 PM', transactionDay: '2024-01-01', transactionAmount: 278000 }
];

const HistoryPayment: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(5);
  const [data, setData] = useState<Transaction[]>(fakeData);
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  useEffect(() => {
    const filteredData = filterDataByMonth(fakeData, selectedMonth);
    setData(filteredData);
    setCurrentPage(1);
  }, [selectedMonth]);

  const filterDataByMonth = (data: Transaction[], month: string): Transaction[] => {
    if (!month) return data;
    return data.filter((item: Transaction) => item.transactionDay.startsWith(month));
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const handleMonthFilter = (value: string): void => {
    setSelectedMonth(value);
  };

  const handleCardClick = (transaction: Transaction): void => {
    setSelectedTransaction(transaction);
  };

  const handleClosePopup = (): void => {
    setSelectedTransaction(null);
  };

  const startIndex: number = (currentPage - 1) * pageSize;
  const endIndex: number = Math.min(startIndex + pageSize, data.length);
  const currentData: Transaction[] = data.slice(startIndex, endIndex);

  return (
    <div className='w-full max-w-full p-8 bg-white border border-gray-200 rounded-lg shadow-sm'>
      <div className='flex items-center justify-between mb-4'>
        <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-black'>Lịch sử thanh toán</h5>
        <Select style={{ width: 100 }} onChange={handleMonthFilter} placeholder={<FaFilter />}>
          <Option value=''>Tất cả</Option>
          <Option value='2024-01'>Tháng 1</Option>
          <Option value='2024-02'>Tháng 2</Option>
          <Option value='2024-03'>Tháng 3</Option>
          <Option value='2024-04'>Tháng 4</Option>
          <Option value='2024-05'>Tháng 5</Option>
        </Select>
      </div>
      <div className='flow-root bg-white'>
        <ul role='list' className='divide-y divide-gray-200'>
          {currentData.map((transaction: Transaction, index: number) => (
            <li key={index} className='py-1 sm:py-2'>
              <div
                className='flex items-center bg-gray-100 rounded-lg p-4 cursor-pointer shadow-md'
                onClick={() => handleCardClick(transaction)}
              >
                {/* Thêm lớp và sự kiện onClick để mở popup */}
                <div className='relative'>
                  <div className='top-0 left-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center'>
                    <FaMoneyCheckAlt className='w-8 h-8 text-red-600' />
                  </div>
                </div>
                <div className='flex-1 min-w-0 ms-4'>
                  <p className='text-lg font-bold text-gray-900 truncate dark:text-black'>
                    {transaction.transactionName}
                  </p>
                  <p className='text-sm text-gray-500 truncate dark:text-gray-400'>
                    {transaction.transactionTime} - {transaction.transactionDay}
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-black'>
                  -{transaction.transactionAmount.toLocaleString('vi-VN')}đ
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-4 flex justify-center'>
        <Pagination current={currentPage} total={data.length} pageSize={pageSize} onChange={handlePageChange} />
      </div>
      <Modal
        visible={!!selectedTransaction}
        onCancel={handleClosePopup}
        footer={null}
        centered
        title={
          <div className='flex flex-col items-center'>
            <h2 className='text-xl font-bold mb-2'>Chi tiết giao dịch</h2>
            <div className='flex items-center justify-center mb-2'>
              <FaMoneyCheckAlt className='text-xl text-red-600 mr-2' />
              <span className='text-xl text-gray-600'>
                -{selectedTransaction && selectedTransaction.transactionAmount.toLocaleString('vi-VN')}đ
              </span>
            </div>
            <Tag color='success'>Thành công</Tag>
            <div className='w-full border-b border-gray-300 my-2'></div> {/* Phần ngăn cách */}
          </div>
        }
        wrapClassName='custom-modal'
      >
        {selectedTransaction && (
          <div>
            <h2 className='text-xl font-bold mb-4'>Tên giao dịch: {selectedTransaction.transactionName}</h2>
            <div className='flex justify-between'>
              <div>
                <p className='text-gray-600 font-bold mb-2'>Thời gian:</p>
                <p className='text-gray-600 font-bold mb-2'>Ngày:</p>
                <p className='text-gray-600 font-bold mb-2'>Tổng:</p>
              </div>
              <div>
                <p className='text-gray-600 mb-2'>{selectedTransaction.transactionTime}</p>
                <p className='text-gray-600 mb-2'>{selectedTransaction.transactionDay}</p>
                <p className='text-gray-600 mb-2'>{selectedTransaction.transactionAmount.toLocaleString('vi-VN')}đ</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default HistoryPayment;
