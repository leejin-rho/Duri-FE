// import { useParams } from 'react-router-dom';

import { ShopInfo } from '@duri/components/shop';
import { DuriNavbar, MobileLayout } from '@duri-fe/ui';

const ShopDetail = () => {
  //   const { shopId } = useParams<{ shopId: string }>();
  return (
    <MobileLayout>
      <ShopInfo />
      <DuriNavbar />
    </MobileLayout>
  );
};

export default ShopDetail;
