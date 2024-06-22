import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetProductRecommendationsQuery } from 'services/product.services'; // Adjust the import path as needed
import { Link } from 'react-router-dom';

export default function MayAlsoLike() {
  const { data: products, error, isLoading } = useGetProductRecommendationsQuery();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    // Check the type of the error object to safely access its properties
    const errorMessage =
      'status' in error ? (error.data as { message?: string }).message || 'An error occurred' : error.message;
    return <div>Error: {errorMessage}</div>;
  }

  if (!products) return <div>No products found</div>;
  const formatPrice = (price: number) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  return (
    <div className='mt-8 mx-4'>
      <h1 className='font-bold text-xl mb-4'>Bạn có thể thích</h1>
      <Slider {...settings}>
        {products.map((product) => (
          <Link to={`/product/${product.productId}`} key={product.productId}>
            <div key={product.productId} className='p-4 transition-all duration-500 hover:-translate-y-2'>
              <div className='border rounded-lg overflow-hidden'>
                <img src={product.productImage} alt={product.productName} className='w-full h-48 object-cover' />
                <div className='p-4'>
                  <h2 className='font-semibold text-lg'>{product.productName}</h2>
                  <p className='text-gray-700'>{formatPrice(product.productPrice)}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
