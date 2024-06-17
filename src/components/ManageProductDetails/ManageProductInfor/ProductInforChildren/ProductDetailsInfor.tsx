import { List } from 'antd';
import { GoDotFill } from 'react-icons/go';
import { useParams } from 'react-router-dom';
import { useGetProductDetailByProductIdQuery } from 'services/product.services';

export default function ProductDetailsInfor() {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetProductDetailByProductIdQuery(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;
  if (!data) return <div>No product details found.</div>;

  const productDetails = [
    { label: 'Description', value: data.description },
    { label: 'Additional Information', value: data.additionalInformation },
    { label: 'Shipping & Returns', value: data.shippingAndReturns },
    { label: 'Size Chart', value: data.sizeChart },
    { label: 'Reviews', value: data.reviews },
    { label: 'Questions', value: data.questions },
    { label: 'Vendor Info', value: data.vendorInfo },
    { label: 'More Products', value: data.moreProducts },
    { label: 'Product Policies', value: data.productPolicies }
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
