import { Flex, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface CardProps {
  direction?: string;
  height?: string;
  borderRadius: number;
  shadow?: 'small' | 'large' | 'none';
  padding?: string;
  borderColor?: string;
  maxHeight?: string;
  children: React.ReactNode;
  bg?: string;
  className?: string;
}

export const Card = ({
  direction = 'column',
  height = 'auto',
  borderRadius,
  shadow = 'small',
  borderColor,
  bg = `${theme.palette.White}`,
  padding,
  maxHeight,
  children,
  className,
}: CardProps) => {
  return (
    <CardContainer
      direction={direction}
      height={height}
      borderRadius={borderRadius}
      shadow={shadow}
      padding={padding}
      borderColor={borderColor}
      maxHeight={maxHeight}
      bg={bg}
      className={className}
    >
      {children}
    </CardContainer>
  );
};

const CardContainer = styled(Flex)<CardProps>`
  box-shadow: ${({ shadow }) =>
    shadow === 'small'
      ? '0px 0px 4px 0px rgba(0, 0, 0, 0.10)'
      : shadow === 'large'
        ? '0px 0px 10px 0px rgba(0, 0, 0, 0.10)'
        : 'none'};
  background-color: ${({ bg }) => bg ?? `${theme.palette.White}`};
  padding: ${({ padding }) => (padding ? `${padding}` : '0px')};
  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : 'none'};
  overflow: hidden;
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}` : 'none')};
  flex-direction: ${({ direction }) => `${direction}`};
`;
