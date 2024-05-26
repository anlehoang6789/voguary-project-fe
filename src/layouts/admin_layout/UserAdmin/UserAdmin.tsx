import React, { useState } from 'react';
import { RiPencilLine } from 'react-icons/ri';
const defaultAvatar =
  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Avatar%2Favatar_preview_default.png?alt=media&token=0bbfe019-baaa-4bce-ba00-c9f08f868a1c';
const fakeDataUsers = [
  {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    position: 'Lập trình viên React',
    status: 'Online',
    imgSrc: defaultAvatar
  },
  {
    name: 'Trần Thị B',
    email: 'tranthib@example.com',
    position: 'Nhà thiết kế',
    status: 'Online',
    imgSrc: defaultAvatar
  },
  {
    name: 'Lê Văn C',
    email: 'levanc@example.com',
    position: 'Lập trình viên Vue JS',
    status: 'Online',
    imgSrc: defaultAvatar
  },
  {
    name: 'Phạm Thị D',
    email: 'phamthid@example.com',
    position: 'Kỹ sư UI/UX',
    status: 'Online',
    imgSrc: defaultAvatar
  },
  {
    name: 'Hoàng Văn E',
    email: 'hoangvane@example.com',
    position: 'Chuyên gia SEO',
    status: 'Offline',
    imgSrc: defaultAvatar
  },
  {
    name: 'Lý Thị F',
    email: 'lythif@example.com',
    position: 'Chuyên gia Marketing',
    status: 'Online',
    imgSrc: defaultAvatar
  },
  {
    name: 'Đặng Văn G',
    email: 'dangvang@example.com',
    position: 'Chuyên gia Phân tích Dữ liệu',
    status: 'Online',
    imgSrc: defaultAvatar
  },
  {
    name: 'Vũ Thị H',
    email: 'vuthih@example.com',
    position: 'Nhà Phát Triển Back-end',
    status: 'Offline',
    imgSrc: defaultAvatar
  },
  {
    name: 'Bùi Văn I',
    email: 'buivani@example.com',
    position: 'Kỹ sư DevOps',
    status: 'Online',
    imgSrc: defaultAvatar
  },
  {
    name: 'Đỗ Thị J',
    email: 'dothij@example.com',
    position: 'Nhà Quản Lý Sản Phẩm',
    status: 'Offline',
    imgSrc: defaultAvatar
  }
];

export default function UserAdmin() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = fakeDataUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <div className='flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white'>
        <div>
          <button
            id='dropdownActionButton'
            onClick={toggleDropdown}
            className='inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5'
            type='button'
          >
            <span className='sr-only'>Action button</span>
            Action
            <svg
              className='w-2.5 h-2.5 ms-2.5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div id='dropdownAction' className='z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44'>
              <ul className='py-1 text-sm text-gray-700' aria-labelledby='dropdownActionButton'>
                <li>
                  <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                    Reward
                  </a>
                </li>
                <li>
                  <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                    Promote
                  </a>
                </li>
                <li>
                  <a href='#' className='block px-4 py-2 hover:bg-gray-100'>
                    Activate account
                  </a>
                </li>
              </ul>
              <div className='py-1'>
                <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                  Delete User
                </a>
              </div>
            </div>
          )}
        </div>
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
          <input
            type='text'
            id='table-search-users'
            className='block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
            placeholder='Search for users'
          />
        </div>
      </div>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
          <tr>
            <th scope='col' className='p-4'>
              <div className='flex items-center'>
                <input
                  id='checkbox-all-search'
                  type='checkbox'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                />
                <label htmlFor='checkbox-all-search' className='sr-only'>
                  checkbox
                </label>
              </div>
            </th>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Position
            </th>
            <th scope='col' className='px-6 py-3'>
              Status
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index} className='bg-white border-b hover:bg-gray-50'>
              <td className='w-4 p-4'>
                <div className='flex items-center'>
                  <input
                    id={`checkbox-table-search-${index + 1}`}
                    type='checkbox'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                  />
                  <label htmlFor={`checkbox-table-search-${index + 1}`} className='sr-only'>
                    checkbox
                  </label>
                </div>
              </td>
              <th scope='row' className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap'>
                <img className='w-10 h-10 rounded-full' src={user.imgSrc} alt={`${user.name} image`} />
                <div className='ps-3'>
                  <div className='text-base font-semibold'>{user.name}</div>
                  <div className='font-normal text-gray-500'>{user.email}</div>
                </div>
              </th>
              <td className='px-6 py-4'>{user.position}</td>
              <td className='px-6 py-4'>
                <div className='flex items-center'>
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${user.status === 'Online' ? 'bg-green-500' : 'bg-red-500'} me-2`}
                  ></div>
                  {user.status}
                </div>
              </td>
              <td className='px-6 py-4'>
                <button onClick={toggleModal} className='text-blue-600 hover:underline focus:outline-none'>
                  <RiPencilLine className='w-5 h-5' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div
          id='editUserModal'
          className='fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full bg-gray-900 bg-opacity-50'
        >
          <div className='relative w-full h-full max-w-2xl md:h-auto'>
            <div className='relative bg-white rounded-lg shadow'>
              <div className='flex items-start justify-between p-4 border-b rounded-t'>
                <h3 className='text-xl font-semibold text-gray-900'>Edit user</h3>
                <button
                  onClick={toggleModal}
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
                <form action='#'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor='first-name' className='block mb-2 text-sm font-medium text-gray-900'>
                        First Name
                      </label>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                        placeholder='Bonnie'
                        required
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor='last-name' className='block mb-2 text-sm font-medium text-gray-900'>
                        Last Name
                      </label>
                      <input
                        type='text'
                        name='last-name'
                        id='last-name'
                        className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                        placeholder='Green'
                        required
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>
                        Email
                      </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                        placeholder='example@company.com'
                        required
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor='phone-number' className='block mb-2 text-sm font-medium text-gray-900'>
                        Phone Number
                      </label>
                      <input
                        type='tel'
                        name='phone-number'
                        id='phone-number'
                        className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                        placeholder='123-456-7890'
                        required
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor='department' className='block mb-2 text-sm font-medium text-gray-900'>
                        Department
                      </label>
                      <input
                        type='text'
                        name='department'
                        id='department'
                        className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                        placeholder='Development'
                        required
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
                      <label htmlFor='company' className='block mb-2 text-sm font-medium text-gray-900'>
                        Company
                      </label>
                      <input
                        type='text'
                        name='company'
                        id='company'
                        className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
                        placeholder='Company X'
                        required
                      />
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='mt-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='flex justify-center mt-4'>
        {Array.from({ length: Math.ceil(fakeDataUsers.length / usersPerPage) }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 mx-1 text-sm font-medium rounded-lg focus:outline-none ${
              currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
