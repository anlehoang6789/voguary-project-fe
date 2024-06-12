import { useState } from 'react';
import { SolutionOutlined, WalletOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { CheckoutPageMenu } from './CheckoutPage.enum';
import MangePaymentMethod from 'components/MangeCheckout/MangePaymentMethod';
// import MangeBill from 'components/MangeCheckout/MangeBill';
import MangeAddressCheckout from 'components/MangeCheckout/MangeAddressCheckout';

interface CheckoutPageProps {
  type: CheckoutPageMenu;
  component: JSX.Element;
}

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const checkoutList: CheckoutPageProps[] = [
    {
      type: CheckoutPageMenu.PROFILE,
      component: <MangeAddressCheckout setCurrentStep={setCurrentStep} />
    },
    {
      type: CheckoutPageMenu.PAYMENT,
      component: <MangePaymentMethod setCurrentStep={setCurrentStep} />
    }
    // {
    //   type: CheckoutPageMenu.SUCCESS,
    //   component: <MangeBill />
    // }
  ];

  const currentCheckoutPage = checkoutList[currentStep].component;

  return (
    <div>
      <div className='max-w-3xl mx-auto '>
        <Steps size='default' current={currentStep}>
          <Steps.Step
            title={<span className='text-xl'>Thông tin giao hàng</span>}
            status={currentStep >= 0 ? 'finish' : 'process'}
            icon={<SolutionOutlined />}
            className='w-30 '
          />
          <Steps.Step
            title={<span className='text-xl'>Phương thức thanh toán</span>}
            status={currentStep >= 1 ? (currentStep > 1 ? 'finish' : 'finish') : 'wait'}
            icon={<WalletOutlined />}
            className='w-30'
          />
          {/* <Steps.Step
            title={<span className='text-xl'>Hóa đơn</span>}
            status={currentStep >= 2 ? 'finish' : 'wait'}
            icon={<SmileOutlined />}
            className='w-30'
          /> */}
        </Steps>
      </div>
      {currentCheckoutPage}
    </div>
  );
}
