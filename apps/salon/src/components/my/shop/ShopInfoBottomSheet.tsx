import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  Call,
  Flex,
  LinkIcon,
  Text,
  TextField,
  theme,
  TimeTable,
} from '@duri-fe/ui';
import { TimeType, UsePutShopInfo } from '@duri-fe/utils';
import styled from '@emotion/styled';
import { checkContinuousTime, formatPhoneNumber } from '@salon/utils';
import { getTimeRange, getTimeStr } from '@salon/utils/parseTimeRange';

import ShopInfoItem from './ShopInfoItem';

const timeList = Array(12)
  .fill(0)
  .map((_, i) => `${9 + i}:00`);

const TAG_LIST = [
  '소형견',
  '중형견',
  '대형견',
  '예민한 반려견',
  '예민한 피부',
  '스트레스 케어',
  '훈육미용',
  '피어프리',
];

/** 각 항목 열고닫기 토글용 라벨 */
export interface ToggleOpenState {
  phone: boolean;
  time: boolean;
  tags: boolean;
  kakaoTalk: boolean;
  info: boolean;
}

interface PutShopInfoRequest {
  phone: string;
  openTime: string;
  closeTime: string;
  info: string;
  kakaoTalk: string;
  tags: string[];
}

interface ShopInfoBottomSheetProps {
  phone: string;
  openTime: string;
  closeTime: string;
  tags: string[];
  kakaoTalk: string;
  info: string;
  closeSheet: () => void;
}

