import { useEffect, useRef, useState } from 'react';

import { Flex, FrontBtn, Pencil, Text, theme } from '@duri-fe/ui';
import { UsePutShopImage } from '@duri-fe/utils';
import styled from '@emotion/styled';

interface ShopImageAreaProps {
  imageURL: string;
  onEdit: boolean;
  setOnEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopImageArea = ({ imageURL, onEdit, setOnEdit }: ShopImageAreaProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const { mutateAsync } = UsePutShopImage();
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

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImagePreviewUrl(URL.createObjectURL(e.target.files[0]));
      setImageFile(e.target.files[0]);
    }
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    if (!imageFile) {
      setOnEdit(false);
      return;
    }
    formData.append('image', imageFile);

    try {
      await mutateAsync(formData);
      setOnEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ShopImageWrapper ref={shopImageRef} onClick={() => setOnEdit(true)}>
      {imagePreviewUrl ? (
        <MainImg src={imagePreviewUrl} />
      ) : imageURL ? (
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
        <>
          <ShopEditWrapper>
            <ShopEditArea
              backgroundColor={theme.palette.Black}
              borderRadius={12}
            >
              <Pencil width={16} />
              <Text typo="Label3" colorCode={theme.palette.White}>
                수정하기
              </Text>
            </ShopEditArea>
            <ShopEditInput
              id="profile"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </ShopEditWrapper>

          <FrontBtn
            bg={theme.palette.Black}
            padding="10px 0"
            height="53px"
            borderRadius="0"
            onClick={(e) => {
              e.stopPropagation();
              handleImageUpload();
            }}
          >
            <Text typo="Body2" colorCode={theme.palette.White}>
              수정하기
            </Text>
          </FrontBtn>
        </>
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

const ShopEditWrapper = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ShopEditArea = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(17, 17, 17, 0.5);
`;

const ShopEditInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export default ShopImageArea;
