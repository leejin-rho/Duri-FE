import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  Doori,
  Flex,
  HeightFitFlex,
  MobileLayout,
  Text,
  TextField,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

interface AdminLoginFormInterface {
  id: string;
  pw: string;
}

const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<AdminLoginFormInterface>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      id: '',
      pw: '',
    },
  });

  const ADMIN_ID = import.meta.env.VITE_ADMIN_ID;
  const ADMIN_PW = import.meta.env.VITE_ADMIN_PW;

  // 로그인 제출 핸들러
  const onSubmit = (data: AdminLoginFormInterface) => {
    if (data.id === ADMIN_ID && data.pw === ADMIN_PW) {
      window.alert('로그인에 성공하였습니다! 관리자님 안녕하세요.');
      navigate('/home');
    } else {
      window.alert('로그인에 실패했습니다.');
    }
  };

  return (
    <MobileLayout>
      <Wrapper>
        <HeightFitFlex direction="column">
          <Flex direction="column" margin="0 0 18px">
            <Doori width={144} />
            <Text typo="Heading" textAlign="center" margin="20px 0 9px">
              두리묭실 관리자
              <br />
              페이지
            </Text>
            <Text typo="Label2" colorCode={theme.palette.Gray300}>
              최저가 예약부터 근처 미용샵까지
            </Text>
          </Flex>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex
              direction="column"
              width={216}
              margin="0 0 22px"
              padding="0 8px 0 0"
            >
              <Flex justify="space-between">
                <Text
                  typo="Label2"
                  colorCode={theme.palette.Gray300}
                  margin="8px 0 0"
                >
                  ID
                </Text>
                <TextField
                  {...register('id', { required: 'ID를 입력해주세요.' })}
                  width={175}
                  placeholder="ID 입력"
                />
              </Flex>
              <Flex justify="space-between">
                <Text
                  typo="Label2"
                  colorCode={theme.palette.Gray300}
                  margin="8px 0 0"
                >
                  PW
                </Text>
                <TextField
                  {...register('pw', { required: 'PW를 입력해주세요.' })}
                  width={175}
                  placeholder="PW 입력"
                  type="password"
                />
              </Flex>
            </Flex>

            <Button type="submit">로그인</Button>
          </form>
        </HeightFitFlex>
      </Wrapper>
    </MobileLayout>
  );
};

export default Login;

const Wrapper = styled(Flex)`
  height: 100vh;
`;

const Button = styled.button`
  width: 208px;
  height: 54px;
  background-color: ${theme.palette.Normal500};
  border-radius: 99px;
  border: none;
  font-family: 'Pretendard';
  font-size: 1rem;
  font-weight: 600;
  line-height: normal;
`;
