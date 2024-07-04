import { useState } from 'react';

import { Button, DatePicker, DatePickerProps, Form, Tag, message } from 'antd';

import CustomGradientButton from 'components/CustomGradientButton';

import dayjs, { Dayjs } from 'dayjs';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useGetOrdersByUserIdQuery, useGetPagedRentalOrderDetailsByUserIdQuery } from 'services/order.services';

const aodai =
  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C3%A1o%20d%C3%A0i.jpg?alt=media&token=4de95e39-5ddf-4b30-982b-cafdbea76e40';
const dam =
  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C4%91%E1%BA%A7m.jpg?alt=media&token=9bb1841e-b10f-4bc5-b5c9-ec19e87121c5';
const fakeDataProducts = [
  {
    id: 1,
    name: 'Áo dài Tết 1',

    startDate: '02-06-2024',
    endDate: '04-06-2024',
    status: 'Còn hạn',
    imgSrc: aodai
  },
  {
    id: 2,
    name: 'Đầm dạ hội 1',

    startDate: '02-06-2024',
    endDate: '04-06-2024',
    status: 'Còn hạn',
    imgSrc: dam
  },
  {
    id: 3,
    name: 'Áo dài Tết 2',

    startDate: '02-06-2024',
    endDate: '04-06-2024',
    status: 'Còn hạn',
    imgSrc: aodai
  },
  {
    id: 4,
    name: 'Đầm dạ hội 2',

    startDate: '02-06-2024',
    endDate: '04-06-2024',
    status: 'Còn hạn',
    imgSrc: dam
  },
  {
    id: 5,
    name: 'Áo dài Tết 3',

    startDate: '02-06-2024',
    endDate: '04-06-2024',
    status: 'Còn hạn',
    imgSrc: aodai
  },
  {
    id: 6,
    name: 'Áo dài Tết 4',

    startDate: '02-06-2024',
    endDate: '04-06-2024',
    status: 'Còn hạn',
    imgSrc: aodai
  },
  {
    id: 7,
    name: 'Đầm dạ hội 3',

    startDate: '02-06-2024',
    endDate: '04-06-2024',
    status: 'Hết hạn',
    imgSrc: dam
  },
  {
    id: 8,
    name: 'Áo dài Tết 5',

    startDate: '02-06-2024',
    endDate: '04-06-2024',
    status: 'Hết hạn',
    imgSrc: aodai
  },
  {
    id: 9,
    name: 'Đầm dạ hội 4',

    startDate: '02-06-2024',
    endDate: '04-06-2024',
    status: 'Hết hạn',
    imgSrc: dam
  },
  {
    id: 10,
    name: 'Áo dài Tết 6',

    startDate: '02-06-2024',
    endDate: '04-06-2024',
    status: 'Còn hạn',
    imgSrc: aodai
  }
];

interface Product {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  imgSrc: string;
  status: string;
}

