import React from 'react';
import { Button, Carousel, Card } from 'antd';

function HomePage() {
  const firebaseImageUrl =
    'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Website%2Flogo_blue_bg.jpg?alt=media&token=40f8db55-65d2-4595-834a-3a94baf2e93a';

  const hotProducts = [
    {
      id: 1,
      name: 'Sản phẩm 1',
      imageUrl: firebaseImageUrl
    },
    {
      id: 2,
      name: 'Sản phẩm 2',
      imageUrl: firebaseImageUrl
    },
    {
      id: 3,
      name: 'Sản phẩm 3',
      imageUrl: firebaseImageUrl
    },
    {
      id: 4,
      name: 'Sản phẩm 4',
      imageUrl: firebaseImageUrl
    }
  ];

  return (
    <div className='mx-auto max-w-screen-xl'>
      <Carousel autoplay>
        <div>
          <img src={firebaseImageUrl} alt='Slide 1' className='w-full h-48 md:h-64 lg:h-72 xl:h-80' />
        </div>
        <div>
          <img src={firebaseImageUrl} alt='Slide 2' className='w-full h-48 md:h-64 lg:h-72 xl:h-80' />
        </div>
        <div>
          <img src={firebaseImageUrl} alt='Slide 3' className='w-full h-48 md:h-64 lg:h-72 xl:h-80' />
        </div>
        <div>
          <img src={firebaseImageUrl} alt='Slide 4' className='w-full h-48 md:h-64 lg:h-72 xl:h-80' />
        </div>
      </Carousel>

      <div className='mt-8 mx-auto max-w-screen-xl'>
        <div className='flex justify-between'>
          <h2 className='text-base md:text-lg lg:text-xl xl:text-2xl font-bold font-rounded'>Xu hướng thịnh hành</h2>
          <Button type='primary'>Xem tất cả</Button>
        </div>
        <div className='flex mt-4 justify-center'>
          <div className='mr-8'>
            <img
              src={firebaseImageUrl}
              alt='Trend 1'
              className='w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-96 xl:h-96'
            />
          </div>
          <div>
            <img
              src={firebaseImageUrl}
              alt='Trend 2'
              className='w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-96 xl:h-96'
            />
          </div>
        </div>
      </div>

      <div className='mt-8 mx-auto max-w-screen-xl'>
        <h2 className='text-base md:text-lg lg:text-xl xl:text-2xl font-bold font-rounded'>Sản phẩm hot</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4'>
          {hotProducts.map((product) => (
            <Card
              key={product.id}
              hoverable
              cover={
                <img alt={product.name} src={product.imageUrl} className='h-48 md:h-64 lg:h-72 xl:h-80 object-cover' />
              }
            >
              <Card.Meta title={product.name} />
              <Button type='primary' className='mt-2 w-full'>
                Mua ngay
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
