import { Pencil, ProfileImage, theme, WidthFitFlex } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const InputImageFile = ({
  imageURL,
  onChange,
  setImageURL,
}: {
  imageURL: string | undefined;
  setImageURL: (url: string) => void;
  onChange: (file: File) => void;
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setImageURL(fileURL);
      onChange(file);
    }
  };

  return (
    <ImageUploadContainer borderRadius={40}>
      <ProfileImageWrapper>
        <ProfileImage
          width={100}
          height={100}
          borderRadius={40}
          src={imageURL}
        />
        <PencilWrapper
          backgroundColor={theme.palette.Black}
          borderRadius={99}
          height={29}
        >
          <Pencil width={17} height={17} color={theme.palette.White} />
        </PencilWrapper>
      </ProfileImageWrapper>
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

const ProfileImageWrapper = styled(WidthFitFlex)`
  position: relative;
  cursor: pointer;
`;
const PencilWrapper = styled(WidthFitFlex)`
  position: absolute;
  border: 1.094px solid ${theme.palette.White};
  padding: 6px;
  top: 76px;
  left: 74px;
`;
