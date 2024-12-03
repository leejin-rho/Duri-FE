import { useEffect, useState } from 'react';

import { PetInfoProps } from '@duri/assets/types/pet';
import { RequestProps } from '@duri/assets/types/request';
import EtcRequest from '@duri/components/quotation/EtcRequest';
import PetInfo from '@duri/components/quotation/PetInfo';
import SelectGrooming from '@duri/components/quotation/SelectGrooming';
import TimeTable from '@duri/components/quotation/TimeTable';
import {
  Button,
  DuriNavbar,
  HeightFitFlex,
  MobileLayout,
  Text,
  theme,
} from '@duri-fe/ui';
import { useGetPetInfo } from '@duri-fe/utils';

const menu = [
  '가위컷',
  '부분+목욕',
  '부분목욕',
  '스포팅',
  '위생',
  '전체 클리핑',
];
const addMenu = [
  '입질',
  '이중모',
  '기장추가',
  '모량추가',
  '엉킴추가',
  '발등미용',
];
const specialMenu = ['머드팩', '허브팩', '스파', '약욕'];
const designMenu = ['장화', '나팔', '방울', '디자인 얼굴컷', '기본 얼굴컷'];
const timeList = Array(10)
  .fill(0)
  .map((_, i) => `${9 + i}:00`);

const RequestPage = () => {
    //shopIds 배열이 props로 전달되면 고거도 설정 필요!!!!
  const [requestList, setRequestList] = useState<Partial<RequestProps>>({});
  const [petInfo, setPetInfo] = useState<PetInfoProps>();
  const handleSelect = (key: string, value: string | string[] | boolean) => {
    setRequestList((prev: object) => ({
      ...prev,
      [key]: value,
    }));
  };
  const data = useGetPetInfo();
  useEffect(() => {
    if (data) setPetInfo(data);
    console.log(data);
  }, [data]);

  const handleClickButton = () => {
    console.log(requestList);
  };

  return (
    <MobileLayout>
      <HeightFitFlex direction='column' margin='0 0 91.6px 0'>
        <HeightFitFlex
          direction='column'
          align='flex-start'
          padding='0 20px'
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
            <Text>미용 선택</Text>
            <Text colorCode={theme.palette.Gray400}>
              원하는 미용의 종류를 모두 선택해주세요
            </Text>
            <SelectGrooming
              title='기본 미용'
              description='가위컷 외 5'
              menuKey='menu'
              onSelect={handleSelect}
              options={menu}
              selected={Boolean(
                requestList.menu && requestList.menu.length > 0,
              )} // null 체크 추가
            />
            <SelectGrooming
              title='추가 미용'
              menuKey='addMenu'
              onSelect={handleSelect}
              options={addMenu}
              selected={Boolean(
                requestList.addMenu && requestList.addMenu.length > 0,
              )}
            />
            <SelectGrooming
              title='스페셜 미용'
              description='머드팩 외 3'
              menuKey='specialMenu'
              onSelect={handleSelect}
              options={specialMenu}
              selected={Boolean(
                requestList.specialMenu && requestList.specialMenu.length > 0,
              )}
            />
            <SelectGrooming
              title='디자인 컷'
              description='장화 외 4'
              menuKey='design'
              onSelect={handleSelect}
              options={designMenu}
              selected={Boolean(
                requestList.design && requestList.design.length > 0,
              )}
            />
          </HeightFitFlex>
          <TimeTable
            timeList={timeList}
            onSelect={handleSelect}
            selectedTimeList={requestList}
          />
          <EtcRequest onSelect={handleSelect} />
        </HeightFitFlex>
        <Button
          bg={theme.palette.Black}
          fontColor={theme.palette.White}
          borderRadius='0'
          onClick={handleClickButton}
        >
          요청서 저장
        </Button>
      </HeightFitFlex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default RequestPage;
