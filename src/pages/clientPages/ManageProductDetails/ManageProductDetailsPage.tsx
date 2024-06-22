import ManageProductCheckout from 'components/ManageProductDetails/ManageProductCheckout/ManageProductCheckout';
import ManageProductImage from 'components/ManageProductDetails/ManageProductImage';
import ManageProductInfor from 'components/ManageProductDetails/ManageProductInfor/ManageProductInfor';
import { ManageProductInforCollapseChildren } from 'components/ManageProductDetails/ManageProductInfor/ManageProductInforEnum';
import ProductDetailsDescription from 'components/ManageProductDetails/ManageProductInfor/ProductInforChildren/ProductDetailsDescription';
import ProductDetailsInfor from 'components/ManageProductDetails/ManageProductInfor/ProductInforChildren/ProductDetailsInfor';
import ProductDetailsReview from 'components/ManageProductDetails/ManageProductInfor/ProductInforChildren/ProductDetailsReview/ProductDetailsReview';
import MayAlsoLike from 'components/ManageProductDetails/MayAlsoLike';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetFeedbackQuery, useGetProductDetailsByProductIdQuery } from 'services/product.services';
import { setProductDetails } from 'slice/productDetailsSlice';
import { useParams } from 'react-router-dom';

export default function ManageProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  // console.log('id được lấy ra:', id);
  const { data: feedbackData } = useGetFeedbackQuery(Number(id));
  const { data, isSuccess } = useGetProductDetailsByProductIdQuery(Number(id));
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (isSuccess && data) {
        dispatch(setProductDetails(data));
        // console.log('data của product details:', data);
      }
    } catch (error) {
      console.log('error:', error);
    }
  }, [data, dispatch, isSuccess]);

  const productInfoList = [
    {
      type: ManageProductInforCollapseChildren.PRODUCT_REVIEWS,
      title: 'Đánh giá',
      component: <ProductDetailsReview />,
      reviewCount: feedbackData?.totalRatings || 0,
      averageRating: data?.averageRating || 0
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
