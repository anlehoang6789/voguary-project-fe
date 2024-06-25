import { Alert, Button, Col, Form, Input, Row, Select, Skeleton, Tag } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import CustomGradientButton from 'components/CustomGradientButton';
import { useState } from 'react';
import { RcFile } from 'antd/es/upload';
import Dragger from 'antd/es/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';
import { useGetAllSizeQuery } from 'services/size.services';
import { useGetAllColorQuery } from 'services/color.services';
import { useGetAllCategoriesQuery } from 'services/category.services';

export default function AddProductForStaff() {
  const allowImageTypes = ['jpg', 'jpeg', 'png'];
  const [isImageFile, setIsImageFile] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [inputFilled, setInputFilled] = useState(false);

  //Lấy ra tất cả size từ API
  const { data: sizes, isLoading, error, isSuccess } = useGetAllSizeQuery();
  //Lấy ra tất cả color từ API
  const { data: colors, isLoading: colorLoading, error: colorError, isSuccess: colorIsSuccess } = useGetAllColorQuery();
  //Lấy tất cả category từ API
  const {
    data: categories,
    isLoading: categoryLoading,
    error: categoryError,
    isSuccess: categoryIsSuccess
  } = useGetAllCategoriesQuery();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setInputFilled(false);
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
    }
    setInputValue('');
    setInputFilled(true);
  };

  const handleTagClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
    if (newTags.length === 0) {
      setInputFilled(false);
    }
  };

  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const handleSizeClick = (size: string) => {
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((selectedSizes) => selectedSizes !== size)
        : [...prevSelectedSizes, size]
    );
  };

  const handleColorClick = (color: string) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((selectedColors) => selectedColors !== color)
        : [...prevSelectedColors, color]
    );
  };

  const checkBeforeUpload = (file: RcFile) => {
    const allowedFile = file.name.slice(((file.name.lastIndexOf('.') - 1) >>> 0) + 2);
    const isAllowed = allowImageTypes.includes(allowedFile.toLocaleLowerCase());
    setIsImageFile(isAllowed);
    return false;
  };

  return (
    <div className='flex-grow'>
      <h1 className='text-2xl text-center  font-bold mb-4'>Thêm sản phẩm</h1>

      <Form>
        <Row>
          <Col span={24} className='flex justify-center'>
            <FormItem
              name='productImg'
              rules={[{ required: true, message: 'Vui lòng chọn ảnh sản phẩm' }]}
              className='py-6'
            >
              <div>
                <Dragger beforeUpload={checkBeforeUpload}>
                  <p className='ant-upload-drag-icon'>
                    <InboxOutlined />
                  </p>
                  <p className='ant-upload-text'>Ấn hoặc kéo thả ảnh vào để upload</p>
                  <p className='ant-upload-hint'>Hỗ trợ định dạng: .jpg .jpeg .png</p>
                </Dragger>
              </div>
            </FormItem>
          </Col>

          <Col span={12}>
            <FormItem
              className='pl-10 '
              label={<span className='font-semibold'>Tên sản phẩm</span>}
              name='productName'
              rules={[
                { required: true, message: 'Vui lòng nhập tên sản phẩm' },
                {
                  pattern: /^.{2,}$/,
                  message: 'Tên sản phẩm phải có trên 2 kí tự'
                }
              ]}
            >
              <Input placeholder='Quần dài đẹp' className='w-full max-w-[300px]' />
            </FormItem>
          </Col>

          <Col span={12}>
            <FormItem
              className='pl-10 '
              label={<span className='font-semibold'>Loại hàng</span>}
              name='productType'
              rules={[{ required: true, message: 'Vui lòng chọn loại hàng' }]}
            >
              <Select className='w-full max-w-[300px]'>
                {categoryLoading && <Skeleton active />}
                {categoryError && <Alert message='Error loading category' type='error' />}
                {categoryIsSuccess &&
                  categories &&
                  categories.map((category) => (
                    <Select.Option value={category.categoryName} key={category.categoryId}>
                      {category.categoryName}
                    </Select.Option>
                  ))}
              </Select>
            </FormItem>
          </Col>

          <Col span={12}>
            <FormItem
              className='pl-10 pt-6'
              label={<span className='font-semibold'>Giá sản phẩm</span>}
              name='productPrice'
              rules={[
                { required: true, message: 'Vui lòng nhập giá sản phẩm' },
                {
                  pattern: /^\d{1,3}(?:\.\d{3}){1,2}$/,
                  message: 'Giá sản phẩm phải có định dạng xxx.xxx'
                }
              ]}
            >
              <Input placeholder='500.000' className='w-full max-w-[300px]' />
            </FormItem>
          </Col>

          <Col span={12}>
            <FormItem
              className='pl-10 pt-6'
              label={<span className='font-semibold'>Chi tiết sản phẩm</span>}
              name='productDetails'
              rules={[{ required: !inputFilled, message: 'Vui lòng nhập chi tiết sản phẩm' }]}
            >
              <>
                <Input
                  placeholder='Nhập chi tiết sản phẩm '
                  value={inputValue}
                  onChange={handleInputChange}
                  onPressEnter={handleInputConfirm}
                  className='w-full max-w-[250px]'
                />
                <div className='pt-2'>
                  {tags.map((tag, index) => (
                    <Tag key={index} closable onClose={() => handleTagClose(tag)}>
                      {tag}
                    </Tag>
                  ))}
                </div>
              </>
            </FormItem>
          </Col>

          <Col span={12}>
            <Form.Item
              className='pl-10 pt-6'
              label={<span className='font-semibold'>Màu sản phẩm</span>}
              name='productColor'
              rules={[{ required: true }]}
              validateStatus={selectedColors.length > 0 ? 'success' : 'error'}
              help={selectedColors.length > 0 ? '' : 'Vui lòng chọn màu sản phẩm'}
            >
              {colorLoading && <Skeleton active />}
              {colorError && <Alert message='Error loading colors' type='error' />}
              {colorIsSuccess &&
                colors &&
                colors.map((color) => (
                  <Button
                    size='large'
                    key={color.colorId}
                    style={{
                      backgroundColor: color.hexCode,
                      width: '40px',
                      height: '40px',
                      marginRight: '11px',
                      marginBottom: '5px',
                      position: 'relative'
                    }}
                    onClick={() => handleColorClick(color.hexCode)}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                      }}
                    >
                      {selectedColors.includes(color.hexCode) && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '24px',
                            color: color.hexCode === '#000000' ? '#FFFFFF' : '#000000'
                          }}
                        >
                          ✓
                        </div>
                      )}
                    </div>
                  </Button>
                ))}
            </Form.Item>
          </Col>

          <Col span={12}>
            <FormItem
              className='pl-10  pt-6'
              label={<span className='font-semibold'>Kích thước</span>}
              name='productSize'
              rules={[{ required: true }]}
              validateStatus={selectedSizes.length > 0 ? 'success' : 'error'}
              help={selectedSizes.length > 0 ? '' : 'Vui lòng chọn kích thước'}
            >
              {isLoading && <Skeleton active />}
              {error && <Alert message='Error loading sizes' type='error' />}
              {isSuccess &&
                sizes &&
                sizes.map((size) => (
                  <Button
                    size='large'
                    key={size.sizeId}
                    className={`inline-block text-sm px-3 py-1 !rounded-none mr-2 mb-2 ${
                      selectedSizes.includes(size.sizeName)
                        ? 'bg-gradient-to-r from-[#fdc830] to-[#f37335] text-white'
                        : ' text-gray-700'
                    }`}
                    onClick={() => handleSizeClick(size.sizeName)}
                  >
                    {size.sizeName}
                  </Button>
                ))}
            </FormItem>
          </Col>

          <Col span={24}>
            <Form.Item
              className='pl-10 pt-10'
              label={<span className='font-semibold'>Mô tả sản phẩm</span>}
              name='description'
              rules={[{ required: true, message: 'Vui lòng mô tả' }]}
            >
              <TextArea
                placeholder='Vẻ ngoài cổ điển được xử lý bằng Adicolor. Tủ quần áo thiết yếu này thể hiện phong cách Firebird mang tính biểu tượng mà bạn biết và yêu thích - nhưng với đường cắt hiện đại và bảng màu tươi mới. Logo Trefoil thêu trên ngực và 3 Sọc dọc dọc cánh tay là DNA thuần túy của adidas, trong khi cổ áo dựng đứng mang đến cho bạn phong cách và phong cách mà bạn cần để làm chủ cả ngày của mình.'
                autoSize={{ minRows: 3, maxRows: 5 }}
                style={{ width: '95%' }}
              />
            </Form.Item>
          </Col>
        </Row>
        <div className='flex justify-end '>
          <CustomGradientButton>
            <Button type='primary' htmlType='submit' size='large' className='!w-[10%] !mr-10 !mt-4'>
              Lưu
            </Button>
          </CustomGradientButton>
        </div>
      </Form>
    </div>
  );
}
