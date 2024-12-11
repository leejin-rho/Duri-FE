import { ShopInfo } from '@duri/components/shop';
import { DuriNavbar, MobileLayout } from '@duri-fe/ui';

const ShopDetail = () => {
  return (
    <MobileLayout>
      <ShopInfo />
      <DuriNavbar />
    </MobileLayout>
  );
};

export default ShopDetail;
