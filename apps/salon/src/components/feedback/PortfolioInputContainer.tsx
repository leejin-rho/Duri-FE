import { Flex, Text, TextField, theme } from '@duri-fe/ui';

const PortfolioInputContainer = () => {
  return (
    <>
      <Flex direction="column" align="flex-start" gap={8} margin="0 0 8px">
        <Text typo="Title2">포트폴리오 문구 설정</Text>
        <Text typo="Label3" colorCode={theme.palette.Gray400}>
          해당 문구는 포트폴리오에 적용돼요!
        </Text>
      </Flex>
      <TextField
        multiline
        height={108}
        placeholder="포트폴리오에 적용될 문구를 작성해주세요."
        placeholderTypo={theme.typo.Label3Thin}
      ></TextField>
    </>
  );
};

export default PortfolioInputContainer;
