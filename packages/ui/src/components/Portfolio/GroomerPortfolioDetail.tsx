import { useNavigate } from 'react-router-dom';

import {
  Flex,
  Header,
  HeightFitFlex,
  Image,
  RelativeFlex,
  SalonTag,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import { UseGetPorfolioDetail } from '@duri-fe/utils';
import styled from '@emotion/styled';

export const GroomerPortfolioDetail = ({
  feedbackId,
}: {
  feedbackId: number;
}) => {
  const navigate = useNavigate();

  const { data } = UseGetPorfolioDetail({
    feedbackId: feedbackId,
  });

  return (
    data && (
      <>
        <RelativeFlex direction="column">
          <AbsoluteHeader
            backIcon
            titleAlign="center"
            onClickBack={() => navigate(-1)}
          />
        </RelativeFlex>

        {/** 피드백 및 후기 */}
        <Flex direction="column" gap={14}>
          <Flex justify="space-between" padding="0 24px">
            <WidthFitFlex gap={16}>
              <Image
                width={34}
                height={34}
                borderRadius={99}
                src={data.groomerInfo.profileImageUrl}
              />
              <Text typo="Title1">{data.groomerInfo.name}</Text>
            </WidthFitFlex>
            {/* <HardText typo="Caption4" colorCode={theme.palette.Gray400}>
              2024-12-25
            </HardText> */}
          </Flex>
          <Image height={350} src={data.feedbackImages[0]} />
          <Flex justify="start" padding="10px 20px 0">
            <Text typo="Caption3">{data.portfolioContent}</Text>
          </Flex>
          <TagList gap={10} justify="flex-start" padding="0 20px">
            <SalonTag
              content={`#${data.friendly}`}
              bg={theme.palette.Gray_White}
              colorCode={theme.palette.Gray700}
              borderRadius={4}
              padding="12px"
            />
            <SalonTag
              content={`#${data.reaction}`}
              bg={theme.palette.Gray_White}
              colorCode={theme.palette.Gray700}
              borderRadius={4}
              padding="12px"
            />
            <SalonTag
              content={`#${data.behavior}`}
              bg={theme.palette.Gray_White}
              colorCode={theme.palette.Gray700}
              borderRadius={4}
              padding="12px"
            />
          </TagList>
        </Flex>
      </>
    )
  );
};

const AbsoluteHeader = styled(Header)`
  position: absolute;
`;

const TagList = styled(HeightFitFlex)`
  overflow-x: auto;
  flex-wrap: nowrap;
  white-space: nowrap;
`;
