import { HistoryCard } from '@duri/components/diary/HistoryCard';
import { DuriNavbar, Flex, Header, MobileLayout, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

const PetDiary = () => {
  return (
    <RelativeMobile backgroundColor={theme.palette.Gray_White}>
      <AbsoluteHeader title="일지" iconColor={theme.palette.White} />
      <Flex
        height={315}
        backgroundColor={theme.palette.Normal500}
        borderRadius={12}
        margin="-70px 0 0 0"
        padding="38px 28px 26px 28px"
      >
        <Flex
          height={171}
          borderRadius={12}
          backgroundColor={theme.palette.Normal300}
        ></Flex>
      </Flex>
      <Flex padding="45px 20px 124px 20px" direction="column" gap={32}>
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
    </RelativeMobile>
  );
};

export default PetDiary;

const RelativeMobile = styled(MobileLayout)`
  position: relative;
`;

const AbsoluteHeader = styled(Header)`
  position: absolute;
  top: 0;
`;
