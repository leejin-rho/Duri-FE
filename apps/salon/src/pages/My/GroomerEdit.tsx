import { useEffect, useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { useNavigate } from 'react-router-dom';

import {
  Approve,
  Flex,
  FrontBtn,
  Header,
  MobileLayout,
  Pencil,
  ProfileImage,
  SalonNavbar,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import {
  historyStr,
  useBottomSheet,
  useGetMyShopInfo,
  UsePutGroomerInfo,
} from '@duri-fe/utils';
import styled from '@emotion/styled';

import GroomerEditItem from '../../components/my/info/GroomerEditItem';

const LICENSES = [
  '반려견 스타일리스트',
  '펫뷰티션',
  '펫테이너',
  '반려동물 행동지도사',
  '반려동물 관리사',
  '피어프리 인증',
];

interface GroomerDetailRequestType {
  email: string;
  phone: string;
  name: string;
  gender: string;
  age: number;
  history: number;
  info: string;
  license: string[];
}

const GroomerEditPage = () => {
  const navigate = useNavigate();

  const { openSheet, bottomSheetProps } = useBottomSheet({
    maxHeight: 474,
  });
  const { data: myShopInfo } = useGetMyShopInfo({});
  const { mutateAsync: putGroomerInfoMutate, isSuccess } = UsePutGroomerInfo();

  const {
    groomerProfileDetailResponse: groomerDetail = {
      id: 0,
      email: '',
      phone: '',
      name: '',
      gender: '',
      age: 0,
      history: 0,
      image: '',
      info: '',
      license: [],
    },
  } = myShopInfo || {};

  const [groomerDetailRequest, setGroomerDetailRequest] =
    useState<GroomerDetailRequestType>({
      email: groomerDetail.email,
      phone: groomerDetail.phone,
      name: groomerDetail.name,
      gender: groomerDetail.gender,
      age: groomerDetail.age,
      history: groomerDetail.history,
      info: groomerDetail.info,
      license: groomerDetail.license,
    });
  const [selectedImage, setSelectedImage] = useState<File | null>();
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>('');
  const [selectedLicense, setSelectedLicense] = useState<string[]>(
    groomerDetail.license,
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImagePreviewUrl(fileUrl);
      setSelectedImage(file);
    } else {
      setSelectedImage(null);
    }
  };

  const handleToggleLicense = (license: string) => {
    if (selectedLicense.includes(license)) {
      setSelectedLicense(selectedLicense.filter((item) => item !== license));
    } else {
      setSelectedLicense([...selectedLicense, license]);
    }
  };

  useEffect(() => {
    setGroomerDetailRequest({
      ...groomerDetailRequest,
      license: selectedLicense,
    });
  }, [selectedLicense]);

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append(
      'groomerDetailRequest',
      new Blob([JSON.stringify(groomerDetailRequest)]),
    );

    if (selectedImage) {
      formData.append('image', selectedImage);
    }
    console.log(groomerDetailRequest, selectedImage);
    putGroomerInfoMutate({
      groomerId: groomerDetail.id,
      formData,
    });
  };

  if (isSuccess) {
    alert('미용사 정보 수정에 성공했습니다.');
    navigate('/my/shop');
  }

  return (
    <MobileLayout>
      <Header
        backIcon
        title="미용사 정보 수정"
        titleAlign="start"
        onClickBack={() => navigate(-1)}
      />

      <ProfileImageContainer>
        <ProfileImageWrapper>
          <ProfileImage
            width={100}
            height={100}
            borderRadius={40}
            src={
              imagePreviewUrl
                ? imagePreviewUrl
                : groomerDetail.image === null
                  ? undefined
                  : groomerDetail.image
            }
          />
          <PencilWrapper
            backgroundColor={theme.palette.Black}
            borderRadius={99}
            height={29}
          >
            <Pencil width={17} height={17} color={theme.palette.White} />
          </PencilWrapper>
          <FileInput type="file" accept="image/*" onChange={handleFileChange} />
        </ProfileImageWrapper>
      </ProfileImageContainer>

      <Flex padding="48px 20px">
        <EditContainer>
          <Flex direction="column" align="flex-start" gap={4}>
            <GroomerEditItem label="성함" value={groomerDetail.name} />
            <GroomerEditItem
              label="성별"
              value={groomerDetail.gender === 'F' ? '여성' : '남성'}
            />
            <GroomerEditItem label="나이" value={`${groomerDetail.age}세`} />
            <GroomerEditItem
              label="경력"
              value={historyStr(groomerDetail.history)}
            />

            <Flex justify="flex-start" align="flex-start" onClick={openSheet}>
              <LabelWrapper justify="flex-start" width={80} height={40} gap={8}>
                <Text typo="Title3">자격</Text>
                <Pencil height={20} color={theme.palette.Black} />
              </LabelWrapper>
              <LicenseWrapper
                direction="column"
                align="flex-start"
                padding="10px 16px"
                width={180}
                backgroundColor={theme.palette.Gray_White}
                borderRadius={8}
                gap={16}
              >
                {selectedLicense.map((license, index) => (
                  <Text
                    key={index}
                    typo="Caption3"
                    colorCode={theme.palette.Black}
                  >
                    {license}
                  </Text>
                ))}
              </LicenseWrapper>
            </Flex>
          </Flex>
        </EditContainer>
      </Flex>

      <button onClick={handleSubmit}>
        <FrontBtn
          height="53px"
          borderRadius="0"
          bg={theme.palette.Black}
          fontColor={theme.palette.White}
        >
          <Text typo="Body2" margin="0 0 0 12px">
            수정 완료
          </Text>
        </FrontBtn>
      </button>

      <SalonNavbar />

      <BottomSheet {...bottomSheetProps}>
        <Flex direction="column" padding="24px 20px" align="flex-start">
          <Text typo="Title3">자격 선택</Text>

          <Flex
            gap={8}
            direction="column"
            padding="40px 8px"
            justify="space-between"
          >
            {LICENSES.map((license, index) => (
              <LicenseButton
                key={index}
                onClick={() => handleToggleLicense(license)}
              >
                <Flex justify="space-between">
                  <Text
                    typo={
                      selectedLicense.includes(license)
                        ? 'Title3'
                        : 'Body2Light'
                    }
                    colorCode={
                      selectedLicense.includes(license)
                        ? theme.palette.Normal600
                        : theme.palette.Black
                    }
                  >
                    {license}
                  </Text>
                  <Approve
                    width={36}
                    height={36}
                    color={
                      selectedLicense.includes(license)
                        ? theme.palette.Black
                        : theme.palette.Gray20
                    }
                  />
                </Flex>
              </LicenseButton>
            ))}
          </Flex>
        </Flex>
      </BottomSheet>
    </MobileLayout>
  );
};

const ProfileImageContainer = styled(Flex)`
  width: 100%;
`;

const ProfileImageWrapper = styled(WidthFitFlex)`
  position: relative;
`;

const PencilWrapper = styled(WidthFitFlex)`
  position: absolute;
  border: 1.094px solid ${theme.palette.White};
  padding: 6px;
  top: 76px;
  left: 74px;
`;

const FileInput = styled.input`
  position: absolute;
  top: 76px;
  left: 74px;
  width: 31px;
  height: 29px;
  opacity: 0;
  cursor: pointer;
`;

const EditContainer = styled.form`
  width: 100%;
`;

const LabelWrapper = styled(Flex)`
  flex-shrink: 0;
`;

const LicenseWrapper = styled(Flex)`
  min-height: 40px;
`;

const LicenseButton = styled.button`
  width: 100%;
`;

export default GroomerEditPage;
