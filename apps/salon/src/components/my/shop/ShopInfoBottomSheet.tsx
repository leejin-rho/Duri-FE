import { useState } from 'react';

import { Flex } from '@duri-fe/ui';

import ShopInfoItem from './ShopInfoItem';

/** 각 항목 열고닫기 토글용 라벨 */
export interface ToggleOpenState {
  phone: boolean;
  time: boolean;
  tags: boolean;
  kakaoTalk: boolean;
  info: boolean;
}

interface ShopInfoBottomSheetProps {
  closeSheet: () => void;
}

const ShopInfoBottomSheet = ({ closeSheet }: ShopInfoBottomSheetProps) => {
  const [isOpen, setIsOpen] = useState<ToggleOpenState>({
    phone: false,
    time: false,
    tags: false,
    kakaoTalk: false,
    info: false,
  });

  return (
    <Flex direction="column" padding="20px" gap={12}>
      <ShopInfoItem
        title="매장 전화번호 수정"
        keyName="phone"
        isOpen={isOpen.phone}
        setIsOpen={setIsOpen}
      >
        <div>수정고고</div>
      </ShopInfoItem>
      <ShopInfoItem
        title="매장 운영시간 수정"
        keyName="time"
        isOpen={isOpen.time}
        setIsOpen={setIsOpen}
      />
      <ShopInfoItem
        title="매장 태그 수정"
        keyName="tags"
        isOpen={isOpen.tags}
        setIsOpen={setIsOpen}
      />
      <ShopInfoItem
        title="카카오 오픈채팅 링크 수정"
        keyName="kakaoTalk"
        isOpen={isOpen.kakaoTalk}
        setIsOpen={setIsOpen}
      />
      <ShopInfoItem
        title="샵 한줄 소개 수정"
        keyName="info"
        isOpen={isOpen.info}
        setIsOpen={setIsOpen}
      />
      <Flex onClick={closeSheet}>ㅎㅎ</Flex>
    </Flex>
  );
};

export default ShopInfoBottomSheet;
