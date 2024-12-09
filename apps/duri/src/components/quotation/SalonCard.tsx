import { Card, Flex, Image, Text, theme, WidthFitFlex } from "@duri-fe/ui";
import styled from "@emotion/styled";
interface SalonCardProps {
    title: string;
    imageURL: string;
    salonName: string;
    bg ?: string;
}
export const SalonCard = ({title, imageURL, salonName, bg = `${theme.palette.White}`}: SalonCardProps) => {
  return (
    <MarginCard borderRadius={8} padding="16px 20px" bg={bg}>
      <Flex direction="column">
        <Flex justify="flex-start">
          <Text typo="Body3" colorCode={theme.palette.Gray300}>
            {title}
          </Text>
        </Flex>
        <WidthFitFlex gap={15} margin="13px 0 0 0">
          <Image
            width={34}
            height={34}
            src={imageURL}
            borderRadius={34}
          />
          <Text typo="Body3">{salonName}</Text>
        </WidthFitFlex>
      </Flex>
    </MarginCard>
  );
};

const MarginCard = styled(Card)`
    margin: 4px;
`