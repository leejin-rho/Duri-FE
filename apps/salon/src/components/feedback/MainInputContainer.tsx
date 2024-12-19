import { useState } from 'react';

import { Flex, Text, TextField, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';
import { FeedBackRequestType } from '@salon/pages/Feedback';

interface ImageListContainer {
  index: number;
  imageUrl: string;
  image: File;
}

interface MainInputContainerProps {
  feedbackImageList: File[];
  setFeedbackImageList: React.Dispatch<React.SetStateAction<File[]>>;
  newFeedbackRequest: FeedBackRequestType;
  setNewFeedbackRequest: React.Dispatch<
    React.SetStateAction<FeedBackRequestType>
  >;
}

const MainInputContainer = ({
  feedbackImageList,
  setFeedbackImageList,
  newFeedbackRequest,
  setNewFeedbackRequest,
}: MainInputContainerProps) => {
  const { noticeContent } = newFeedbackRequest;
  const [previewImageList, setPreviewImageList] = useState<
    ImageListContainer[]
  >([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setPreviewImageList([
        ...previewImageList,
        {
          index:
            previewImageList.length === 0
              ? 0
              : previewImageList[previewImageList.length - 1].index + 1,
          imageUrl: fileUrl,
          image: file,
        },
      ]);
      setFeedbackImageList([...feedbackImageList, file]);
    }
  };

  const handleFileRemove = () => {
    // 현재는 완전 clear만.. 여러개 추가시 Index로 삭제
    setPreviewImageList([]);
    setFeedbackImageList([]);
  };

  const handleNoticeInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewFeedbackRequest({
      ...newFeedbackRequest,
      noticeContent: e.target.value,
    });
  };

  return (
    <>
      <Flex direction="column" align="flex-start" gap={8}>
        <Text typo="Title2">오늘 미용은 어땠나요?</Text>
        <Flex direction="column" align="flex-start">
          <Text typo="Label3" colorCode={theme.palette.Gray400}>
            미용을 진행하는 동안의 강아지의 컨디션을 작성해주세요.
          </Text>
          <Text typo="Label3" colorCode={theme.palette.Gray400}>
            사진을 업로드해야 포트폴리오에 등록됩니다.
          </Text>
        </Flex>
      </Flex>
      <ImageListContainer justify="flex-start" padding="16px 0 0" gap={8}>
        {previewImageList.length > 0 ? (
          previewImageList.map((image) => (
            <ImageUploadContainer
              key={image.index}
              width={90}
              height={90}
              borderRadius={8}
              onClick={() => handleFileRemove()}
            >
              <ImagePreview src={image.imageUrl} alt="선택된 파일 미리보기" />
            </ImageUploadContainer>
          ))
        ) : (
          <ImageUploadContainer
            width={90}
            height={90}
            borderRadius={8}
            backgroundColor={theme.palette.Gray_White}
            direction="column"
            gap={4}
          >
            <FileInput
              id="profile"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <Text typo="Label4" colorCode={theme.palette.Gray800}>
              +
            </Text>
            <Text typo="Label4" colorCode={theme.palette.Gray800}>
              사진추가하기
            </Text>
          </ImageUploadContainer>
        )}
      </ImageListContainer>
      <TextField
        multiline
        widthPer="100%"
        height={108}
        value={noticeContent}
        onChange={handleNoticeInputChange}
        placeholder={`예약자가 참고할 점이 있다면 작성해주세요.\n작성 내용은 [일지]에서 사용자가 열람 가능해요!`}
        placeholderTypo={theme.typo.Label3Thin}
      />
    </>
  );
};

const ImageUploadContainer = styled(Flex)`
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
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

const ImageListContainer = styled(Flex)`
  overflow-x: scroll;
`;
export default MainInputContainer;
