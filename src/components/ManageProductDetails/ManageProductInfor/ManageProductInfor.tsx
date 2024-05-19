import { Collapse } from 'antd';
import { ManageProductInforCollapseChildren } from './ManageProductInforEnum';
import { RxCaretUp, RxCaretDown } from 'react-icons/rx';
import ReviewPanelHeader from './ProductInforChildren/ProductDetailsReview/ReviewPanelHeader';

const { Panel } = Collapse;
interface ProductInforProps {
  type: ManageProductInforCollapseChildren;
  title: string;
  component: JSX.Element;
  reviewCount?: number; // Optional: Only needed for the reviews panel
  averageRating?: number; // Optional: Only needed for the reviews panel
}

export default function ManageProductInfor({ inforList }: { inforList: ProductInforProps[] }) {
  return (
    <div className='mt-10 mx-4'>
      <Collapse
        size='large'
        bordered={false}
        expandIconPosition={'end'}
        expandIcon={({ isActive }) =>
          isActive ? (
            <RxCaretUp style={{ fontSize: '24px', fontWeight: 'bold' }} />
          ) : (
            <RxCaretDown style={{ fontSize: '24px', fontWeight: 'bold' }} />
          )
        }
        className='bg-white'
      >
        {inforList.map((infor, index) => (
          <Panel
            header={
              infor.type === ManageProductInforCollapseChildren.PRODUCT_REVIEWS ? (
                <ReviewPanelHeader
                  title={infor.title}
                  reviewCount={infor.reviewCount || 0}
                  averageRating={infor.averageRating || 0}
                />
              ) : (
                <span className='text-xl font-medium'>{infor.title}</span>
              )
            }
            key={index}
          >
            {infor.component}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}
