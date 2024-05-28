import Lottie from 'lottie-react';
import comingSoon from '../assets/comingSoon.json';

export default function ComingSoon() {
  return (
    <div className='w-[80%] mx-auto h-full'>
      <Lottie animationData={comingSoon} className='w-full'></Lottie>
    </div>
  );
}
