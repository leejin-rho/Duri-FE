import { useEffect, useState } from 'react';

import { addMenu, designMenu, menu, specialMenu } from '@duri/assets/data';
import { PetInfoProps } from '@duri/assets/types/pet';
import { RequestProps } from '@duri/assets/types/request';
import MonthlyCalendar from '@duri/components/request/Calendar';
import EtcRequest from '@duri/components/request/EtcRequest';
import PetInfo from '@duri/components/request/PetInfo';
import SelectGrooming from '@duri/components/request/SelectGrooming';
import TimeTable from '@duri/components/request/TimeTable';
import {
  Button,
  DuriNavbar,
  HeightFitFlex,
  MobileLayout,
  Text,
  theme,
} from '@duri-fe/ui';
import { useGetPetInfo } from '@duri-fe/utils';

const timeList = Array(10)
  .fill(0)
  .map((_, i) => `${9 + i}:00`);

const RequestPage = () => {
  const [requestList, setRequestList] = useState<RequestProps>({
    petId: undefined,
    menu: [],
    addMenu: [],
    specialMenu: [],
    design: [],
    etc: '',
    day: new Date(),
    time9: false,
    time10: false,
    time11: false,
    time12: false,
    time13: false,
    time14: false,
    time15: false,
    time16: false,
    time17: false,
    time18: false,
    shopIds: [1, 2],
  });
  const [petInfo, setPetInfo] = useState<PetInfoProps>();
  const [isButton, setIsButton] = useState<boolean>(false);

  const handleSelect = (
    key: string,
    value: number | string | string[] | boolean | Date,
  ) => {
    if (key === 'petId') {
      setRequestList((prev) => ({
        ...prev,
        petId:
          typeof value === 'number' || value === undefined ? value : undefined,
      }));
      return;
    }

    setRequestList((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const data = useGetPetInfo();

  useEffect(() => {
    if (data) {
      setPetInfo(data);
      handleSelect('petId', data.petId); // petId는 따로 설정
      console.log(data)
    }
  }, [data]);

  // 버튼 활성화 조건 업데이트
  useEffect(() => {
    const isValid =
      !!requestList.petId && !!requestList.menu && requestList.menu.length > 0;
    setIsButton(isValid);
  }, [requestList]);

  const handleClickButton = () => {
    console.log(requestList);
  };

  return (
    <MobileLayout>
      <HeightFitFlex direction="column" margin="30px 0 91.6px 0">
        <HeightFitFlex
          direction="column"
          align="flex-start"
          padding="0 20px"
          gap={40}
        >
          {petInfo && (
            <PetInfo
              petId={petInfo.petId}
              petName={petInfo.petName}
              petImage={petInfo.petImage}
              age={petInfo.age}
              breed={petInfo.breed}
              gender={petInfo.gender}
              weight={petInfo.weight}
            />
          )}
          <HeightFitFlex direction="column" align="flex-start" gap={8}>
            <Text typo="Title2">미용 선택</Text>
            <Text typo="Caption1" colorCode={theme.palette.Gray400}>
              원하는 미용의 종류를 모두 선택해주세요
            </Text>
            <SelectGrooming
              title="기본 미용"
              description={requestList.menu}
              menuKey="menu"
              onSelect={handleSelect}
              options={menu}
              selected={requestList.menu.length > 0}
            />
            <SelectGrooming
              title="추가 미용"
              menuKey="addMenu"
              description={requestList.addMenu}
              onSelect={handleSelect}
              options={addMenu}
              selected={requestList.addMenu.length > 0}
            />
            <SelectGrooming
              title="스페셜 미용"
              description={requestList.specialMenu}
              menuKey="specialMenu"
              onSelect={handleSelect}
              options={specialMenu}
              selected={requestList.specialMenu.length > 0}
            />
            <SelectGrooming
              title="디자인 컷"
              description={requestList.design}
              menuKey="design"
              onSelect={handleSelect}
              options={designMenu}
              selected={requestList.design.length > 0}
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
              원하는 미용의 종류를 모두 선택해주세요
            </Text>
            <TimeTable
              timeList={timeList}
              onSelect={handleSelect}
              selectedTimeList={requestList}
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
        {isButton ? (
          <Button
            bg={theme.palette.Black}
            fontColor={theme.palette.White}
            borderRadius="0"
            onClick={handleClickButton}
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
