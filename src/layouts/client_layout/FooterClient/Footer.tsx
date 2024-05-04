import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Row className='bg-black'>
      <Col span={24} className='text-white pl-40 mt-6 mb-6'>
        <FacebookOutlined className='text-white text-4xl mr-2' />
        <InstagramOutlined className='text-white text-4xl mr-2' />
        <TwitterOutlined className='text-white text-4xl mr-2 ' />
        <YoutubeOutlined className='text-white text-4xl ' />
      </Col>

      <Col span={8} className='text-white pl-40'>
        <div className='mb-6 '>
          <h1 className='mb-4 text-xl'>CHĂM SÓC KHÁCH HÀNG</h1>

          <Link to='#'>
            <p className='mb-4 '>Cách thức thuê trang phục</p>
          </Link>

          <Link to='#'>
            <p className='mb-4 '>Chính sách đổi trả</p>
          </Link>

          <Link to='#'>
            <p className='mb-4'>Điều khoản sử dụng</p>
          </Link>

          <Link to='#'>
            <p>Hình thức thanh toán</p>
          </Link>
        </div>
      </Col>

      <Col span={8} className='text-white pl-40'>
        <div className='mb-6 '>
          <h1 className='mb-4 text-xl'>VỀ VOGUARY</h1>

          <Link to='#'>
            <p className='mb-4 '>Giới thiệu về Voguary</p>
          </Link>

          <Link to='#'>
            <p className='mb-4 '>Cộng đồng</p>
          </Link>

          <Link to='#'>
            <p className='mb-4'>Quy trình giặt hấp</p>
          </Link>

          <Link to='#'>
            <p>Tuyển dụng</p>
          </Link>
        </div>
      </Col>

      <Col span={8} className='text-white pl-40'>
        <div className='mb-6 '>
          <h1 className='mb-4 text-xl'>LIÊN HỆ VỚI CHÚNG TÔI</h1>

          <Link to='#'>
            <p className='mb-4 '>Trung tâm đa phương tiện</p>
          </Link>

          <Link to='#'>
            <p className='mb-4 '>Quyền riêng tư</p>
          </Link>

          <Link to='#'>
            <p className='mb-4'>Liên hệ với chúng tôi</p>
          </Link>
        </div>
      </Col>

      <Col span={24} className='text-white mt-6 mb-6 text-center'>
        <p>© - 2024 Bản quyền của công ty Voguary</p>
      </Col>
    </Row>
  );
}
