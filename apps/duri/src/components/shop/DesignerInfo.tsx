import salonDefault from '@assets/images/pngs/salonDefault.png';
import { Approve, Flex, Text } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const DesignerInfo = () => {
  return (
    <Flex direction="column" align="flex-start">
      <DesignerImg src={salonDefault} />

      <Text>김댕댕</Text>
      <Flex justify="flex-start">
        <Text>경력 5년</Text>,<Text>30세</Text>,<Text>남성</Text>
      </Flex>
      <Flex direction="column">
        {['반려견 스타일리스트', '펫테이너'].map((item, idx) => (
          <Flex key={idx} justify="flex-start">
            <Text>{item}</Text>
            <Approve width={11} height={10} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

const DesignerImg = styled.img`
  display: flex;
  width: 160px;
  height: 160px;
`;
