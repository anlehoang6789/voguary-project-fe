import { Button, Col, Rate, Row, Typography } from 'antd';
import { useState } from 'react';
import { RxCaretDown } from 'react-icons/rx';
import { StarFilled } from '@ant-design/icons';

export default function ProductDetailsReview() {
  const [rating, setRating] = useState(5.0);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Gia Minh',
      rating: 5,
      review:
        'They are comfortable, I like them for my daily life and they are very good to use on the beach. They can be used as bathing flip-flops.',
      title: 'Amazing',
      size: 'M',
      color: 'Đỏ',
      date: '19/05/2024'
    },
    {
      id: 2,
      name: 'Gia Minh',
      rating: 5,
      review: 'So comfortable im really like it for long walks..',
      title: 'Amazing',
      size: 'M',
      color: 'Đỏ',
      date: '19/05/2024'
    },
    {
      id: 3,
      name: 'Gia Minh',
      rating: 5,
      review: 'Bit big on the strap',
      title: 'Amazing',
      size: 'M',
      color: 'Đỏ',
      date: '19/05/2024'
    },
    {
      id: 4,
      name: 'Gia Minh',
      rating: 5,
      review: 'So comfortable im really like it for long walks..',
      title: 'Amazing',
      size: 'M',
      color: 'Đỏ',
      date: '19/05/2024'
    },
    {
      id: 5,
      name: 'Gia Minh',
      rating: 5,
      review: 'So comfortable im really like it for long walks..',
      title: 'Amazing',
      size: 'M',
      color: 'Đỏ',
      date: '19/05/2024'
    },
    {
      id: 6,
      name: 'Gia Minh',
      rating: 5,
      review: 'So comfortable im really like it for long walks..',
      title: 'Amazing',
      size: 'M',
      color: 'Đỏ',
      date: '19/05/2024'
    },
    {
      id: 7,
      name: 'Gia Minh',
      rating: 5,
      review: 'So comfortable im really like it for long walks..',
      title: 'Amazing',
      size: 'M',
      color: 'Đỏ',
      date: '19/05/2024'
    },
    {
      id: 8,
      name: 'Gia Minh',
      rating: 5,
      review: 'So comfortable im really like it for long walks..',
      title: 'Amazing',
      size: 'M',
      color: 'Đỏ',
      date: '19/05/2024'
    },
    {
      id: 9,
      name: 'Gia Minh',
      rating: 5,
      review: 'So comfortable im really like it for long walks..',
      title: 'Amazing',
      size: 'M',
      color: 'Đỏ',
      date: '19/05/2024'
    },
    {
      id: 10,
      name: 'Gia Minh',
      rating: 5,
      review: 'So comfortable im really like it for long walks..',
      title: 'Amazing',
      size: 'M',
      color: 'Đỏ',
      date: '19/05/2024'
    },
    {
      id: 11,
      name: 'Gia Minh',
      rating: 5,
      review: 'So comfortable im really like it for long walks..',
      title: 'Amazing',
      size: 'M',
      color: 'Đỏ',
      date: '19/05/2024'
    },
    {
      id: 12,
      name: 'Gia Minh',
      rating: 5,
      review: 'So comfortable im really like it for long walks..',
      title: 'Amazing',
      size: 'M',
      color: 'Đỏ',
      date: '19/05/2024'
    }
  ]);

  const [visibleReviews, setVisibleReviews] = useState(5);

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 5);
  };

  return (
    <div className='flex flex-col gap-1'>
      <Typography.Title level={3} className='mr-2'>
        {rating} <Rate value={rating} disabled />
      </Typography.Title>

      <Typography.Text className='text-lg font-bold border-t-2 pt-4 '>Lọc theo xếp loại sao</Typography.Text>
      <div className='flex mt-2 mb-4'>
        <Button className='flex justify-center items-center'>
          <StarFilled />1
        </Button>

        <Button className='flex justify-center items-center ml-2'>
          <StarFilled />2
        </Button>

        <Button className='flex justify-center items-center ml-2'>
          <StarFilled />3
        </Button>

        <Button className='flex justify-center items-center ml-2'>
          <StarFilled />4
        </Button>

        <Button className='flex justify-center items-center ml-2'>
          <StarFilled />5
        </Button>
      </div>

      <div className='flex flex-col gap-2'>
        {reviews.slice(0, visibleReviews).map((review) => (
          <Row key={review.id} className=' flex flex-col mb-6'>
            <Row className='flex flex-row border-t-2 pt-2'>
              <Col span={10}>
                <Typography.Text className='text-base font-semibold'>{review.name}</Typography.Text>
                <br></br>
                <Rate className='mt-2 text-base' value={review.rating} disabled />
              </Col>

              <Col span={14}>
                <Typography.Text className='text-lg font-bold'>{review.title}</Typography.Text>
                <Typography.Text className='text-xs float-right'>{review.date}</Typography.Text>
                <br></br>
                <Typography.Text className='text-xs font-bold'>
                  Size: {review.size}, Màu sắc: {review.color}
                </Typography.Text>
                <br></br>
                <Typography.Text className='text-sm'>{review.review}</Typography.Text>
              </Col>
            </Row>
          </Row>
        ))}
      </div>
      {visibleReviews < reviews.length && (
        <div className='flex justify-center'>
          <button
            className='load-more-button border-2 border-black p-3 transition-all duration-500 hover:-translate-y-2'
            onClick={loadMoreReviews}
          >
            <span className='inline-flex items-center'>
              Xem thêm đánh giá <RxCaretDown className='text-lg' />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
