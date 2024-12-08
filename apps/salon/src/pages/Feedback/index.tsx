import { useNavigate } from "react-router-dom";

import { Header, MobileLayout } from "@duri-fe/ui";

export const FeedBackPage = () => {
  const navigate = useNavigate();
  return (
    <MobileLayout>
      <Header backIcon title="일지 쓰기" titleAlign="start" onClickBack={() => navigate(-1)} />

        
    </MobileLayout>
  );
}