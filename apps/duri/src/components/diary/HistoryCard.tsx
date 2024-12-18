import { useNavigate } from 'react-router-dom';

import {
  Button,
  Card,
  Dot,
  Flex,
  HeightFitFlex,
  ProfileImage,
  SalonTag,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';

interface HistoryCardProps {
  quotationId: number;
  tagContent: string;
  profileImageUrl?: string;
  designerName: string;
  shopName: string;
  petName: string;
  visitDate: string;
  dayOfWeek: string;
  toggleModal?: () => void;
}

export const HistoryCard = ({
  quotationId,
  tagContent,
  profileImageUrl,
  designerName,
  shopName,
  petName,
  visitDate,
  dayOfWeek,
  toggleModal,
}: HistoryCardProps) => {
  const navigate = useNavigate();
  const handleDiaryCardClick = (quotationId: number) => {
    navigate(`/diary/${quotationId}`);
  };

  const handleToggleModal = (e: React.MouseEvent) => {
    if (toggleModal) {
      e.stopPropagation();
      toggleModal();
    }
  };

  return (
    <div onClick={() => handleDiaryCardClick(quotationId)}>
      <Card direction="row" borderRadius={12} padding="16px 20px">
        <Flex width={250}>
          <Flex direction="column" align="flex-start">
            <Flex justify="space-between" height={30} margin="0 0 13px">
              <SalonTag
                height={24}
                padding="8px 10px"
                content={tagContent}
                borderRadius={99}
                colorCode={theme.palette.Gray300}
                typo="Caption5"
              />
              <WidthFitFlex justify="end" align="start">
                {toggleModal && (
                  <Button
                    bg={theme.palette.Black}
                    fontColor={theme.palette.White}
                    typo="Label3"
                    padding="10px"
                    width="85px"
                    height="30px"
                    onClick={handleToggleModal}
                  >
                    견적서 보기
                  </Button>
                )}
              </WidthFitFlex>
            </Flex>
            <HeightFitFlex justify="start" gap={12}>
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
        </Flex>
      </Card>
    </div>
  );
};
