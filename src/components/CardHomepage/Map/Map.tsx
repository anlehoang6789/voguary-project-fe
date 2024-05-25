import dataMap from './dataMap';

const Map = () => {
  const url = dataMap.URL;
  return (
    <div className='w-full h-full'>
      <iframe src={url} className='w-full h-52'></iframe>
    </div>
  );
};

export default Map;
