import { useEffect, useRef } from 'react';

import { Flex, Pencil, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface ShopImageAreaProps {
  imageURL: string;
  onEdit: boolean;
  setOnEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopImageArea = ({ imageURL, onEdit, setOnEdit }: ShopImageAreaProps) => {
  const shopImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        shopImageRef.current &&
        !shopImageRef.current.contains(e.target as Node)
      ) {
        setOnEdit(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [shopImageRef]);

  return (
    <ShopImageWrapper ref={shopImageRef} onClick={() => setOnEdit(true)}>
      {imageURL ? (
        <MainImg src={imageURL} />
      ) : (
        <Flex
          backgroundColor={theme.palette.Gray_White}
          borderRadius={16}
          height={182}
        >
          <Text typo="Caption2" colorCode={theme.palette.Gray500}>
            매장 대표 사진을 등록해주세요.
          </Text>
        </Flex>
      )}
      {onEdit && (
        <ShopEditArea backgroundColor={theme.palette.Black} borderRadius={12}>
          <Pencil width={16} />
          <Text typo="Label3" colorCode={theme.palette.White}>
            수정하기
          </Text>
        </ShopEditArea>
      )}
    </ShopImageWrapper>
  );
};

const ShopImageWrapper = styled(Flex)`
  position: relative;
  cursor: pointer;
`;

const MainImg = styled.img`
  width: 100%;
  aspect-ratio: 330 / 180;
  border-radius: 12px;
  object-fit: cover;
`;

const ShopEditArea = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(17, 17, 17, 0.5);
`;

export default ShopImageArea;
