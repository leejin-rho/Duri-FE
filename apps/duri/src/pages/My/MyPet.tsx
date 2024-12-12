
import { useNavigate } from 'react-router-dom';

import { ModifyPetInfoCard } from '@duri/components/my/modify/ModifyPetInfoCard';
import {
  Header,
  MobileLayout,
  theme,
} from '@duri-fe/ui';



const MyPetPage = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
        <Header
          title="마이펫"
          titleAlign="start"
          backIcon={true}
          onClickBack={() => navigate(-1)}
        />
      <ModifyPetInfoCard />
    </MobileLayout>
  );
};
export default MyPetPage;