export default function ManageMyBag() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const userIdString = useSelector((state: RootState) => state.authLoginAPI.userId);
  const userId = parseInt(userIdString || '0', 10);

  const { data: orders, isLoading, error } = useGetPagedRentalOrderDetailsByUserIdQuery(userId);

  const toggleModal = (product: Product | null) => {
    setCurrentProduct(product);
    setModalOpen(!isModalOpen);
  };

  const handleCancel = () => {
    toggleModal(null);
    form.resetFields();
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  const handleSubmit = (values: any) => {
    const { extend } = values;
    if (extend) {
      console.log('Ngày gia hạn đã được chọn:', extend);
      message.success('Gia hạn thành công!');
      handleCancel();
    } else {
      console.error('Vui lòng chọn ngày gia hạn');
    }
  };

  const [form] = Form.useForm();

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    form.setFieldsValue({ extend: dateString });
    console.log(date, dateString);
  };

  const disabledDate = (date: Dayjs) => {
    const endDateDate = dayjs(currentProduct?.rentalEnd, 'DD-MM-YYYY');
    const sevenDaysAfterEndDate = endDateDate.add(6, 'day');
    return date && (date.isBefore(endDateDate) || date.isAfter(sevenDaysAfterEndDate));
  };

  if (isLoading) {
    console.log('Loading orders...');
    return <div>Loading...</div>;
  }
  if (error) {
    console.error('Error loading orders:', error);
    return <div>Error loading orders</div>;
  }

  console.log('Orders data:', orders);

  return (
    <div className='relative overflow-x-auto  sm:rounded-lg'>
      <div className='flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0  bg-white'>
        <label htmlFor='table-search' className='sr-only'>
          Search
        </label>
      </div>

      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Mã đơn hàng
            </th>
            <th scope='col' className='px-6 py-3'>
              Ảnh sản phẩm
            </th>
            <th scope='col' className='px-6 py-3'>
              Ngày bắt đầu
            </th>
            <th scope='col' className='px-6 py-3'>
              Ngày kết thúc
            </th>
            <th scope='col' className='px-6 py-3'>
              Trạng thái
            </th>
            <th scope='col' className='px-6 py-3'></th>
          </tr>
        </thead>

        <tbody>
          {orders?.items.slice(indexOfFirstProduct, indexOfLastProduct).map((order: any) => (
            <tr key={order.orderCode} className='bg-white border-b hover:bg-gray-50'>
              <td className='px-6 py-4'>{order.orderCode}</td>
              <td className='px-6 py-4'>
                <img className='w-30' src={order.productImage} alt={`${order.productName} ảnh`} />
              </td>
              <td className='px-6 py-4'>{order.rentalStart}</td>
              <td className='px-6 py-4'>{order.rentalEnd}</td>

              <td className='px-6 py-4'>
                <Tag color={order.status === 'Còn hạn' ? 'green' : 'red'}>{order.status}</Tag>
              </td>
              <td className='px-6 py-4'>
                <button onClick={() => toggleModal(order)} className='text-blue-600 hover:underline focus:outline-none'>
                  Gia hạn
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && currentProduct && (
        <div
          id='viewProductModal'
          className='fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-gray-900 bg-opacity-50'
        >
          <div className='relative w-full max-w-md md:h-auto'>
            <div className='relative bg-white rounded-lg shadow'>
              <div className='flex items-start justify-between p-4 border-b rounded-t'>
                <h3 className='text-xl font-semibold text-gray-900'>Gia hạn ngày thuê</h3>
                <button
                  onClick={() => toggleModal(null)}
                  type='button'
                  className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
                  data-modal-hide='editUserModal'
                >
                  <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                  <span className='sr-only'>Close modal</span>
                </button>
              </div>
              <Form form={form} onFinish={handleSubmit}>
                <div className='p-4 space-y-4'>
                  <Form.Item name='extend' rules={[{ required: true, message: 'Vui lòng chọn ngày gia hạn' }]}>
                    <div className='flex justify-center '>
                      <DatePicker onChange={onChange} disabledDate={disabledDate} size='large' />
                    </div>
                  </Form.Item>
                  <div className='flex justify-end'>
                    <CustomGradientButton>
                      <Button type='primary' htmlType='submit'>
                        Đồng ý
                      </Button>
                    </CustomGradientButton>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
      <div className='flex justify-center mt-4'>
        {Array.from({ length: Math.ceil(fakeDataProducts.length / productsPerPage) }, (_, i) => (
          <CustomGradientButton>
            <Button
              type={currentPage === i + 1 ? 'primary' : 'default'}
              key={i}
              onClick={() => paginate(i + 1)}
              className={`px-3 py-1 mx-1 text-sm font-medium rounded-lg focus:outline-none ${
                currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              {i + 1}
            </Button>
          </CustomGradientButton>
        ))}
      </div>
    </div>
  );
}
