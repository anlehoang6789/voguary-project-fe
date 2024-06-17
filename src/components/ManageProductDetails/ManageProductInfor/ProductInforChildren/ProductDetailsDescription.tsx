import { useParams } from 'react-router-dom';
import { useGetProductDescriptionByProductIdQuery } from 'services/product.services';

export default function ProductDetailsDescription() {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetProductDescriptionByProductIdQuery(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;
  if (!data) return <div>No product description found.</div>;

  const productImage = Array.isArray(data.productImage) && data.productImage.length > 0 ? data.productImage[0] : '';

  return (
    <div className='flex items-center justify-center'>
      {/* Phần bên trái chiếm 60% */}
      <div className='w-3/5 p-4'>
        <h1 className='text-2xl font-bold mb-4 uppercase'>{data.productTitle}</h1>
        <p className='text-base'>{data.productDescription}</p>
      </div>

      {/* Phần bên phải chiếm 40% */}
      <div className='w-2/5 p-4'>
        <img src={productImage} alt='Mô tả sản phẩm' className='w-full h-auto' />
      </div>
    </div>
  );
}
