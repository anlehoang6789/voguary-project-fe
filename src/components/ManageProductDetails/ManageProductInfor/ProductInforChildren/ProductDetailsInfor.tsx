import { Alert, List, Skeleton } from 'antd';
import { GoDotFill } from 'react-icons/go';
import { useParams } from 'react-router-dom';
import { useGetProductDetailsInforQuery } from 'services/product.services';

export default function ProductDetailsInfor() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useGetProductDetailsInforQuery(Number(id));

  if (isLoading) {
    // Render skeleton when loading
    return (
      <div className='flex flex-col gap-1'>
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </div>
    );
  }

  if (isError) {
    // Render error message if there's an error
    return <Alert message='Error' description={`There was an error fetching data: ${error}`} type='error' showIcon />;
  }

  // If data is null or undefined, handle accordingly
  if (!data) {
    return <Alert message='No Data' description='No feedback data found.' type='info' showIcon />;
  }

  const productDetails = [
    { label: 'Description', value: data?.description },
    { label: 'Additional Information', value: data?.additionalInformation },
    { label: 'Shipping & Returns', value: data?.shippingAndReturns },
    { label: 'Size Chart', value: data?.sizeChart },
    { label: 'Reviews', value: data?.reviews },
    { label: 'Questions', value: data?.questions },
    { label: 'Vendor Info', value: data?.vendorInfo },
    { label: 'More Products', value: data?.moreProducts },
    { label: 'Product Policies', value: data?.productPolicies }
  ];

  return (
    <div className='flex justify-center'>
      <div className='w-1/2 p-4'>
        <List
          size='large'
          bordered={false}
          dataSource={productDetails.slice(0, 5)}
          renderItem={(item) => (
            <List.Item className='!border-none text-base'>
              <GoDotFill className='mr-2 text-black inline-block' />
              {item.value}
            </List.Item>
          )}
        />
      </div>

      <div className='w-1/2 p-4'>
        <List
          size='large'
          bordered={false}
          dataSource={productDetails.slice(5)}
          renderItem={(item) => (
            <List.Item className='!border-none text-base'>
              <GoDotFill className='mr-2 text-black inline-block' />
              {item.value}
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
