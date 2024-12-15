import {
  Card,
  Flex,
  Image,
  Store,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';
interface SalonCardProps {
  title: string;
  imageURL: string;
  salonName: string;
  bg?: string;
}
export const SalonCard = ({
  title,
  imageURL,
  salonName,
  bg = `${theme.palette.White}`,
}: SalonCardProps) => {
  return (
    <MarginCard borderRadius={8} padding="13px 20px" bg={bg}>
      <Flex direction="column">
        <Flex justify="flex-start">
          <Text typo="Body3" colorCode={theme.palette.Gray300}>
            {title}
          </Text>
        </Flex>
        <WidthFitFlex gap={8} margin="8px 0 0 0">
          {imageURL ? (
            <Image width={34} height={34} src={imageURL} borderRadius={34} />
          ) : (
            <WidthFitFlex><Store width={34} height={34}/></WidthFitFlex>
          )}
          <Flex height={34}>
          <Text typo={salonName.length > 5 ? "Caption3" :"Body4"}>{salonName}</Text>
          </Flex>
        </WidthFitFlex>
      </Flex>
    </MarginCard>
  );
};

const MarginCard = styled(Card)`
  margin: 4px;
`;
