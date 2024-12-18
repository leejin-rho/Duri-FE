import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { RequestType } from '@duri/assets/types';
import MonthlyCalendar from '@duri/components/request/Calendar';
import EtcRequest from '@duri/components/request/EtcRequest';
import PetInfo from '@duri/components/request/PetInfo';
import SelectGrooming from '@duri/components/request/SelectGrooming';
import { ADD_MENU, DESIGN_MENU, MENU, SPECIAL_MENU } from '@duri/constants';
import { DEFAULT_REQUEST_INFO } from '@duri/constants/request';
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
import { TimeTable } from '@duri-fe/ui';
import {
  TimeType,
  useGetPetInfo,
  usePostRequestQuotation,
} from '@duri-fe/utils';

const timeList = Array(10)
  .fill(0)
  .map((_, i) => `${9 + i}:00`);

const validateRequestInfo = (requestInfo: RequestType): boolean => {
  // 시간 조건: time9~time18 중 하나라도 true여야 함
  const hasValidTime = Object.keys(requestInfo).some(
    (key) => key.startsWith('time') && requestInfo[key as keyof TimeType],
  );

  // 전체 유효성 검사값을 리턴
  return (
    !!requestInfo.petId &&
    requestInfo.menu.length > 0 &&
    !!requestInfo.shopIds &&
    !!requestInfo.day &&
    hasValidTime
  );
};

const RequestPage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { shopIdList } = location.state;

  const { data: petInfo } = useGetPetInfo();
  const {
    mutateAsync: request,
    isError: requestError,
    error,
  } = usePostRequestQuotation();

  const [requestInfo, setRequestInfo] =
    useState<RequestType>(DEFAULT_REQUEST_INFO);

  const [isButton, setIsButton] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSelect = (
    key: string,
    value: number | string | string[] | boolean | undefined,
  ) => {
    if (key === 'petId') {
      setRequestInfo((prev) => ({
        ...prev,
        petId:
          value === undefined || typeof value === 'number' ? value : undefined, // petId만 undefined일 경우 처리가 필요
      }));
      return;
    }

    setRequestInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSaveButtonClick = () => {
    request(requestInfo);
  };

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  //스크롤 멘 위로 옮기고 shopIds리스트 받은 애 set
  useEffect(() => {
    window.scrollTo(0, 0);
    setRequestInfo((prev) => ({
      ...prev,
      shopIds: shopIdList,
    }));
  }, []);

  useEffect(() => {
    if (petInfo) {
      setRequestInfo((prev) => ({ ...prev, petId: petInfo.petId }));
    }
  }, [petInfo]);

  // 버튼 활성화 조건 업데이트
  useEffect(() => {
    const isValid = validateRequestInfo(requestInfo);
    setIsButton(isValid);
  }, [requestInfo]);

  // 오류 처리
  useEffect(() => {
    if (requestError) {
      setErrorMessage('오류가 발생했습니다. 다시 시도해주세요.');
    } else {
      setErrorMessage(null);
    }
  }, [requestError, error]);

  return (
    <MobileLayout>
      <Header
        backIcon
        title="입찰 요청서 작성"
        titleAlign="start"
        onClickBack={handleBackButtonClick}
      />
      <HeightFitFlex direction="column" margin="0 0 91.6px">
        <HeightFitFlex
          direction="column"
          // align="flex-start"
          padding="0 20px"
          gap={40}
        >
          {petInfo ? (
            <PetInfo
              name={petInfo.name}
              image={petInfo.imageURL}
              age={petInfo.age}
              breed={petInfo.breed}
              gender={petInfo.gender}
              weight={petInfo.weight}
            />
          ) : (
            <Flex
              direction="column"
              borderRadius={12}
              padding="25px 22px 27px 13px"
              height={75.5}
              backgroundColor={theme.palette.Gray_White}
            >
              <Text typo="Caption4" colorCode={theme.palette.Gray300}>
                등록된 반려견 정보가 없습니다.
              </Text>
            </Flex>
          )}
          <HeightFitFlex direction="column" align="flex-start" gap={8}>
            <Text typo="Title2">미용 선택</Text>
            <Text typo="Caption1" colorCode={theme.palette.Gray400}>
              원하는 미용의 종류를 모두 선택해주세요
            </Text>
            <SelectGrooming
              title="기본 미용"
              description={requestInfo.menu}
              menuKey="menu"
              onSelect={handleSelect}
              options={MENU}
              selected={requestInfo.menu.length > 0}
            />
            <SelectGrooming
              title="추가 미용"
              menuKey="addMenu"
              description={requestInfo.addMenu}
              onSelect={handleSelect}
              options={ADD_MENU}
              selected={requestInfo.addMenu.length > 0}
            />
            <SelectGrooming
              title="스페셜 미용"
              description={requestInfo.specialMenu}
              menuKey="specialMenu"
              onSelect={handleSelect}
              options={SPECIAL_MENU}
              selected={requestInfo.specialMenu.length > 0}
            />
            <SelectGrooming
              title="디자인 컷"
              description={requestInfo.design}
              menuKey="design"
              onSelect={handleSelect}
              options={DESIGN_MENU}
              selected={requestInfo.design.length > 0}
            />
          </HeightFitFlex>
          <HeightFitFlex direction="column" align="flex-start" gap={8}>
            <Text typo="Title2">미용 날짜 선택</Text>
            <Text typo="Caption1" colorCode={theme.palette.Gray400}>
              희망하는 날짜를 선택해주세요.
            </Text>
            {/* 날짜 선택 UI */}
            <MonthlyCalendar onSelect={handleSelect} />
          </HeightFitFlex>
          <HeightFitFlex direction="column" align="flex-start" gap={8}>
            <Text typo="Title2">시간 선택</Text>
            <Text typo="Caption1" colorCode={theme.palette.Gray400}>
              미용 가능한 모든 시간대를 선택해주세요.
            </Text>
            <TimeTable
              timeList={timeList}
              onSelect={handleSelect}
              selectedTimeList={requestInfo}
            />
          </HeightFitFlex>
          <HeightFitFlex direction="column" gap={12} margin="0 0 40px 0">
            <HeightFitFlex direction="column" align="flex-start" gap={8}>
              <Text typo="Title2">기타 요청사항</Text>
              <Text typo="Caption1" colorCode={theme.palette.Gray400}>
                미용사가 알아야할 점이 있다면 작성해주세요!
              </Text>
              <EtcRequest onSelect={handleSelect} />
            </HeightFitFlex>
          </HeightFitFlex>
        </HeightFitFlex>
        {requestError && errorMessage && (
          <Text typo="Caption3" colorCode={theme.palette.Alert}>
            {errorMessage}
          </Text>
        )}
        {isButton ? (
          <Button
            bg={theme.palette.Black}
            fontColor={theme.palette.White}
            borderRadius="0"
            onClick={handleSaveButtonClick}
            typo="Body2"
          >
            요청서 저장
          </Button>
        ) : (
          <Button
            bg={theme.palette.Gray50}
            fontColor={theme.palette.White}
            borderRadius="0"
            typo="Body2"
          >
            요청서 저장
          </Button>
        )}
      </HeightFitFlex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default RequestPage;
