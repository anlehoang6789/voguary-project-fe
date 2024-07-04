import Slider from 'react-slick';

const imageUrls1 =
  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Banner%2F448749977_122114863820327879_5976207896387936120_n.png?alt=media&token=1de2af9e-c7a6-4328-991a-d12ccfa6ddca';
const imageUrls2 =
  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Banner%2F448653275_122114522996327879_3144253116482339838_n.jpg?alt=media&token=3f45c79d-3dc4-4f33-8f11-6f7f67bba4fa';
const imageUrls3 =
  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Banner%2F447855712_122110828136327879_1479968347455933902_n.jpg?alt=media&token=66b59e00-83a2-4607-b0dc-2a53a9897a45';
const imageUrls4 =
  'https://firebasestorage.googleapis.com/v0/b/voguary.appspot.com/o/Banner%2F448812515_122115251762327879_3606431316895751068_n.jpg?alt=media&token=30af235d-4baa-4244-ba2b-78820153b046';
export default function CustomCarousel() {
  return (
    <Slider autoplay dots>
      <div>
        <img src={imageUrls1} alt='Slide 1' className='w-full h-auto object-cover md:h-64 lg:h-72 xl:h-80' />
      </div>
      <div>
        <img src={imageUrls2} alt='Slide 2' className='w-full h-auto object-cover md:h-64 lg:h-72 xl:h-80' />
      </div>
      <div>
        <img src={imageUrls3} alt='Slide 3' className='w-full h-auto object-cover md:h-64 lg:h-72 xl:h-80' />
      </div>
      <div>
        <img src={imageUrls4} alt='Slide 4' className='w-full h-auto object-cover md:h-64 lg:h-72 xl:h-80' />
      </div>
    </Slider>
  );
}
