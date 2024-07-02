import { Rate } from 'antd';

interface ReviewPanelHeaderProps {
  title: string;
  reviewCount: number;
  averageRating: number;
}

export default function ReviewPanelHeader({ title, reviewCount, averageRating }: ReviewPanelHeaderProps) {
  return (
    <div className='flex justify-between items-center w-full'>
      <div className='text-xl font-medium'>
        {title} ({reviewCount})
      </div>
      <div className='flex items-center hidden md:block'>
        <span className='mr-2'>{averageRating.toFixed(1)}</span>
        <Rate disabled value={averageRating} className='text-lg' />
      </div>
    </div>
  );
}
