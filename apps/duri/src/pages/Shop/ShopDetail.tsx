import { useParams } from 'react-router-dom';

import { ShopInfo } from '@duri/components/shop/ShopInfo';
import { DuriNavbar, MobileLayout } from '@duri-fe/ui';

const ShopDetail = () => {
  const { shopId } = useParams<{ shopId: string }>();
  const shopIndex = shopId ? Number(shopId) : 0;

  return (
    <MobileLayout>
      <ShopInfo shopIdx={shopIndex} lat={37.5156} lng={127.0451005} />
      <DuriNavbar />
    </MobileLayout>
  );
};

export default ShopDetail;
