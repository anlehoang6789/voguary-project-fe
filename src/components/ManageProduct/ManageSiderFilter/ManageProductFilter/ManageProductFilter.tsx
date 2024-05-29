import { Collapse } from 'antd';
import { RxCaretUp, RxCaretDown } from 'react-icons/rx';
import { ManageProductFilterCollapseChildren } from './ManageProductFilterEnum';

const { Panel } = Collapse;

interface ProductFilterProps {
  type: ManageProductFilterCollapseChildren;
  title: string;
  component: JSX.Element;
}

export default function ManageProductFilter({ filterList }: { filterList: ProductFilterProps[] }) {
  return (
    <div className='w-full'>
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
        {filterList.map((filter, index) => (
          <Panel header={<span className='text-base font-medium'>{filter.title}</span>} key={index}>
            {filter.component}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}
