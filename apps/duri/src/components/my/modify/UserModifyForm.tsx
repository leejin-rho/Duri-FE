import { Button, Flex, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const UserModifyForm = ({
  name,
  phone,
  email,
}: {
  name: string;
  phone: string;
  email: string;
}) => {
  return (
    <Flex direction="column" padding="0 20px" gap={16}>
      <Flex justify="flex-start" gap={49}>
        <Text typo="Title3">이름</Text>
        <TextButton
          typo="Body3"
          bg={theme.palette.White}
          width="138px"
          height="40px"
          padding="10px"
          justify="flex-start"
        >
          {name}
        </TextButton>
      </Flex>
      <Flex justify="flex-start" gap={21}>
        <Text typo="Title3">전화번호</Text>
        <TextButton
          typo="Caption3"
          bg={theme.palette.Gray_White}
          width="138px"
          height="40px"
          padding="10px"
          fontColor={theme.palette.Gray300}
          borderRadius='8px'
        >
          {phone}
        </TextButton>
      </Flex>
      <Flex justify="flex-start" gap={35}>
        <Text typo="Title3">이메일</Text>
        <TextButton
          typo="Caption3"
          bg={theme.palette.Gray_White}
          width="170px"
          height="40px"
          padding="10px"
          fontColor={theme.palette.Gray300}
          borderRadius='8px'
        >
          {email}
        </TextButton>
      </Flex>
    </Flex>
  );
};

const TextButton = styled(Button)<{ gray?: boolean; justify?: string }>`
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  cursor: default !important;
`;
