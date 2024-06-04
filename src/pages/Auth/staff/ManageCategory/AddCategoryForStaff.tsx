import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import { Option } from 'antd/es/mentions';
import ComingSoon from 'components/ComingSoon';
import CustomGradientButton from 'components/CustomGradientButton';

export default function AddCategoryForStaff() {
  return (
    <div className='flex-grow'>
      <h1 className='text-2xl text-center  font-bold mb-4'>Thêm loại loại hàng</h1>

      <Form>
        <Row>
          <Col span={12}>
            <FormItem
              className='pl-10 pt-10 '
              label={<span className='font-semibold'>Tên loại hàng</span>}
              name='typename'
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

          <Col span={12}>
            <Form.Item
              className='pl-10 pt-10'
              label={<span className='font-semibold'>Trạng thái</span>}
              name='status'
              rules={[
                { required: true, message: 'Vui lòng chọn trạng thái' },
                {
                  pattern: /^[a-zA-Z ]{2,10}$/,
                  message: 'Tên phải có từ 2 đến 10 ký tự'
                }
              ]}
            >
              <Select placeholder='Đang sử dụng' className='w-full max-w-[348px]'>
                <Option value='active'>Đang sử dụng</Option>
                <Option value='unactive'>Không còn sử dụng</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              className='pl-10 pt-10'
              label={<span className='font-semibold'>Mô tả loại hàng</span>}
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
