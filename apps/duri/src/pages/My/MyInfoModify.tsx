import { useEffect, useState } from 'react';
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
import { useGetUserInfo, usePutUserInfo } from '@duri-fe/utils';
import styled from '@emotion/styled';

const MyInfoModifyPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);
  const { data: userInfo } = useGetUserInfo();
  const { mutateAsync: modify } = usePutUserInfo(
    () => (window.location.href = '/my'),
  );
  const [imageFile, setImageFile] = useState<File | undefined>();
  const [imageURL, setImageURL] = useState<string | undefined>();

  const handleSubmit = () => {
    const formData = new FormData();
    if (imageFile) formData.append('image', imageFile);

    //API 호출
    modify(formData);
  };
  useEffect(() => {
    if (userInfo)
      setImageURL(
        userInfo.profileImg === null ? undefined : userInfo.profileImg,
      );
  }, [userInfo]);

  return (
    <MobileLayout>
      <Header
        title="내정보 수정"
        titleAlign="start"
        backIcon
        onClickBack={handleNavigate}
      />
      <FlexGrow direction="column" gap={20} justify="flex-start">
        <InputImageFile
          imageURL={imageURL}
          onChange={(file: File) => setImageFile(file)}
          setImageURL={setImageURL}
        />
        <Text typo="Label3" colorCode={theme.palette.Gray300}>
          프로필 사진만 변경가능해요!
        </Text>
        <UserModifyForm
          name={userInfo ? userInfo.name : ''}
          phone={userInfo ? userInfo.phone : ''}
          email={userInfo ? userInfo.email : ''}
        />
      </FlexGrow>
      <HeightFitFlex margin="0 0 93px 0">
        <Button
          borderRadius="0px"
          bg={theme.palette.Black}
          fontColor={theme.palette.White}
          onClick={handleSubmit}
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
