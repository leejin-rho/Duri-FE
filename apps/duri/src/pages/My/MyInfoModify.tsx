import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { InputImageFile } from '@duri/components/my/InputImageFile';
import { UserModifyForm } from '@duri/components/my/modify/UserModifyForm';
import {
  Button,
  DuriNavbar,
  Flex,
  Header,
  HeightFitFlex,
  MobileLayout,
  Text,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

export interface UserFormData {
  imageURL: string;
  name: string;
  phone: string;
  email: string;
}

const MyInfoModifyPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);
  const onSubmit = (data: UserFormData) => {
    //API 연결
    console.log(data);
  };
  const onChange = (file: string) => {
    setValue('imageURL', file)
  }

  const { handleSubmit, getValues, setValue } = useForm<UserFormData>({
    mode: 'onChange',
    defaultValues: {
      imageURL:
        'https://s3-alpha-sig.figma.com/img/cf9d/5909/44caa81ccc63069ea56a68e6805ffdd1?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ml2pEJYeZtcy5yt-lcUXi2Fvk09FksS1iF70or-RKJcBef98WU2dAhCGsCTOu99Ixw-3ERARmIFnzQrs-71KGNZmW4N7fE8OU8S2x~SQD7lhuCLsN9hAVnVv~D7cC~qklj3xlRv1LVvHOk3hpk~-6EHFROymcV6pxwSYoLW3gnakI5u6GxNKJtl1ITP6k1gHE56byDZaSy2TIXQv6DuFuaJ~O-bY4dcnfMzUsfOP-b7Xaihtj4qds~ArNMbPK8bDXxkhKVcGijhbpgekJAhA9lhUIjAdgJHwCpwikow0CnfoEdjqS2PCHRtuZHzTnOBjho8YOayKHoeqcKJpnD59Dg__',
      name: '김찬별',
      phone: '010-1234-5678',
      email: 'chanbyeol@naver.com',
    },
  });
  return (
    <MobileLayout>
      <Header
        title="내정보 수정"
        titleAlign="start"
        backIcon={true}
        onClickBack={handleNavigate}
      />
      <FlexGrow direction="column" gap={20} justify="flex-start">
        <InputImageFile imageURL={getValues('imageURL')} onChange={onChange}/>
        <Text typo="Label3" colorCode={theme.palette.Gray300}>
          프로필 사진만 변경가능해요!
        </Text>
        <UserModifyForm
          name={getValues('name')}
          phone={getValues('phone')}
          email={getValues('email')}
        />
      </FlexGrow>
      <HeightFitFlex margin="0 0 93px 0">
        <Button
          borderRadius="0px"
          bg={theme.palette.Black}
          fontColor={theme.palette.White}
          onClick={handleSubmit(onSubmit)}
        >
          수정 완료
        </Button>
      </HeightFitFlex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default MyInfoModifyPage;

const FlexGrow = styled(Flex)`
  flex: 1;
`;
