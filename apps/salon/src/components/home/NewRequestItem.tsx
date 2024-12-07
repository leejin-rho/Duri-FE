import { Button, Flex, HeightFitFlex, ProfileImage, Text, theme, WidthFitFlex, Write } from "@duri-fe/ui";
import { parsePetInfo } from "@duri-fe/utils";
import styled from "@emotion/styled";

export interface NewRequestItemProps {
  requestId: number;
  petId: number;
  imageURL: string;
  name: string;
  breed: string;
  gender: string;
  age: number;
  weight: number;
  neutering: boolean;
  quotationReqId: number;
  memo: string;
}

const NewRequestItem = ({
  requestId,
  imageURL,
  name,
  breed,
  gender,
  age,
  weight,
  neutering,
  quotationReqId,
  memo
}: NewRequestItemProps) => {
  const petInfoStr = parsePetInfo({breed: breed, gender: gender, weight: weight, age: age});

  const handleClickRequest = () => {
    console.log(`요청서 보기 클릭: ${requestId}`);
    console.log(`요청서 ID: ${quotationReqId}`);
  }

  return (
    <ItemWrapper direction="column" align="flex-start" justify="flex-start" width={208} height={281} gap={21} padding="20px 16px" borderRadius={8} backgroundColor={theme.palette.Normal50}>
      <HeightFitFlex justify="flex-start" align="flex-start" gap={12}>
        <ProfileImage width={64} height={64} src={imageURL} borderRadius={20} iconSize={52} />
        <HeightFitFlex direction="column" align="flex-start" justify="flex-start" gap={6}>
          <Text typo="Title3" colorCode={theme.palette.Black}>{name}</Text>
          <Text typo="Caption4" colorCode={theme.palette.Gray700}>
            {petInfoStr}
          </Text>
          {neutering && <WidthFitFlex height={20} padding="0 4px" borderRadius={2} backgroundColor={theme.palette.Gray50}>
            <Text typo="Caption5" colorCode={theme.palette.Gray500}>중성화 완료</Text>
          </WidthFitFlex>} 
        </HeightFitFlex>
      </HeightFitFlex>
      <WidthFitFlex justify="flex-start" align="flex-start" gap={4}>
        <Write width={16} height={16} color={theme.palette.Gray400} />
        <MemoText typo="Caption3" colorCode={theme.palette.Gray500}>
          {memo}
        </MemoText>
      </WidthFitFlex>
      <Button onClick={handleClickRequest} height="38px" bg={theme.palette.Black} borderRadius="8px">
        <Text typo="Label1" colorCode={theme.palette.White}>요청서 보기</Text>
      </Button>
    </ItemWrapper>
  );
}

const ItemWrapper = styled(Flex)`
  border: 1px solid ${theme.palette.Normal600};
  flex-shrink: 0;
`

const MemoText = styled(Text)`
  width: calc(100% - 20px);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
`;

export default NewRequestItem;