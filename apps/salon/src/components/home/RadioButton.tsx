import { Card, Flex, HeightFitFlex, RadioSelect, RadioUnselect, Text, theme } from "@duri-fe/ui"

interface RadioButtonProps {
  selected: boolean;
  label: string;
  onClick: () => void;
}

/** 선택 라디오 버튼 */
export const RadioButton = ({
  selected,
  label,
  onClick,
}: RadioButtonProps) => {
  return (
    <HeightFitFlex onClick={onClick}>
      <Card height="46" borderColor={selected ? theme.palette.Normal500 : theme.palette.White} borderRadius={12}>
        <Flex justify="flex-start" gap={4} padding="0 4px">
          {selected ? <RadioSelect width={36} /> : <RadioUnselect width={36} />}
          <Text typo="Body3" colorCode={theme.palette.Gray400}>{label}</Text>
        </Flex>
      </Card>
    </HeightFitFlex>
  )
}
