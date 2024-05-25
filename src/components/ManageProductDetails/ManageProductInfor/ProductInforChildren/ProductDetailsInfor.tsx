import { List } from 'antd';
import { GoDotFill } from 'react-icons/go';

export default function ProductDetailsInfor() {
  const data = [
    'Description',
    'Additional Information',
    'Shipping & Returns',
    'Size Chart',
    'Reviews',
    'Questions',
    'Vendor Info',
    'More Products',
    'Product Policies'
  ];

  return (
    <div className='flex justify-center'>
      <div className='w-1/2 p-4'>
        <List
          size='large'
          bordered={false}
          dataSource={data.slice(0, 5)}
          renderItem={(item) => (
            <List.Item className='!border-none text-base'>
              <GoDotFill className='mr-2 text-black inline-block' />
              {item}
            </List.Item>
          )}
        />
      </div>

      <div className='w-1/2 p-4'>
        <List
          size='large'
          bordered={false}
          dataSource={data.slice(5)}
          renderItem={(item) => (
            <List.Item className='!border-none text-base'>
              <GoDotFill className='mr-2 text-black inline-block' />
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