const ShopInfoBottomSheet = ({
  phone,
  openTime,
  closeTime,
  tags,
  kakaoTalk,
  info,
  closeSheet,
}: ShopInfoBottomSheetProps) => {
  const { register, setValue, handleSubmit } = useForm<PutShopInfoRequest>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      phone: phone,
      openTime: openTime,
      closeTime: closeTime,
      info: info,
      kakaoTalk: kakaoTalk,
      tags: tags,
    },
  });

  const [isOpen, setIsOpen] = useState<ToggleOpenState>({
    phone: false,
    time: false,
    tags: false,
    kakaoTalk: false,
    info: false,
  });

  const [selectedTimeList, setSelectedTimeList] = useState<TimeType>(
    getTimeRange(openTime, closeTime),
  );

  const [selectedTagList, setSelectedTagList] = useState<string[]>(tags);

  const handleTimeTableSelect = (key: string, value: boolean) => {
    const updatedTimeList = { ...selectedTimeList, [key]: value };

    // 연속적인 시간대인지 검증
    const { isCountinuous } = checkContinuousTime(updatedTimeList, '');

    if (isCountinuous) {
      setSelectedTimeList(updatedTimeList);
    } else {
      alert('연속된 시간을 선택해주세요.');
    }
  };

  const handleTagSelect = (selectedTag: string) => {
    const set = new Set(selectedTagList);
    if (typeof selectedTag === 'string') {
      if (selectedTagList.includes(selectedTag)) {
        set.delete(selectedTag);
        console.log([...set]);
        setSelectedTagList([...set]);
      } else {
        set.add(selectedTag);
        if (set.size > 3) {
          alert('태그는 최대 3개까지 선택 가능합니다.');
          return;
        }
        console.log([...set]);
        setSelectedTagList([...set]);
      }
    }
  };

  useEffect(() => {
    const { startTime, endTime } = getTimeStr(selectedTimeList);
    setValue('openTime', startTime);
    setValue('closeTime', endTime);
  }, [selectedTimeList]);

  useEffect(() => {
    setValue('tags', selectedTagList);
  }, [selectedTagList]);

  const { mutateAsync } = UsePutShopInfo();

  const handlePutShopInfo = async (data: PutShopInfoRequest) => {
    // console.log(data);
    await mutateAsync(data);
    closeSheet();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(handlePutShopInfo)}>
      <Flex direction="column" padding="20px" gap={12}>
        {/* 매장 정보 수정 */}
        <ShopInfoItem
          title="매장 전화번호 수정"
          keyName="phone"
          isOpen={isOpen.phone}
          setIsOpen={setIsOpen}
        >
          <InputWrapper
            padding="12px"
            gap={8}
            borderRadius={8}
            justify="flex-start"
          >
            <Call color={theme.palette.Gray300} width={16} />
            <InputField
              {...register('phone', {
                required: '전화번호를 입력해주세요.',
                onChange: (e) => {
                  const formattedValue = formatPhoneNumber(e.target.value);
                  setValue('phone', formattedValue);
                },
              })}
              width={175}
              placeholder="전화번호를 입력해주세요."
              maxLength={13}
            />
          </InputWrapper>
        </ShopInfoItem>

        {/* 매장 운영시간 수정 */}
        <ShopInfoItem
          title="매장 운영시간 수정"
          keyName="time"
          isOpen={isOpen.time}
          setIsOpen={setIsOpen}
        >
          <TimeTable
            timeList={timeList}
            selectedTimeList={selectedTimeList}
            onSelect={handleTimeTableSelect}
          />
        </ShopInfoItem>

        {/* 매장 태그 수정 */}
        <ShopInfoItem
          title="매장 태그 수정"
          keyName="tags"
          isOpen={isOpen.tags}
          setIsOpen={setIsOpen}
          gap={12}
        >
          <Text typo="Caption3" colorCode={theme.palette.Gray300}>
            최대 3개 선택 가능
          </Text>
          <TagContainer gap={8} justify="flex-start">
            {TAG_LIST.map((tag, index) => (
              <TagButton
                key={index}
                onClick={() => handleTagSelect(tag)}
                bg={
                  selectedTagList.includes(tag)
                    ? theme.palette.Black
                    : theme.palette.Gray_White
                }
                fontColor={
                  selectedTagList.includes(tag)
                    ? theme.palette.White
                    : theme.palette.Black
                }
                border={`1px solid ${theme.palette.Gray100}`}
                height="43px"
                typo="Body2"
                width="fit-content"
              >
                <Text typo="Label3">{tag}</Text>
              </TagButton>
            ))}
          </TagContainer>
        </ShopInfoItem>

        {/* 카카오톡 오픈채팅 링크 수정 */}
        <ShopInfoItem
          title="카카오 오픈채팅 링크 수정"
          keyName="kakaoTalk"
          isOpen={isOpen.kakaoTalk}
          setIsOpen={setIsOpen}
        >
          <InputWrapper
            padding="12px"
            gap={8}
            borderRadius={8}
            justify="flex-start"
          >
            <LinkIcon color={theme.palette.Gray300} width={16} />
            <InputField
              {...register('kakaoTalk', {
                required: '카카오톡 오픈채팅 링크를 입력해주세요.',
              })}
              width="100%"
              placeholder="카카오톡 오픈채팅 링크를 입력해주세요."
            />
          </InputWrapper>
        </ShopInfoItem>

        {/* 매장 한줄 소개 수정 */}
        <ShopInfoItem
          title="매장 소개글 수정"
          keyName="info"
          isOpen={isOpen.info}
          setIsOpen={setIsOpen}
        >
          <TextField
            {...register('info', { required: '샵 한줄 소개를 입력해주세요.' })}
            multiline
            placeholder="샵 한줄 소개를 입력해주세요."
            maxLength={300}
            widthPer="100%"
            height={95}
          />
        </ShopInfoItem>

        <Flex gap={8}>
          <CancleButton
            width="136px"
            bg={theme.palette.Gray20}
            borderRadius="8px"
            onClick={closeSheet}
          >
            <Text typo="Body4" colorCode={theme.palette.Black}>
              취소
            </Text>
          </CancleButton>
          <ConfirmButton onSubmit={handleSubmit(handlePutShopInfo)}>
            <Button bg={theme.palette.Black} borderRadius="8px">
              <Text typo="Body2" colorCode={theme.palette.White}>
                수정하기
              </Text>
            </Button>
          </ConfirmButton>
        </Flex>
      </Flex>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  width: 100%;
`;

const InputWrapper = styled(Flex)`
  background-color: ${theme.palette.White};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
  width: 100%;
`;

const TagContainer = styled(Flex)`
  flex-wrap: wrap;
`;

const TagButton = styled(Button)`
  flex-shrink: 0;
`;

const CancleButton = styled(Button)`
  flex-shrink: 0;
`;

const ConfirmButton = styled.button`
  flex-grow: 1;
`;

export default ShopInfoBottomSheet;
