import { useLocation, useNavigate } from 'react-router-dom';

import { Header, MobileLayout } from '@duri-fe/ui';

export const FeedBackPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { quotationId } = state;

  return (
    <MobileLayout>
      <Header
        backIcon
        title="일지 쓰기"
        titleAlign="start"
        onClickBack={() => navigate(-1)}
      />
      <div>{quotationId}번 일지 쓰기 페이지</div>
    </MobileLayout>
  );
};
