import { HistoryCard } from '@duri/components/diary/HistoryCard';
import {
  DuriNavbar,
  Flex,
  Header,
  HeightFitFlex,
  MobileLayout,
  SalonTag,
  Text,
  theme,
} from '@duri-fe/ui';
import { UseGetDiaryData, useGetVisitHistory } from '@duri-fe/utils';
import styled from '@emotion/styled';

const PetDiary = () => {
  const { data: diaryStats } = UseGetDiaryData({});
  const { data: historyData } = useGetVisitHistory();

  return (
    <RelativeMobile backgroundColor={theme.palette.Gray_White}>
      <AbsoluteHeader title="미용 일기" iconColor={theme.palette.White} />
      <HalfBorderRadius
        backgroundColor={theme.palette.Normal500}
        margin="-70px 0 0 0"
        padding="70px 28px 26px 28px"
      >
        <Flex
          height={171}
          borderRadius={12}
          backgroundColor={theme.palette.Normal300}
          direction="column"
          align="start"
          padding="24px 26px"
          gap={21}
        >
          <Text typo="Title2">미용 레포트</Text>
          <HeightFitFlex direction="column" gap={8}>
            <Flex justify="space-between">
              <Text typo="Label2">🥰 미용사와의 친화력</Text>
              <SalonTag
                content={diaryStats ? diaryStats.friendly : '데이터가 없어요'}
                typo="Caption3"
                padding="10px 11px"
                bg={theme.palette.Normal100}
                colorCode={theme.palette.Normal700}
              />
            </Flex>
            <Flex justify="space-between">
              <Text typo="Label2">✂️ 미용도구 반응</Text>
              <SalonTag
                content={diaryStats ? diaryStats.reaction : '데이터가 없어요'}
                typo="Caption3"
                padding="10px 11px"
                bg={theme.palette.Normal100}
                colorCode={theme.palette.Normal700}
              />
            </Flex>
            <Flex justify="space-between">
              <Text typo="Label2">🐶 행동 밎 짖음</Text>
              <SalonTag
                content={diaryStats ? diaryStats.behavior : '데이터가 없어요'}
                typo="Caption3"
                padding="10px 11px"
                bg={theme.palette.Normal100}
                colorCode={theme.palette.Normal700}
              />
            </Flex>
          </HeightFitFlex>
        </Flex>
      </HalfBorderRadius>

      <Flex padding="32px 20px 124px 20px" direction="column" gap={32}>
        {historyData && historyData.length > 0 ? (
          historyData.map(({ month, historyList }) => (
            <HeightFitFlex
              key={month}
              direction="column"
              align="start"
              gap={16}
            >
              <Text typo="Title1">{month}월 방문</Text>

              <BorderLeftFlex
                gap={24}
                direction="column"
                padding="8px 0 8px 19px"
              >
                {historyList.map((history) => (
                  <HistoryCard
                    key={history.quotationId}
                    quotationId={history.quotationId}
                    tagContent={history.complete ? '미용 완료' : '미완료'}
                    designerName={history.groomerName}
                    shopName={history.shopName}
                    petName={history.petName}
                    visitDate={history.startDate}
                    dayOfWeek={history.day}
                  />
                ))}
              </BorderLeftFlex>
            </HeightFitFlex>
          ))
        ) : (
          <Flex padding="24px">
            <Text>아직 일지가 없습니다.</Text>
          </Flex>
        )}
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

const BorderLeftFlex = styled(Flex)`
  border-left: 3px solid ${theme.palette.Gray50};
`;

const HalfBorderRadius = styled(Flex)`
  border-radius: 0 0 12px 12px;
`;
