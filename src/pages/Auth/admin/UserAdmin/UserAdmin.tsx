import React, { useState } from 'react';
import Search from 'antd/es/input/Search';
import { Button, Tooltip } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import CustomGradientButton from 'components/CustomGradientButton';

const fakeDataUsers = [
  {
    userId: 1,
    userName: 'admin123',
    fullName: 'Nguyễn Văn A',
    password: '$2a$11$1br8uB9uT79Vf9rwyc5uGeQtXIKbZylxpqk3OvJRNrXiBlkFBvhKu',
    phone: '0909123456',
    gender: 1,
    dateOfBirth: '1985-01-01',
    email: 'admin@example.com',
    profileImage:
      'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C3%A1o%20d%C3%A0i.jpg?alt=media&token=4de95e39-5ddf-4b30-982b-cafdbea76e40',
    accountStatus: 'Active',
    membershipTypeName: null
  },
  {
    userId: 2,
    userName: 'admin123',
    fullName: 'Nguyễn Văn B',
    password: '$2a$11$1br8uB9uT79Vf9rwyc5uGeQtXIKbZylxpqk3OvJRNrXiBlkFBvhKu',
    phone: '0909123456',
    gender: 2,
    dateOfBirth: '1985-01-01',
    email: 'admin@example.com',
    profileImage:
      'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Products%2F%C3%A1o%20d%C3%A0i.jpg?alt=media&token=4de95e39-5ddf-4b30-982b-cafdbea76e40',
    accountStatus: 'Active',
    membershipTypeName: null
  }

  // Add more users here
];

interface User {
  userId: number;
  userName: string;
  fullName: string;
  password: string;
  phone: string;
  gender: number;
  dateOfBirth: string;
  email: string;
  profileImage: string;
  accountStatus: string;
  membershipTypeName: string | null;
}

export default function UserPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleModal = (user: User | null) => {
    setCurrentUser(user);
    setModalOpen(!isModalOpen);
  };

  const usersPerPage = 5;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = fakeDataUsers.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm)
  );

  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className='relative overflow-x-auto sm:rounded-lg'>
      <div className='flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white'>
        <label htmlFor='table-search' className='sr-only'>
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <Search
            className='mt-[-6]'
            size='large'
            placeholder='Tìm người dùng'
            style={{ width: '100%', paddingTop: '5px' }}
            onChange={handleSearch}
          />
        </div>
      </div>

      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Tên người dùng
            </th>
            <th scope='col' className='px-6 py-3'>
              Số điện thoại
            </th>
            <th scope='col' className='px-6 py-3'>
              Email
            </th>
            <th scope='col' className='px-6 py-3'>
              Trạng thái tài khoản
            </th>
            <th scope='col' className='px-6 py-3'></th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.userId} className='bg-white border-b hover:bg-gray-50'>
              <th scope='row' className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap'>
                <img className='w-10 h-10 rounded-full' src={user.profileImage} alt={`${user.fullName} image`} />
                <div className='ps-3'>
                  <div className='text-base font-semibold'>{user.fullName}</div>
                </div>
              </th>
              <td className='px-6 py-4'>{user.phone}</td>
              <td className='px-6 py-4'>{user.email}</td>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${user.accountStatus === 'Active' ? 'bg-green-500' : 'bg-red-500'} me-2`}
                  ></div>
                  {user.accountStatus}
                </div>
              </td>
              <td className='px-6 py-4'>
                <Tooltip title='Xem chi tiết'>
                  <button
                    onClick={() => toggleModal(user)}
                    className='text-blue-600 hover:underline focus:outline-none'
                  >
                    <EyeOutlined className='w-5 h-5' />
                  </button>
                </Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && currentUser && (
        <div
          id='viewUserModal'
          className='fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-gray-900 bg-opacity-50'
        >
          <div className='relative w-full h-full max-w-3xl'>
            <div className='relative bg-white rounded-lg shadow'>
              <div className='flex items-start justify-between p-4 border-b rounded-t'>
                <h3 className='text-xl font-semibold text-gray-900'>Xem chi tiết người dùng</h3>
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
              <div className='p-6 space-y-6'>
                <div className='flex justify-center'>
                  <img className='w-30 h-60 object-cover' src={currentUser.profileImage} alt={currentUser.fullName} />
                </div>
                <div className='grid grid-cols-6 gap-6'>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='user-name' className='block mb-2 text-sm font-medium text-gray-900'>
                      Tên người dùng
                    </label>
                    <label className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                      {currentUser.userName}
                    </label>
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='full-name' className='block mb-2 text-sm font-medium text-gray-900'>
                      Họ và tên
                    </label>
                    <label className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                      {currentUser.fullName}
                    </label>
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='phone' className='block mb-2 text-sm font-medium text-gray-900'>
                      Số điện thoại
                    </label>
                    <label className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                      {currentUser.phone}
                    </label>
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>
                      Email
                    </label>
                    <label className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                      {currentUser.email}
                    </label>
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='gender' className='block mb-2 text-sm font-medium text-gray-900'>
                      Giới tính
                    </label>
                    <label className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                      {currentUser.gender === 1 ? 'Nam' : 'Nữ'}
                    </label>
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='date-of-birth' className='block mb-2 text-sm font-medium text-gray-900'>
                      Ngày sinh
                    </label>
                    <label className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                      {currentUser.dateOfBirth}
                    </label>
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='status' className='block mb-2 text-sm font-medium text-gray-900'>
                      Trạng thái tài khoản
                    </label>
                    <label className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                      {currentUser.accountStatus}
                    </label>
                  </div>
                  <div className='col-span-6 sm:col-span-3'>
                    <label htmlFor='membership' className='block mb-2 text-sm font-medium text-gray-900'>
                      Loại thành viên
                    </label>
                    <label className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'>
                      {currentUser.membershipTypeName || 'N/A'}
                    </label>
                  </div>
                </div>
                <div className='flex justify-end'>
                  <CustomGradientButton>
                    <Button type='primary' onClick={() => toggleModal(null)}>
                      Đóng
                    </Button>
                  </CustomGradientButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='flex justify-center mt-4'>
        {Array.from({ length: Math.ceil(filteredUsers.length / usersPerPage) }, (_, i) => (
          <CustomGradientButton key={i}>
            <Button
              type={currentPage === i + 1 ? 'primary' : 'default'}
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
