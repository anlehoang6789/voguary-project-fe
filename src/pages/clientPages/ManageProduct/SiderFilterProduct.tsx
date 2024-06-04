import { Button, Divider } from 'antd';
import CustomGradientButton from 'components/CustomGradientButton';
import ManageProductFilter from 'components/ManageProduct/ManageSiderFilter/ManageProductFilter/ManageProductFilter';
import FilterCategory from 'components/ManageProduct/ManageSiderFilter/ManageProductFilter/ManageProductFilterChildren/FilterCategory';
import FilterColor from 'components/ManageProduct/ManageSiderFilter/ManageProductFilter/ManageProductFilterChildren/FilterColor';
import FilterPrice from 'components/ManageProduct/ManageSiderFilter/ManageProductFilter/ManageProductFilterChildren/FilterPrice';
import FilterSize from 'components/ManageProduct/ManageSiderFilter/ManageProductFilter/ManageProductFilterChildren/FilterSize';
import { ManageProductFilterCollapseChildren } from 'components/ManageProduct/ManageSiderFilter/ManageProductFilter/ManageProductFilterEnum';
import ManageSelectedFilter from 'components/ManageProduct/ManageSiderFilter/ManageSelectedFilter';
import { FaArrowRightLong } from 'react-icons/fa6';

const productFilterList = [
  {
    type: ManageProductFilterCollapseChildren.FILTER_CATEGORY,
    title: 'LOẠI SẢN PHẨM',
    component: <FilterCategory />
  },
  {
    type: ManageProductFilterCollapseChildren.FILTER_COLOR,
    title: 'MÀU SẮC',
    component: <FilterColor />
  },
  {
    type: ManageProductFilterCollapseChildren.FILTER_PRICE,
    title: 'GIÁ TIỀN (VNĐ)',
    component: <FilterPrice />
  },
  {
    type: ManageProductFilterCollapseChildren.FILTER_SIZE,
    title: 'KÍCH THƯỚC',
    component: <FilterSize />
  }
];

export default function SiderFilterProduct() {
  return (
    <div className='w-full'>
      <ManageSelectedFilter />
      <Divider style={{ borderColor: '#000' }} />
      <ManageProductFilter filterList={productFilterList} />
      <Divider style={{ borderColor: '#000' }} />

      <CustomGradientButton>
        <Button
          type='primary'
          size='large'
          className='mb-4 !rounded-none shadow-[5px_5px_0px_0px_rgba(4,131,229)] w-full flex items-center justify-between font-semibold'
        >
          ÁP DỤNG <FaArrowRightLong />
        </Button>
      </CustomGradientButton>
    </div>
  );
}
