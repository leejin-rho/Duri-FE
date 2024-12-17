import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Call, Flex, LinkIcon, TextField, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';
import { formatPhoneNumber } from '@salon/utils';

import ShopInfoItem from './ShopInfoItem';

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

  const handlePutShopInfo = (data: PutShopInfoRequest) => {
    console.log(data);
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
          <Flex>
            {openTime} ~ {closeTime}
          </Flex>
        </ShopInfoItem>

        {/* 매장 태그 수정 */}
        <ShopInfoItem
          title="매장 태그 수정"
          keyName="tags"
          isOpen={isOpen.tags}
          setIsOpen={setIsOpen}
        >
          <Flex gap={8}>
            {tags.map((tag) => (
              <Flex key={tag}>{tag}</Flex>
            ))}
          </Flex>
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
          title="샵 한줄 소개 수정"
          keyName="info"
          isOpen={isOpen.info}
          setIsOpen={setIsOpen}
        >
          <TextField
            {...register('info', { required: '샵 한줄 소개를 입력해주세요.' })}
            multiline
            placeholder="샵 한줄 소개를 입력해주세요."
            maxLength={30}
            widthPer="100%"
            height={95}
          />
        </ShopInfoItem>
        <button onSubmit={handleSubmit(handlePutShopInfo)}>
          <Flex onClick={closeSheet}>ㅎㅎ</Flex>
        </button>
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
export default ShopInfoBottomSheet;
