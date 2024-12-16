import { Flex, KeyOfTypo, Text, theme } from "@duri-fe/ui"
import styled from "@emotion/styled";

interface TabBarItemProps {
  label: string;
  selected: boolean;
  typo?: KeyOfTypo;
  fitContent?: boolean;
  onClick?: () => void;
}

export const TabBarItem = ({
  label,
  selected,
  typo = 'Body1',
  fitContent = false,
  onClick,
}: TabBarItemProps) => {
  return (
    <Wrapper selected={selected} fitContent={fitContent} onClick={onClick}>
      <Text typo={typo} colorCode={selected ? theme.palette.Black : theme.palette.Gray300}>{label}</Text>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)<Partial<TabBarItemProps>>`
  border-bottom: 2px solid ${({ selected }) => selected ? `${theme.palette.Black}` : 'transparent'};
  ${({ fitContent }) => fitContent && `width: fit-content`};
  ${({ fitContent }) => fitContent && `height: fit-content`};
  cursor: pointer;
`