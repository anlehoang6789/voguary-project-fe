import { Alert, Button, Col, Rate, Row, Skeleton, Typography } from 'antd';
import { useState } from 'react';
import { RxCaretDown } from 'react-icons/rx';
import { StarFilled } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useGetFeedbackQuery } from 'services/product.services';

export default function ProductDetailsReview() {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading, isError } = useGetFeedbackQuery(Number(id));
  // console.log('data của feedback:', data);

  const [visibleReviews, setVisibleReviews] = useState(5);

  if (isLoading) {
    // Render skeleton when loading
    return (
      <div className='flex flex-col gap-1'>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </div>
    );
  }

  if (isError) {
    // Render error message if there's an error
    return <Alert message='Error' description={`There was an error fetching data: ${error}`} type='error' showIcon />;
  }

  // If data is null or undefined, handle accordingly
  if (!data) {
    return <Alert message='No Data' description='No feedback data found.' type='info' showIcon />;
  }

  const loadMoreReviews = () => {
    setVisibleReviews((prev) => prev + 5);
  };

  return (
    <div className='flex flex-col gap-1'>
      <Typography.Title level={3} className='mr-2'>
        {data?.averageRating.toFixed(1)} <Rate value={data?.averageRating} disabled />
      </Typography.Title>
      <Typography.Text className='text-lg font-bold border-t-2 pt-4 '>Lọc theo xếp loại sao</Typography.Text>
      <div className='flex mt-2 mb-4'>
        {[1, 2, 3, 4, 5].map((star) => (
          <Button key={star} className='flex justify-center items-center ml-2'>
            <StarFilled className='mr-2' />
            {star}
          </Button>
        ))}
      </div>

      <div className='flex flex-col gap-2'>
        {data?.ratings.slice(0, visibleReviews).map((review) => (
          <Row key={review.ratingId} className=' flex flex-col mb-6'>
            <Row className='flex flex-row border-t-2 pt-2'>
              <Col span={10}>
                <Typography.Text className='text-base font-semibold'>{review.userName}</Typography.Text>
                <br></br>
                <Rate className='mt-2 text-base' value={review.ratingValue} disabled />
              </Col>

              <Col span={14}>
                <Typography.Text className='text-lg font-bold'>Rất đẹp</Typography.Text>
                <Typography.Text className='text-xs float-right'>{review.dateGiven}</Typography.Text>
                <br></br>
                <Typography.Text className='text-xs font-bold'>Size: , Màu sắc:</Typography.Text>
                <br></br>
                <Typography.Text className='text-sm'>{review.feedbackComment}</Typography.Text>
                <br></br>
                <img src={review.feedbackImage} alt={`Feedback ${review.ratingId}`} className='w-full h-auto' />
              </Col>
            </Row>
          </Row>
        ))}
      </div>
      {visibleReviews < data?.ratings.length && (
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
