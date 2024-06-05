import { Button, Col, Form, Input, Row, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { Option } from 'antd/es/mentions';
import CustomGradientButton from 'components/CustomGradientButton';
import { useState } from 'react';
import { RcFile } from 'antd/es/upload';
import Dragger from 'antd/es/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';

export default function AddProductForStaff() {
  const defaultAvatar =
    'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Avatar%2Favatar_preview_default.png?alt=media&token=0bbfe019-baaa-4bce-ba00-c9f08f868a1c';

  const allowImageTypes = ['jpg', 'jpeg', 'png'];
  const [previewImage, setPreviewImage] = useState(defaultAvatar);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isImageFile, setIsImageFile] = useState(false);

  const colors = ['#FF0000', '#00FF00', '#310dd351', '#FFFF00', '#FF00FF', '#00FFFF', '#000000', '#FFFFFF'];
  const [selectedColors, setSelectedColors] = useState<string[]>([colors[0]]);

  const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL'];
  const [selectedSizes, setSelectedSizes] = useState<string[]>([sizes[0]]);

  const handleSizeClick = (size: string) => {
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((selectedSize) => selectedSize !== size)
        : [...prevSelectedSizes, size]
    );
  };

  const handleColorClick = (color: string) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((selectedColor) => selectedColor !== color)
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
              <Select placeholder='Quần dài' className='w-full max-w-[300px]'>
                <Option value='pants'>Quần dài</Option>
                <Option value='shorts'>Quần ngắn</Option>
                <Option value='trouser'>Quần tây</Option>
                <Option value='t-shirt'>Áo thun</Option>
                <Option value='shirt'>Áo sơ mi</Option>
                <Option value='vest'>Áo vest</Option>
                <Option value='dress'>Đầm</Option>
                <Option value='vay'>Váy</Option>
                <Option value='aodai'>Áo dài</Option>
                <Option value='jewelry'>Trang sức</Option>
              </Select>
            </FormItem>
          </Col>

          <Col span={24}>
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
            <Form.Item
              className='pl-10 pt-6'
              label={<span className='font-semibold'>Màu sản phẩm</span>}
              name='productColor'
              rules={[{ required: true }]}
              validateStatus={selectedColors.length > 0 ? 'success' : 'error'}
              help={selectedColors.length > 0 ? '' : 'Vui lòng chọn màu sản phẩm'}
            >
              {colors.map((color, index) => (
                <Button
                  size='large'
                  key={index}
                  style={{
                    backgroundColor: color,
                    width: '40px',
                    height: '40px',
                    marginRight: '11px',
                    marginBottom: '5px',
                    position: 'relative'
                  }}
                  onClick={() => handleColorClick(color)}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%'
                    }}
                  >
                    {selectedColors.includes(color) && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          fontSize: '24px',
                          color: color === '#000000' ? '#FFFFFF' : '#000000'
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
              {sizes.map((size, index) => (
                <Button
                  size='large'
                  key={index}
                  className={`inline-block text-sm px-3 py-1 !rounded-none mr-2 mb-2 ${
                    selectedSizes.includes(size)
                      ? 'bg-gradient-to-r from-[#00c6ff] to-blue-700 text-white'
                      : ' text-gray-700'
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
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
