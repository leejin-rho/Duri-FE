import { Flex, Text, TextField, theme } from '@duri-fe/ui';

const MainInputContainer = () => {
  return (
    <>
      <Flex direction="column" align="flex-start" gap={8}>
        <Text typo="Title2">오늘 미용은 어땠나요?</Text>
        <Text typo="Label3" colorCode={theme.palette.Gray400}>
          미용을 진행하는 동안의 강아지의 컨디션을 작성해주세요.
        </Text>
      </Flex>
      <Flex justify="flex-start" padding="16px 0 0">
        사진추가
      </Flex>
      <TextField
        multiline
        height={108}
        placeholder={`예약자가 참고할 점이 있다면 작성해주세요.\n작성 내용은 [일지]에서 사용자가 열람 가능해요!`}
        placeholderTypo={theme.typo.Label3Thin}
      ></TextField>
    </>
  );
};

export default MainInputContainer;
