import { TextField, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

const EtcRequest = (onSelect: {
  onSelect: (key: string, value: string) => void;
}) => {
  return (
    <RequestTextField
      placeholder="미용사가 주의해야할 점이 있다면 작성해주세요!"
      placeholderTypo={theme.typo.Caption1}
      widthPer="100%"
      height={108}
      multiline={true}
      onChange={(e) => {
        onSelect.onSelect('etc', e.target.value);
      }}
    />
  );
};

export default EtcRequest;

const RequestTextField = styled(TextField)`
  /* width: 100%; */
  border-color: ${theme.palette.Gray300};
`;
