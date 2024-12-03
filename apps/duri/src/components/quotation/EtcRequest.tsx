import { HeightFitFlex, Text, TextField, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

const EtcRequest = (onSelect: {
  onSelect: (key: string, value: string) => void;
}) => {
  return (
    <HeightFitFlex direction="column" gap={12} margin='0 0 40px 0'>
      <HeightFitFlex direction="column" align="flex-start" gap={8}>
        <Text>기타 요청사항</Text>
        <Text colorCode={theme.palette.Gray400}>
          미용사가 알아야할 점이 있다면 작성해주세요!
        </Text>
      </HeightFitFlex>
      <RequestTextField
        placeholder="미용사가 주의해야할 점이 있다면 작성해주세요!"
        widthPer="100%"
        height={108}
        multiline={true}
        onChange={(e) => {
          onSelect.onSelect('etc', e.target.value);
        }}
      />
    </HeightFitFlex>
  );
};

export default EtcRequest;

const RequestTextField = styled(TextField)`
  width: 100%;
`;
