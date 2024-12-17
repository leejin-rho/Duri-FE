import { useNavigate } from 'react-router-dom';

import ShopDefaultImage from '@assets/images/ShopDefaultImage.png';
import { ShopInfo } from '@duri-fe/ui';

interface ShopInfoCardProps {
  shopId: number;
  image: string;
  address: string;
  shopTag1: string;
  shopTag2: string;
  shopTag3: string;
  shopName: string;
}

export const ShopInfoCard = ({
  address,
  image,
  shopName,
  shopTag1,
  shopTag2,
  shopTag3,
}: ShopInfoCardProps) => {
  const navigate = useNavigate();

  const handleClickNavigateButton = () => {
    navigate('/my/shop');
  };

  return (
    <>
      {image ? (
        <ShopInfo
          image={image}
          shopName={shopName}
          address={address}
          shopTag1={shopTag1}
          shopTag2={shopTag2}
          shopTag3={shopTag3}
          title="마이샵"
          themeVariant="salon"
          onClick={handleClickNavigateButton}
        />
      ) : (
        <ShopInfo
          image={ShopDefaultImage}
          shopName={shopName}
          address={address}
          shopTag1={shopTag1}
          shopTag2={shopTag2}
          shopTag3={shopTag3}
          title="마이샵"
          themeVariant="salon"
          onClick={handleClickNavigateButton}
        />
      )}
    </>
  );
};
