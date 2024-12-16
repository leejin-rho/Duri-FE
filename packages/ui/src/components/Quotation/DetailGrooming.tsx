import { Flex, Text, theme, WidthFitFlex } from '@duri-fe/ui';

interface GroomingMenuProps {
    groomingMenu:string[],
    additionalGrooming: string[],
    designCut: string[],
    specialCare: string[],
}

export const DetailGrooming = ({
  groomingMenu,
  additionalGrooming,
  designCut,
  specialCare,
}: GroomingMenuProps) => {
  return (
    <>
      {groomingMenu?.length > 0 && (
        <Flex
        justify="space-between"
        align="flex-start"
        padding="4px 30.5px 0 30.5px"
      >
          <Text typo="Body2">기본 미용</Text>
          <WidthFitFlex direction="column" gap={12} align='end'>
            {groomingMenu.map((item, index) => (
              <Text typo="Label3" colorCode={theme.palette.Gray500} key={index}>
                {item}
              </Text>
            ))}
          </WidthFitFlex>
        </Flex>
      )}
      {additionalGrooming?.length> 0 && (
        <Flex
        justify="space-between"
        align="flex-start"
        padding="28px 30.5px 0 30.5px"
      >
          <Text typo="Body2">추가 미용</Text>
          <WidthFitFlex direction="column" gap={12} align='end'>
            {additionalGrooming.map((item, index) => (
              <Text typo="Label3" colorCode={theme.palette.Gray500} key={index}>
                {item}
              </Text>
            ))}
          </WidthFitFlex>
        </Flex>
      )}
      {specialCare?.length > 0 && (
        <Flex
        justify="space-between"
        align="flex-start"
        padding="28px 30.5px 0 30.5px"
      >
          <Text typo="Body2">스페셜 케어</Text>
          <WidthFitFlex direction="column" gap={12} align='end'>
            {specialCare.map((item, index) => (
              <Text typo="Label3" colorCode={theme.palette.Gray500} key={index}>
                {item}
              </Text>
            ))}
          </WidthFitFlex>
        </Flex>
      )}
      {designCut?.length > 0 && (
        <Flex
        justify="space-between"
        align="flex-start"
        padding="28px 30.5px 0 30.5px"
      >
          <Text typo="Body2">디자인 컷</Text>
          <WidthFitFlex direction="column" gap={12} align='end'>
            {designCut.map((item, index) => (
              <Text typo="Label3" colorCode={theme.palette.Gray500} key={index}>
                {item}
              </Text>
            ))}
          </WidthFitFlex>
        </Flex>
      )}

    </>
  );
};
