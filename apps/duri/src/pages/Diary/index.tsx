import { HistoryCard } from '@duri/components/diary/HistoryCard';
import { DuriNavbar, Flex, Header, MobileLayout, theme } from '@duri-fe/ui';

const PetDiary = () => {
  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Header title="일지" backgroundColor={theme.palette.White} />
      <Flex padding="45px 20px 0 20px" direction="column" gap={32}>
        <HistoryCard
          visitMonth="12월"
          tagContent="미용 완료"
          designerName="미나쌤"
          shopName="댕댕샵"
          petName="신참이"
          visitDate="2024-12-06 14:00"
          dayOfWeek="금"
        />

        <HistoryCard
          visitMonth="10월"
          tagContent="미용 완료"
          designerName="고수쌤"
          shopName="댕댕샵"
          petName="신참이"
          visitDate="2024-10-06 14:00"
          dayOfWeek="금"
        />
      </Flex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default PetDiary;
