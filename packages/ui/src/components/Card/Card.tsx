import { Flex, theme } from "@duri-fe/ui"
import styled from "@emotion/styled"

interface CardProps {
  height: string,
  borderRadius: number,
  shadow?: 'small' | 'large',
  children: React.ReactNode,
}

export const Card = ({
  height,
  borderRadius,
  shadow = 'small',
  children,
}: CardProps) => {
  return (
    <CardContainer height={height} borderRadius={borderRadius} shadow={shadow}>
      {children}
    </CardContainer>
  )
}

const CardContainer = styled(Flex)<CardProps>`
  box-shadow: ${({ shadow }) => (
    shadow === 'small'
    ? '0px 0px 4px 0px rgba(0, 0, 0, 0.10)'
    : '0px 0px 10px 0px rgba(0, 0, 0, 0.10)'
  )};
  background-color: ${theme.palette.White};
`;