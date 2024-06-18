import ManageProductCheckout from 'components/ManageProductDetails/ManageProductCheckout/ManageProductCheckout';
import ManageProductImage from 'components/ManageProductDetails/ManageProductImage';
import ManageProductInfor from 'components/ManageProductDetails/ManageProductInfor/ManageProductInfor';
import { ManageProductInforCollapseChildren } from 'components/ManageProductDetails/ManageProductInfor/ManageProductInforEnum';
import ProductDetailsDescription from 'components/ManageProductDetails/ManageProductInfor/ProductInforChildren/ProductDetailsDescription';
import ProductDetailsInfor from 'components/ManageProductDetails/ManageProductInfor/ProductInforChildren/ProductDetailsInfor';
import ProductDetailsReview from 'components/ManageProductDetails/ManageProductInfor/ProductInforChildren/ProductDetailsReview/ProductDetailsReview';
import MayAlsoLike from 'components/ManageProductDetails/MayAlsoLike';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetFeedbackQuery } from 'services/product.services';

export default function ManageProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data: feedbackData, isLoading, error } = useGetFeedbackQuery(Number(id));
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;
  if (!feedbackData || !Array.isArray(feedbackData)) return <div>No feedback found.</div>;

  const reviewCount = feedbackData.length;
  const averageRating = feedbackData.reduce((acc, feedback) => acc + feedback.ratingValue, 0) / reviewCount;

  const productInfoList = [
    {
      type: ManageProductInforCollapseChildren.PRODUCT_REVIEWS,
      title: 'Đánh giá',
      component: <ProductDetailsReview />,
      reviewCount: reviewCount,
      averageRating: averageRating
    },
    {
      type: ManageProductInforCollapseChildren.PRODUCT_DESCRIPTION,
      title: 'Mô tả sản phẩm',
      component: <ProductDetailsDescription />
    },
    {
      type: ManageProductInforCollapseChildren.PRODUCT_INFORMATION,
      title: 'Chi tiết sản phẩm',
      component: <ProductDetailsInfor />
    }
  ];

  return (
    <div className='container mx-auto p-4 flex flex-col md:flex-row'>
      <div className='w-full md:w-[70%]  border-r border-gray-200'>
        <ManageProductImage selectedColorIndex={selectedColorIndex} />
        <ManageProductInfor inforList={productInfoList} />
        <MayAlsoLike />
      </div>
      <div className='w-full md:w-[30%] md:pl-8'>
        <ManageProductCheckout />
      </div>
    </div>
  );
}
