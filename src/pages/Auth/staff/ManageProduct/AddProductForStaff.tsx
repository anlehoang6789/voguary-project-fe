import { Alert, Button, Col, Form, Input, Row, Select, Skeleton, Tag, notification } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import CustomGradientButton from 'components/CustomGradientButton';
import { useState } from 'react';

import { useGetAllSizeQuery } from 'services/size.services';
import { useGetAllColorQuery } from 'services/color.services';
import { useGetAllCategoriesQuery } from 'services/category.services';
import { useAddProductMutation } from 'services/product.services';
import { AddProductRequest, ProductDetail } from 'types/Product.type';

export default function AddProductForStaff() {
  const [form] = Form.useForm();
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

  const [addProductMutation, { isLoading: addLoading }] = useAddProductMutation();

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

  const [selectedColors, setSelectedColors] = useState<number[]>([]);
  const [colorImages, setColorImages] = useState<{ [key: number]: string }>({});

  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);

  const handleSizeClick = (sizeId: number) => {
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(sizeId)
        ? prevSelectedSizes.filter((selectedSizes) => selectedSizes !== sizeId)
        : [...prevSelectedSizes, sizeId]
    );
  };

  const handleColorClick = (colorId: number) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(colorId)
        ? prevSelectedColors.filter((selectedColors) => selectedColors !== colorId)
        : [...prevSelectedColors, colorId]
    );
  };

  const handleColorImageChange = (colorId: number, imageUrl: string) => {
    setColorImages((prevColorImages) => ({
      ...prevColorImages,
      [colorId]: imageUrl
    }));
  };

  const handleFormSubmit = async () => {
    try {
      const productDetail: ProductDetail = {
        description: tags[0] || '',
        additionalInformation: tags[1] || '',
        shippingAndReturns: tags[2] || '',
        sizeChart: tags[3] || '',
        reviews: tags[4] || '',
        questions: tags[5] || '',
        vendorInfo: tags[6] || '',
        moreProducts: tags[7] || '',
        productPolicies: tags[8] || ''
      };

      const productRequest: AddProductRequest = {
        name: form.getFieldValue('productName'),
        title: form.getFieldValue('productTitle'),
        description: form.getFieldValue('productDescription'),
        productImage: [form.getFieldValue('productImg')],
        price: form.getFieldValue('productPrice'),
        categoryId: form.getFieldValue('productType'),
        existingColorIds: selectedColors.map((colorId) => ({
          colorId,
          colorImage: colorImages[colorId] || '' // Sử dụng giá trị của colorImage từ state
        })),
        existingSizeIds: selectedSizes,
        productDetail
      };

      await addProductMutation(productRequest).unwrap();

      notification.success({ message: 'Thêm sản phẩm thành công' });
      // Xử lý logic sau khi thêm sản phẩm thành công
    } catch (error) {
      notification.error({ message: 'Thêm sản phẩm thất bại' });
      // Xử lý lỗi khi thêm sản phẩm
    }
  };

  return (
    <div className='flex-grow'>
      <h1 className='text-2xl text-center  font-bold mb-4'>Thêm sản phẩm</h1>

      <Form form={form} onSubmitCapture={handleFormSubmit}>
        <Row>
          <Col span={24} className=''>
            <FormItem
              name='productImg'
              label={<span className='font-semibold'>Ảnh sản phẩm</span>}
              rules={[{ required: true, message: 'Vui lòng chọn ảnh sản phẩm' }]}
              className='py-6 pl-10'
            >
              <Input placeholder='' className='w-full max-w-[900px]' />
            </FormItem>
          </Col>

          <Col span={24}>
            <FormItem
              className='pl-10 pb-6 '
              label={<span className='font-semibold'>Tiêu đề sản phẩm</span>}
              name='productTitle'
              rules={[
                { required: true, message: 'Vui lòng nhập tiêu đề sản phẩm' },
                {
                  pattern: /^.{2,}$/,
                  message: 'Tên sản phẩm phải có trên 2 kí tự'
                }
              ]}
            >
              <Input placeholder='Quần dài đẹp lung linh' className='w-full max-w-[300px]' />
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
                    <Select.Option value={category.categoryId} key={category.categoryId}>
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
              rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm' }]}
            >
              <Input placeholder='500.000' className='w-full max-w-[300px]' />
            </FormItem>
          </Col>

          <Col span={12}>
            <FormItem
              className='pl-10 pt-6'
              label={<span className='font-semibold'>Chi tiết sản phẩm</span>}
              name='productDetails'
            >
              <>
                <Input
                  placeholder='Nhập chi tiết sản phẩm '
                  value={inputValue}
                  onChange={handleInputChange}
                  onPressEnter={(e) => {
                    e.preventDefault();
                    handleInputConfirm();
                  }}
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
                  <div key={color.colorId} style={{ marginBottom: '10px' }}>
                    <Button
                      size='large'
                      style={{
                        backgroundColor: color.hexCode,
                        width: '40px',
                        height: '40px',
                        marginRight: '11px',
                        position: 'relative'
                      }}
                      onClick={() => handleColorClick(color.colorId)}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%'
                        }}
                      >
                        {selectedColors.includes(color.colorId) && (
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
                    {selectedColors.includes(color.colorId) && (
                      <Input
                        placeholder='Nhập đường link hình'
                        value={colorImages[color.colorId] || ''}
                        onChange={(e) => handleColorImageChange(color.colorId, e.target.value)}
                        className='w-full max-w-[250px]'
                      />
                    )}
                  </div>
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
                      selectedSizes.includes(size.sizeId)
                        ? 'bg-gradient-to-r from-[#fdc830] to-[#f37335] text-white'
                        : ' text-gray-700'
                    }`}
                    onClick={() => handleSizeClick(size.sizeId)}
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
              name='productDescription'
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
