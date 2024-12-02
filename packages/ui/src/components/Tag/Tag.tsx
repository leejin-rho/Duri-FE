import { Text, theme } from '@duri-fe/ui';

import { WidthFitFlex } from '../FlexBox';

/**
 * @param {string} bg: 태그의 배경색
 * @param {number} borderRadius: 태그의 border radius
 * @param {string} content: 태그의 내용
 */

interface TagProps {
  content: string;
  bg?: string;
  borderRadius?: number;
  height?: number;
}

export const SalonTag = ({ content, bg, borderRadius, height }: TagProps) => {
  return (
    <WidthFitFlex
      backgroundColor={bg ?? theme.palette.Gray50}
      borderRadius={borderRadius ?? 2}
      padding="10px"
      height={height ?? 20}
    >
      <Text typo="Label3" colorCode={theme.palette.Gray500}>
        {content}
      </Text>
    </WidthFitFlex>
  );
};
