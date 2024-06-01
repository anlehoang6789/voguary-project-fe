import { Carousel } from 'antd';

const firebaseImageUrl1 =
  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Placeholder%2F1600x400.png?alt=media&token=f7acacf5-8923-44c1-8c58-8c376be0ace7';

export default function CustomCarousel() {
  return (
    <Carousel autoplay dots>
      <div>
        <img src={firebaseImageUrl1} alt='Slide 1' className='w-full h-48 md:h-64 lg:h-72 xl:h-80' />
      </div>
      <div>
        <img src={firebaseImageUrl1} alt='Slide 2' className='w-full h-48 md:h-64 lg:h-72 xl:h-80' />
      </div>
      <div>
        <img src={firebaseImageUrl1} alt='Slide 3' className='w-full h-48 md:h-64 lg:h-72 xl:h-80' />
      </div>
      <div>
        <img src={firebaseImageUrl1} alt='Slide 4' className='w-full h-48 md:h-64 lg:h-72 xl:h-80' />
      </div>
    </Carousel>
  );
}
