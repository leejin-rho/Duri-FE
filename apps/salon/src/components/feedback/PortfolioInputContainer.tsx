import {
  Flex,
  Text,
  TextField,
  theme,
  ToggleDisable,
  ToggleEnable,
} from '@duri-fe/ui';
import { FeedBackRequestType } from '@salon/pages/Feedback';

interface PortfolioInputContainerProps {
  newFeedbackRequest: FeedBackRequestType;
  setNewFeedbackRequest: React.Dispatch<
    React.SetStateAction<FeedBackRequestType>
  >;
}

const PortfolioInputContainer = ({
  newFeedbackRequest,
  setNewFeedbackRequest,
}: PortfolioInputContainerProps) => {
  const { expose, portfolioContent } = newFeedbackRequest;

  const handleExposureToggle = () => {
    setNewFeedbackRequest((prev) => ({
      ...prev,
      expose: !prev.expose,
    }));
  };

  const handlePortfolioInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewFeedbackRequest({
      ...newFeedbackRequest,
      portfolioContent: e.target.value,
    });
  };

  return (
    <>
      <Flex justify="space-between">
        <Text typo="Title2">포트폴리오 공개 설정</Text>
        <button type="button" onClick={handleExposureToggle}>
          {expose ? (
            <ToggleEnable height={30} />
          ) : (
            <ToggleDisable height={30} />
          )}
        </button>
      </Flex>
      <Flex direction="column" align="flex-start" gap={8} padding="24px 0 8px">
        <Text
          typo="Title2"
          colorCode={expose ? theme.palette.Black : theme.palette.Gray400}
        >
          포트폴리오 문구 설정
        </Text>
        <Text typo="Label3" colorCode={theme.palette.Gray400}>
          해당 문구는 포트폴리오에 적용돼요!
        </Text>
      </Flex>
      <TextField
        multiline
        widthPer="100%"
        height={108}
        value={portfolioContent}
        onChange={handlePortfolioInputChange}
        placeholder="포트폴리오에 적용될 문구를 작성해주세요."
        placeholderTypo={theme.typo.Label3Thin}
        disabled={!expose}
      />
    </>
  );
};

export default PortfolioInputContainer;
