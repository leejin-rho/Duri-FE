import { Flex, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface GroomerEditItemProps {
  label: string;
  value: string;
}

const GroomerEditItem = ({ label, value }: GroomerEditItemProps) => {
  return (
    <Flex justify="flex-start">
      <LabelWrapper justify="flex-start" width={80}>
        <Text typo="Title3">{label}</Text>
      </LabelWrapper>
      <Flex
        backgroundColor={theme.palette.Gray_White}
        width={138}
        height={40}
        borderRadius={8}
        justify="flex-start"
        padding="10px 16px"
      >
        <Text typo="Caption3" colorCode={theme.palette.Gray300}>
          {value}
        </Text>
      </Flex>
    </Flex>
  );
};

const LabelWrapper = styled(Flex)`
  flex-shrink: 0;
`;

export default GroomerEditItem;
