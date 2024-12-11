import { useEffect, useState } from 'react';

import { Flex, Image, Text, theme, Trash, WidthFitFlex } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const ReviewImageFile = ({
  imageURL,
  onChange,
}: {
  imageURL?: string;
  onChange: (file: string) => void;
}) => {
  const [imageFile, setImageFile] = useState<string | undefined>(imageURL);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImageFile(fileUrl);
      onChange(fileUrl);
    }
  };
  const handleFileDelete = () => {
    setImageFile(undefined);
    onChange('');

  };

  useEffect(() => {
    if (imageURL) {
      setImageFile(imageURL);
    }
  }, [imageURL]); //url 변경 시 렌더링되도록

  return (
    <ImageUploadContainer borderRadius={8}>
      <ReviewImageWrapper borderRadius={8}>
        {imageFile ? (
          <Image width={100} height={100} borderRadius={8} src={imageFile} />
        ) : (
          <ShadowFlex
            backgroundColor={theme.palette.Gray_White}
            width={90}
            height={90}
            borderRadius={8}
          ></ShadowFlex>
        )}
        {!imageFile ? (
          <AddImageWrapper borderRadius={8} height={29} direction="column">
            <Text typo="Label4">+</Text>
            <Text typo="Label4">사진추가하기</Text>
          </AddImageWrapper>
        ) : (
          <TrashWrapper
            padding="6.5px 9.1px"
            backgroundColor={theme.palette.Alert}
            borderRadius={64.4}
            height={26}
            width={29}
            onClick={handleFileDelete}
          >
            <Trash width={8} height={8} />
          </TrashWrapper>
        )}
      </ReviewImageWrapper>
      <FileInput type="file" accept="image/*" onChange={handleFileChange} />
    </ImageUploadContainer>
  );
};

const ImageUploadContainer = styled(WidthFitFlex)`
  position: relative;
  cursor: pointer;
`;

const FileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

const ReviewImageWrapper = styled(WidthFitFlex)`
  position: relative;
  cursor: pointer;
`;
const AddImageWrapper = styled(WidthFitFlex)`
  position: absolute;
  top: 45;
  left: 45;
`;
const ShadowFlex = styled(Flex)`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;
const TrashWrapper = styled(Flex)`
  position: absolute;
  padding: 6px;
  top: 5px;
  left: 70px;
  z-index: 10;
`;
