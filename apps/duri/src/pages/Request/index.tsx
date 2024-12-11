import { useEffect, useState } from 'react';

import { addMenu, designMenu, menu, specialMenu } from '@duri/assets/data';
import { defaultRequestInfo } from '@duri/assets/data/request';
import { RequestType } from '@duri/assets/types';
import MonthlyCalendar from '@duri/components/request/Calendar';
import EtcRequest from '@duri/components/request/EtcRequest';
import PetInfo from '@duri/components/request/PetInfo';
import SelectGrooming from '@duri/components/request/SelectGrooming';
import {
  Button,
  DuriNavbar,
  HeightFitFlex,
  MobileLayout,
  Text,
  theme,
} from '@duri-fe/ui';
import { TimeTable } from '@duri-fe/ui';
import { useGetPetInfo } from '@duri-fe/utils';

interface PetInfoType {
  petId: number;
  name: string;
  imageURL?: string;
  breed: string;
  age: number;
  weight: number;
  gender: string;
  lastGrooming?: string;
  neutering?: boolean;
}

const timeList = Array(10)
  .fill(0)
  .map((_, i) => `${9 + i}:00`);

const RequestPage = () => {
  const petData = useGetPetInfo();
  const [requestInfo, setRequestInfo] =
    useState<RequestType>(defaultRequestInfo);
  const [petInfo, setPetInfo] = useState<PetInfoType | null>({
    petId: 1,
    name: '멍뭉이',
    breed: '시츄',
    age: 4,
    weight: 3.7,
    gender: 'F',
    lastGrooming: '2024-12-01',
  });
  const [isButton, setIsButton] = useState<boolean>(false);

  const handleSelect = (
    key: string,
    value: number | string | string[] | boolean | Date | undefined,
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (petData) {
      setPetInfo(petData);
      if (petData && petData.petId !== undefined) {
        handleSelect('petId', petData.petId); // id가 null이 아닌 경우만 설정
      }
    }
  }, [petData]);

  // 버튼 활성화 조건 업데이트
  useEffect(() => {
    const isValid =
      !!requestInfo.petId && !!requestInfo.menu && requestInfo.menu.length > 0;
    setIsButton(isValid);
  }, [requestInfo]);

  const handleClickButton = () => {
    console.log(requestInfo);
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
              name={petInfo.name}
              image={petInfo.imageURL}
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
              description={requestInfo.menu}
              menuKey="menu"
              onSelect={handleSelect}
              options={menu}
              selected={requestInfo.menu.length > 0}
            />
            <SelectGrooming
              title="추가 미용"
              menuKey="addMenu"
              description={requestInfo.addMenu}
              onSelect={handleSelect}
              options={addMenu}
              selected={requestInfo.addMenu.length > 0}
            />
            <SelectGrooming
              title="스페셜 미용"
              description={requestInfo.specialMenu}
              menuKey="specialMenu"
              onSelect={handleSelect}
              options={specialMenu}
              selected={requestInfo.specialMenu.length > 0}
            />
            <SelectGrooming
              title="디자인 컷"
              description={requestInfo.design}
              menuKey="design"
              onSelect={handleSelect}
              options={designMenu}
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
