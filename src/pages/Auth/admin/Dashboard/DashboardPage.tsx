import CardBar from 'components/Card/CardBar';
import CardPageVisits from 'components/Card/CardPageVisit';
import CardSocialTraffic from 'components/Card/CardSocialTraffic';
import DayChart from 'components/Card/DayChart';
import LineChart from 'components/Card/LineChart';
import PieChart from 'components/Card/PieChart';

export default function Dashboard() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
          <CardBar />
        </div>
        <div className='w-full xl:w-4/12 px-3'>
          <PieChart />
        </div>
      </div>
      <div className='flex flex-wrap'>
        <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
          <LineChart />
        </div>
        <div className='w-full xl:w-4/12 px-3'>
          <DayChart />
        </div>
      </div>
      <div className='flex flex-wrap mt-4'>
        <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
          <CardPageVisits />
        </div>
        <div className='w-full xl:w-4/12 px-4'>
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
