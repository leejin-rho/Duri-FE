import { useNavigate } from 'react-router-dom';

import {
  Card,
  Dot,
  Flex,
  HeightFitFlex,
  ProfileImage,
  SalonTag,
  Text,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

interface HistoryCardProps {
  visitMonth: string;
  tagContent: string;
  profileImageUrl?: string;
  designerName: string;
  shopName: string;
  petName: string;
  visitDate: string;
  dayOfWeek: string;
}

export const HistoryCard = ({
  visitMonth,
  tagContent,
  profileImageUrl,
  designerName,
  shopName,
  petName,
  visitDate,
  dayOfWeek,
}: HistoryCardProps) => {
  const navigate = useNavigate();
  const moveToDiaryDetail = () => {
    navigate('/diary/1');
  };

  return (
    <HeightFitFlex
      direction="column"
      align="start"
      gap={24}
      onClick={moveToDiaryDetail}
    >
      <Text typo="Title1">{visitMonth} 방문</Text>
      <HeightFitFlex gap={19} align="stretch">
        <GrayVerticalLine />
        <Card borderRadius={12} padding="16px 20px">
          <Flex direction="column" align="flex-start">
            <SalonTag content={tagContent} borderRadius={99} />
            <HeightFitFlex justify="start" margin="16px 0 0 0" gap={12}>
              <ProfileImage
                width={20}
                height={20}
                borderRadius={99}
                src={profileImageUrl}
              />
              <Text typo="Label3" colorCode={theme.palette.Gray300}>
                {designerName}
              </Text>
            </HeightFitFlex>
            <HeightFitFlex justify="flex-start" gap={8} margin="14px 0 0 0">
              <Text
                typo="Title1"
                colorCode={theme.palette.Normal700}
                margin="0 4px 0 0"
              >
                {shopName}
              </Text>
              <Dot width={3} />
              <Text typo="Title1">{petName}</Text>
            </HeightFitFlex>

            <HeightFitFlex justify="flex-start" gap={8} margin="16px 0 0 0">
              <Text typo="Label1" colorCode={theme.palette.Gray300}>
                {dayOfWeek}
              </Text>
              <Text typo="Label3" colorCode={theme.palette.Gray300}>
                {visitDate}
              </Text>
            </HeightFitFlex>
          </Flex>
        </Card>
      </HeightFitFlex>
    </HeightFitFlex>
  );
};

const GrayVerticalLine = styled.div`
  width: 3px;
  height: 100%;
  flex-shrink: 0;
  background-color: ${theme.palette.Gray50};
`;
