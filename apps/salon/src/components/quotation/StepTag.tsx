import { Flex, KeyOfTypo, SalonTag, Text, theme } from "@duri-fe/ui";

interface StepTagProps {
  step: number;
  label: string;
  status: 'active' | 'done' | 'disabled';
  onClick?: () => void;
}

const StepTag = ({
  step,
  label,
  status,
  onClick,
}: StepTagProps) => {
  const { backgroundColor, tagBackgroundColor, fontColor, typo } = StepTagTheme[status];
  return (
    <Flex width="fit-content" padding="10px" borderRadius={8} backgroundColor={backgroundColor} gap={10} onClick={onClick}>
      <SalonTag
        content={step.toString()}
        typo="Label3"
        height={16}
        padding="5px"
        borderRadius={99}
        bg={tagBackgroundColor}
        colorCode={fontColor}
      />
      <Text typo={typo} colorCode={fontColor}>{label}</Text>
    </Flex>
  )
}

export default StepTag;

interface ThemeVariant {
  backgroundColor: string;
  tagBackgroundColor: string;
  fontColor: string;
  typo: KeyOfTypo;
}

const StepTagTheme: Record<'active' | 'done' | 'disabled', ThemeVariant> = {
  active: {
    backgroundColor: theme.palette.Normal500,
    tagBackgroundColor: theme.palette.Normal50,
    fontColor: theme.palette.Normal700,
    typo: 'Label1',
  },
  done: {
    backgroundColor: theme.palette.Normal50,
    tagBackgroundColor: theme.palette.Normal100,
    fontColor: theme.palette.Normal700,
    typo: 'Label3',
  },
  disabled: {
    backgroundColor: theme.palette.Gray20,
    tagBackgroundColor: theme.palette.Gray_White,
    fontColor: theme.palette.Gray300,
    typo: 'Label3',
  },
}