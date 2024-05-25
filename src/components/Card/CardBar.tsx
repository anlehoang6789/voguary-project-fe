import { AiFillCreditCard, AiOutlineUser, AiOutlineClockCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

export default function CartBar() {
  return (
    <div className='flex mb-6 space-x-4 '>
      <div className='flex-1 group'>
        <div className='max-w-full bg-white rounded-lg shadow-xl transition duration-300 transform hover:scale-105'>
          <div className='p-12'>
            <span className='text-xs font-semibold text-gray-500'>Budget</span>
            <h3 className='text-lg font-bold'>$750.90</h3>
            <div className='flex items-center mt-2'>
              <div className='bg-tertiary text-white rounded-full p-2'>
                <AiFillCreditCard className='text-lg' />
              </div>
              <span className='text-sm text-green-500 ml-2'>
                <FaArrowUp /> 13%
              </span>
            </div>
            <span className='text-xs text-gray-500'>Since last month</span>
          </div>
        </div>
      </div>

      <div className='flex-1 group'>
        <div className='max-w-full bg-white rounded-lg shadow-xl transition duration-300 transform hover:scale-105'>
          <div className='p-12'>
            <span className='text-xs font-semibold text-gray-500'>New user</span>
            <h3 className='text-lg font-bold'>215</h3>
            <div className='flex items-center mt-2'>
              <div className='bg-primary text-white rounded-full p-2'>
                <AiOutlineUser className='text-lg' />
              </div>
              <span className='text-sm text-green-500 ml-2'>
                <FaArrowUp /> 30%
              </span>
            </div>
            <span className='text-xs text-gray-500'>Since last month</span>
          </div>
        </div>
      </div>

      <div className='flex-1 group'>
        <div className='max-w-full bg-white rounded-lg shadow-xl transition duration-300 transform hover:scale-105'>
          <div className='p-12'>
            <span className='text-xs font-semibold text-gray-500'>Total hours</span>
            <h3 className='text-lg font-bold'>1.400</h3>
            <div className='flex items-center mt-2'>
              <div className='bg-info text-white rounded-full p-2'>
                <AiOutlineClockCircle className='text-lg' />
              </div>
              <span className='text-sm text-red-500 ml-2'>
                <FaArrowDown /> 5%
              </span>
            </div>
            <span className='text-xs text-gray-500'>Since last month</span>
          </div>
        </div>
      </div>

      <div className='flex-1 group'>
        <div className='max-w-full bg-white rounded-lg shadow-xl transition duration-300 transform hover:scale-105'>
          <div className='p-12'>
            <span className='text-xs font-semibold text-gray-500'>Work load</span>
            <h3 className='text-lg font-bold'>95%</h3>
            <div className='flex items-center mt-2'>
              <div className='bg-warning text-white rounded-full p-2'>
                <AiOutlineShoppingCart className='text-lg' />
              </div>
              <span className='text-sm text-green-500 ml-2'>
                <FaArrowUp /> 10%
              </span>
            </div>
            <span className='text-xs text-gray-500'>Since last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
