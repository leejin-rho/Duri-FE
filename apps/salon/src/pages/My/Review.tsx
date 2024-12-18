import { useNavigate } from 'react-router-dom';

import { Header, MobileLayout, SalonNavbar } from '@duri-fe/ui';

const ReviewPage = () => {
  const navigate = useNavigate();
  const handleClickBackButton = () => {
    navigate('/my/review');
  };
  // const handleClickShopButton = (shopId: number) => {
  //   navigate(`/shop/${shopId}`);
  // };

  // reviewData가 존재하는 경우에만 처리
  // if (!reviewData) {
  //   return <Text>Loading...</Text>; // 데이터가 로딩 중일 경우 처리
  // }

  // const {
  //   userImageURL,
  //   userName,
  //   reviewId: reviewDataId,
  //   rating,
  //   createdAt,
  //   shopId,
  //   shopName,
  //   comment,
  //   imgUrl,
  //   petInfo,
  // } = reviewData;

  return (
    <MobileLayout>
      <Header
        backIcon
        title="후기 관리"
        titleAlign="start"
        onClickBack={handleClickBackButton}
      />

      <SalonNavbar />
    </MobileLayout>
  );
};

export default ReviewPage;
