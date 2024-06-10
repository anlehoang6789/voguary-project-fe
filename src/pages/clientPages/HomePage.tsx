import Carousel from 'components/CardHomepage/Carousel';
import Gallery from 'components/CardHomepage/Gallery';
import HotProduct from 'components/CardHomepage/HotProduct';
import HotTrend from 'components/CardHomepage/HotTrend';
import Map from 'components/CardHomepage/Map/Map';

export default function HomePage() {
  return (
    <div className='w-full bg-gray-300 h-full overflow-x-hidden'>
      <div className='mb-11'>
        <Carousel />
      </div>
      <div className='mb-11'>
        <HotTrend />
      </div>
      <div className='mb-11'>
        <HotProduct />
      </div>
      <div className='mb-11'>
        <Gallery />
      </div>
      <div className='mb-11'>
        <Map />
      </div>
    </div>
  );
}
