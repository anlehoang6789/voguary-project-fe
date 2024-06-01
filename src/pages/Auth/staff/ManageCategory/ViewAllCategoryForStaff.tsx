// src/components/ViewAllCategoryForStaff.tsx
import React, { useState } from 'react';
import { Table, Button, Tag, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Category } from 'types/Category.type';
import { MdDelete } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';

// Mock data
const mockCategories: Category[] = [
  {
    categoryId: 1,
    categoryName: 'Quần',
    categoryDescription:
      'Vẻ ngoài cổ điển được xử lý bằng Adicolor. Tủ quần áo thiết yếu này thể hiện phong cách Firebird mang tính biểu tượng mà bạn biết và yêu thích - nhưng với đường cắt hiện đại và bảng màu tươi mới. Logo Trefoil thêu trên ngực và 3 Sọc dọc dọc cánh tay là DNA thuần túy của adidas, trong khi cổ áo dựng đứng mang đến cho bạn phong cách và phong cách mà bạn cần để làm chủ cả ngày của mình.',
    categoryStatus: 'Đang sử dụng'
  },
  {
    categoryId: 2,
    categoryName: 'Áo',
    categoryDescription:
      'Hãy cất những thứ cần thiết trong túi có khóa kéo và luôn ấm cúng với cổ tay áo có gân. Màu sắc yêu thích của bạn là gì? BIẾT Dấu chân CARBON: Tất cả các giai đoạn trong vòng đời đều đã được xem xét trong phương pháp tính toán dấu chân carbon của sản phẩm của chúng tôi và dựa trên kích thước nguyên mẫu của adidas. Từ khâu khai thác nguyên liệu thô, chế biến, sản xuất & lắp ráp, đóng gói, vận chuyển, sử dụng và cho đến hết vòng đời sản phẩm, chúng tôi đã đo lượng khí thải carbon (CO2e).',
    categoryStatus: 'Không còn sử dụng'
  },
  {
    categoryId: 3,
    categoryName: 'Áo',
    categoryDescription:
      'Hãy cất những thứ cần thiết trong túi có khóa kéo và luôn ấm cúng với cổ tay áo có gân. Màu sắc yêu thích của bạn là gì? BIẾT Dấu chân CARBON: Tất cả các giai đoạn trong vòng đời đều đã được xem xét trong phương pháp tính toán dấu chân carbon của sản phẩm của chúng tôi và dựa trên kích thước nguyên mẫu của adidas. Từ khâu khai thác nguyên liệu thô, chế biến, sản xuất & lắp ráp, đóng gói, vận chuyển, sử dụng và cho đến hết vòng đời sản phẩm, chúng tôi đã đo lượng khí thải carbon (CO2e).',
    categoryStatus: 'Không còn sử dụng'
  },
  {
    categoryId: 4,
    categoryName: 'Áo',
    categoryDescription:
      'Hãy cất những thứ cần thiết trong túi có khóa kéo và luôn ấm cúng với cổ tay áo có gân. Màu sắc yêu thích của bạn là gì? BIẾT Dấu chân CARBON: Tất cả các giai đoạn trong vòng đời đều đã được xem xét trong phương pháp tính toán dấu chân carbon của sản phẩm của chúng tôi và dựa trên kích thước nguyên mẫu của adidas. Từ khâu khai thác nguyên liệu thô, chế biến, sản xuất & lắp ráp, đóng gói, vận chuyển, sử dụng và cho đến hết vòng đời sản phẩm, chúng tôi đã đo lượng khí thải carbon (CO2e).',
    categoryStatus: 'Không còn sử dụng'
  },
  {
    categoryId: 5,
    categoryName: 'Áo',
    categoryDescription:
      'Hãy cất những thứ cần thiết trong túi có khóa kéo và luôn ấm cúng với cổ tay áo có gân. Màu sắc yêu thích của bạn là gì? BIẾT Dấu chân CARBON: Tất cả các giai đoạn trong vòng đời đều đã được xem xét trong phương pháp tính toán dấu chân carbon của sản phẩm của chúng tôi và dựa trên kích thước nguyên mẫu của adidas. Từ khâu khai thác nguyên liệu thô, chế biến, sản xuất & lắp ráp, đóng gói, vận chuyển, sử dụng và cho đến hết vòng đời sản phẩm, chúng tôi đã đo lượng khí thải carbon (CO2e).',
    categoryStatus: 'Không còn sử dụng'
  },
  {
    categoryId: 6,
    categoryName: 'Áo',
    categoryDescription:
      'Hãy cất những thứ cần thiết trong túi có khóa kéo và luôn ấm cúng với cổ tay áo có gân. Màu sắc yêu thích của bạn là gì? BIẾT Dấu chân CARBON: Tất cả các giai đoạn trong vòng đời đều đã được xem xét trong phương pháp tính toán dấu chân carbon của sản phẩm của chúng tôi và dựa trên kích thước nguyên mẫu của adidas. Từ khâu khai thác nguyên liệu thô, chế biến, sản xuất & lắp ráp, đóng gói, vận chuyển, sử dụng và cho đến hết vòng đời sản phẩm, chúng tôi đã đo lượng khí thải carbon (CO2e).',
    categoryStatus: 'Không còn sử dụng'
  }
  // Add more mock categories here...
];

const columns: ColumnsType<Category> = [
  {
    title: 'STT',
    dataIndex: 'categoryId',
    key: 'categoryId',
    render: (text) => <span>{text}</span>,
    align: 'center'
  },
  {
    title: 'Tên loại hàng',
    dataIndex: 'categoryName',
    key: 'categoryName',
    render: (text) => <span>{text}</span>,
    align: 'center'
  },
  {
    title: 'Mô tả loại hàng',
    dataIndex: 'categoryDescription',
    key: 'categoryDescription',
    render: (text) => <span>{text.length > 50 ? `${text.substring(0, 50)}...` : text}</span>,
    align: 'center'
  },
  {
    title: 'Trạng thái loại hàng',
    dataIndex: 'categoryStatus',
    key: 'categoryStatus',
    render: (text) => <Tag color={text === 'Đang sử dụng' ? 'green' : 'red'}>{text}</Tag>,
    align: 'center'
  },
  {
    title: 'Hành động',
    key: 'action',
    render: () => (
      <div className='flex justify-center'>
        <Button danger className='flex items-center'>
          <MdDelete className='mr-2' /> Xóa
        </Button>
      </div>
    ),
    align: 'center'
  }
];

export default function ViewAllCategoryForStaff() {
  const [current, setCurrent] = useState(1);
  const [searchText, setSearchText] = useState('');

  const onChange = (page: number) => {
    setCurrent(page);
  };

  const onSearch = (value: string) => {
    setSearchText(value);
  };

  const filteredCategories = mockCategories.filter((category) =>
    category.categoryName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Tất cả loại hàng</h1>
      <Input.Search
        placeholder='Tìm kiếm theo tên loại hàng'
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
        dataSource={filteredCategories}
        pagination={{
          current,
          pageSize: 10,
          total: filteredCategories.length,
          onChange: onChange
        }}
        rowKey='categoryId'
      />
    </div>
  );
}
