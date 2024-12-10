import { Text, theme, TypeOfTypo } from '@duri-fe/ui';

import { WidthFitFlex } from '../FlexBox';

/**
 * @param {string} bg: 태그의 배경색
 * @param {string} colorCode: 태그의 글자색
 * @param {number} borderRadius: 태그의 border radius
 * @param {string} content: 태그의 내용
 * @param {number} height: 태그의 높이
 * @param {string} typo: 태그의 typo
 */

interface TagProps {
  content: string;
  bg?: string;
  borderRadius?: number;
  height?: number;
  typo?: keyof TypeOfTypo;
  colorCode?: string;
  padding?: string;
}

export const SalonTag = ({
  content,
  bg,
  borderRadius,
  height,
  colorCode = theme.palette.Gray500,
  typo = 'Caption5',
  padding
}: TagProps) => {
  return (
    <WidthFitFlex
      backgroundColor={bg ?? theme.palette.Gray50}
      borderRadius={borderRadius ?? 2}
      padding={padding ?? '5.5px 4px'}
      height={height ?? 20}
      width={height ?? 20}
    >
      <Text typo={typo} colorCode={colorCode}>
        {content}
      </Text>
    </WidthFitFlex>
  );
};
