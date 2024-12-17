import { useSearchParams } from 'react-router-dom';

import {
  CloseCircle,
  DuriNavbar,
  Flex,
  Header,
  HeightFitFlex,
  MobileLayout,
  Seperator,
  Text,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

const FailPage = () => {
  const [searchParams] = useSearchParams();

  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.href = '/quotation';
  //   }, 3000);
  // },[]);

  return (
    <MobileLayout>
      <Header />
      <FlexGrow
        direction="column"
        padding="0 24px 46px 24px"
        gap={29}
        margin="0 0 35px 0"
        justify='flex-start'
      >
        <CloseCircle width={126} height={126} color={theme.palette.Alert} />

        <Text typo="Body1" colorCode={theme.palette.Alert}>
          결제 실패하였습니다.
        </Text>
        <Seperator height="1px" />
        <HeightFitFlex justify="space-between">
          <Text typo="Caption1" colorCode={theme.palette.Gray300}>
            에러 코드
          </Text>
          <Text typo="Label2">{searchParams.get('code')}</Text>
        </HeightFitFlex>
        <HeightFitFlex justify="space-between">
          <Text typo="Caption1" colorCode={theme.palette.Gray300}>
            {searchParams.get('message')}
          </Text>
        </HeightFitFlex>
      </FlexGrow>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default FailPage;

const FlexGrow = styled(Flex)`
  flex: 1;
`