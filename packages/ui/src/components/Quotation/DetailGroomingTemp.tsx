import { Flex, Text, theme, WidthFitFlex } from '@duri-fe/ui';

interface GroomingMenuProps {
    groomingMenu:string,
    additionalGrooming: string,
    designCut: string,
    specialCare: string,
}

/** DetailGrooming의 props를 string[] -> string으로 임시 수정버전 */
export const DetailGroomingTemp = ({
  groomingMenu,
  additionalGrooming,
  designCut,
  specialCare,
}: GroomingMenuProps) => {
  return (
    <>
      {groomingMenu && (
        <Flex
        justify="space-between"
        align="flex-start"
        padding="4px 30.5px 0 30.5px"
      >
          <Text typo="Body2">기본 미용</Text>
          <WidthFitFlex direction="column" gap={12} align='end'>
            <Text typo="Label3" colorCode={theme.palette.Gray500}>{groomingMenu}</Text>
          </WidthFitFlex>
        </Flex>
      )}
      {additionalGrooming && (
        <Flex
        justify="space-between"
        align="flex-start"
        padding="28px 30.5px 0 30.5px"
      >
          <Text typo="Body2">추가 미용</Text>
          <WidthFitFlex direction="column" gap={12} align='end'>
            <Text typo="Label3" colorCode={theme.palette.Gray500}>{additionalGrooming}</Text>
          </WidthFitFlex>
        </Flex>
      )}
      {specialCare && (
        <Flex
        justify="space-between"
        align="flex-start"
        padding="28px 30.5px 0 30.5px"
      >
          <Text typo="Body2">스페셜 케어</Text>
          <WidthFitFlex direction="column" gap={12} align='end'>
            <Text typo="Label3" colorCode={theme.palette.Gray500}>{specialCare}</Text>
          </WidthFitFlex>
        </Flex>
      )}
      {designCut && (
        <Flex
        justify="space-between"
        align="flex-start"
        padding="28px 30.5px 0 30.5px"
      >
          <Text typo="Body2">디자인 컷</Text>
          <WidthFitFlex direction="column" gap={12} align='end'>
            <Text typo="Label3" colorCode={theme.palette.Gray500}>{designCut}</Text>
          </WidthFitFlex>
        </Flex>
      )}
    </>
  );
};
