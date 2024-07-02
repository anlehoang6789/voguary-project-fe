import { Modal, Pagination, Tag } from 'antd';
import React, { useState } from 'react';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useGetPaymentByUserIdQuery } from 'services/payment.services';
import { RootState } from 'store';
import { GetPaymentByUserIdChildrenResponse } from 'types/Payment.type';

const HistoryPayment: React.FC = () => {
  const userIdString = useSelector((state: RootState) => state.authLoginAPI.userId);
  const userId = parseInt(userIdString || '0');
  const [selectedTransaction, setSelectedTransaction] = useState<GetPaymentByUserIdChildrenResponse | null>(null);
  const { data: paymentData, error, isLoading, isSuccess } = useGetPaymentByUserIdQuery(userId);
  const paymentDataChildren = paymentData?.items || [];
  const totalCount = paymentData?.totalCount || 0;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const currentData = paymentDataChildren.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const handleCardClick = (transaction: GetPaymentByUserIdChildrenResponse): void => {
    setSelectedTransaction(transaction);
  };

  const handleClosePopup = (): void => {
    setSelectedTransaction(null);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error('Error loading payment history:', error);
    return <div>Error loading payment history</div>;
  }
  if (!isSuccess || !paymentData) {
    return <div>No cart items found</div>;
  }

  return (
    <div className='w-full max-w-full p-8 bg-white border border-gray-200 rounded-lg shadow-sm'>
      <div className='flex items-center justify-between mb-4'>
        <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-black'>Lịch sử thanh toán</h5>
        {/* <Select style={{ width: 100 }} onChange={handleMonthFilter} placeholder={<FaFilter />}>
          <Option value=''>Tất cả</Option>
        </Select> */}
      </div>
      {isSuccess &&
        currentData.map((item) => (
          <div key={item.paymentId} className='flow-root bg-white'>
            <ul className='divide-y divide-gray-200'>
              <li className='py-1 sm:py-2'>
                <div
                  className='flex items-center bg-gray-100 rounded-lg p-4 cursor-pointer shadow-md'
                  onClick={() => handleCardClick(item)}
                >
                  <div className='relative'>
                    <div className='top-0 left-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center'>
                      <FaMoneyCheckAlt className='w-8 h-8 text-red-600' />
                    </div>
                  </div>
                  <div className='flex-1 min-w-0 ms-4'>
                    <p className='text-lg font-bold text-gray-900 truncate dark:text-black'>{item.paymentContent}</p>
                    <p className='text-sm text-gray-500 truncate dark:text-gray-400'>{item.paymentTime}</p>
                  </div>
                  <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-black'>
                    -{item.paymentAmount.toLocaleString('vi-VN')}đ
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ))}

      <Modal
        open={!!selectedTransaction}
        onCancel={handleClosePopup}
        footer={null}
        centered
        title={
          <div className='flex flex-col items-center'>
            <h2 className='text-xl font-bold mb-2'>Chi tiết giao dịch</h2>
            <div className='flex items-center justify-center mb-2'>
              <FaMoneyCheckAlt className='text-xl text-red-600 mr-2' />
              <span className='text-xl text-gray-600'>
                -{selectedTransaction && selectedTransaction.paymentAmount.toLocaleString('vi-VN')}đ
              </span>
            </div>
            <Tag color='success'>Thành công: </Tag>
            <div className='w-full border-b border-gray-300 my-2'></div>
          </div>
        }
        wrapClassName='custom-modal'
      >
        {selectedTransaction && (
          <div>
            <h2 className='text-xl font-bold mb-4'>Tên giao dịch: {selectedTransaction.paymentContent}</h2>
            <div className='flex justify-between'>
              <div>
                <p className='text-gray-600 font-bold mb-2'>Thời gian:</p>
                <p className='text-gray-600 font-bold mb-2'>Phương thức thanh toán:</p>
                <p className='text-gray-600 font-bold mb-2'>Tổng:</p>
              </div>
              <div>
                <p className='text-gray-600 mb-2'>{selectedTransaction.paymentTime}</p>
                <p className='text-gray-600 mb-2'>{selectedTransaction.paymentMethodName}</p>
                <p className='text-gray-600 mb-2'>{selectedTransaction.paymentAmount.toLocaleString('vi-VN')}đ</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
      <div className='mt-4 flex justify-center'>
        <Pagination
          current={currentPage}
          total={totalCount}
          pageSize={pageSize}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default HistoryPayment;
