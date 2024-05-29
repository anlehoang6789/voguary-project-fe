import { Carousel } from 'antd';

const firebaseImageUrl1 =
  // 'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Logo_Website%2Flogo_blue_bg.jpg?alt=media&token=40f8db55-65d2-4595-834a-3a94baf2e93a';
  'https://via.placeholder.com/1600x400';

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
