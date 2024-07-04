import { AiFillCreditCard, AiOutlineUser, AiOutlineClockCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import {
  useGetTotalItemsInStockQuery,
  useGetTotalReturnedOrdersQuery,
  useGetTotalRevenueQuery,
  useGetTotalUsersCustomerQuery
} from 'services/dashboard.services';

export default function CartBar() {
  //total revenue
  const { data: totalRevenue } = useGetTotalRevenueQuery();
  //total customers
  const { data: totalCustomers } = useGetTotalUsersCustomerQuery();
  //total items in stock
  const { data: totalItemsInStock } = useGetTotalItemsInStockQuery();
  //total returned orders
  const { data: totalReturnedOrders } = useGetTotalReturnedOrdersQuery();

  //format price
  const formatPrice = (price?: number) => {
    if (typeof price === 'undefined') {
      return '0 đ'; // Hoặc '0 ₫' hoặc giá trị mặc định khác tùy bạn
    }
    return price.toLocaleString('en-US') + ' đ';
  };

  return (
    <div className='flex mb-6 space-x-4 '>
      <div className='flex-1 group'>
        <div className='max-w-full bg-white rounded-lg shadow-xl transition duration-300 transform hover:scale-105 flex flex-col h-full'>
          <div className='p-12 flex-1'>
            <span className='text-xs font-semibold text-gray-500'>Tổng doanh thu trong năm 2024</span>
            <h3 className='text-base font-bold'>{formatPrice(totalRevenue?.totalRevenue)}</h3>
            <div className='flex items-center mt-2'>
              <div className='bg-tertiary text-white rounded-full p-2'>
                <AiFillCreditCard className='text-lg' />
              </div>
              <span className='text-sm text-green-500 ml-2'>
                <FaArrowUp /> 13%
              </span>
            </div>
            <span className='text-xs text-gray-500'>So với tháng trước</span>
          </div>
        </div>
      </div>

      <div className='flex-1 group'>
        <div className='max-w-full bg-white rounded-lg shadow-xl transition duration-300 transform hover:scale-105 flex flex-col h-full'>
          <div className='p-12 flex-1'>
            <span className='text-xs font-semibold text-gray-500'>Tổng số khách hàng đang sử dụng dịch vụ</span>
            <h3 className='text-base font-bold'>{totalCustomers?.totalCustomers}</h3>
            <div className='flex items-center mt-2'>
              <div className='bg-primary text-white rounded-full p-2'>
                <AiOutlineUser className='text-lg' />
              </div>
              <span className='text-sm text-green-500 ml-2'>
                <FaArrowUp /> 30%
              </span>
            </div>
            <span className='text-xs text-gray-500'>So với tháng trước</span>
          </div>
        </div>
      </div>

      <div className='flex-1 group'>
        <div className='max-w-full bg-white rounded-lg shadow-xl transition duration-300 transform hover:scale-105 flex flex-col h-full'>
          <div className='p-12 flex-1'>
            <span className='text-xs font-semibold text-gray-500'>Tổng mặt hàng đang có trong cửa hàng</span>
            <h3 className='text-base font-bold'>{totalItemsInStock?.totalItemsInStock}</h3>
            <div className='flex items-center mt-2'>
              <div className='bg-info text-white rounded-full p-2'>
                <AiOutlineClockCircle className='text-lg' />
              </div>
              <span className='text-sm text-red-500 ml-2'>
                <FaArrowDown /> 5%
              </span>
            </div>
            <span className='text-xs text-gray-500'>So với tháng trước</span>
          </div>
        </div>
      </div>

      <div className='flex-1 group'>
        <div className='max-w-full bg-white rounded-lg shadow-xl transition duration-300 transform hover:scale-105 flex flex-col h-full'>
          <div className='p-12 flex-1'>
            <span className='text-xs font-semibold text-gray-500'>Tổng số đơn hàng bị trả lại</span>
            <h3 className='text-base font-bold'>{totalReturnedOrders?.totalReturnedOrders}</h3>
            <div className='flex items-center mt-2'>
              <div className='bg-warning text-white rounded-full p-2'>
                <AiOutlineShoppingCart className='text-lg' />
              </div>
              <span className='text-sm text-green-500 ml-2'>
                <FaArrowUp /> 10%
              </span>
            </div>
            <span className='text-xs text-gray-500'>So với tháng trước</span>
          </div>
        </div>
      </div>
    </div>
  );
}
