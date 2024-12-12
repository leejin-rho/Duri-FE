import { useState } from 'react';

import { Flex, HeightFitFlex, Text, UnionDown, UnionUp } from '@duri-fe/ui';
import { theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface SelectGroomingProps {
  options?: string[];
  title: string;
  description?: string[];
  menuKey: string;
  onSelect: (key: string, value: string[] | boolean) => void;
  selected: boolean;
}

export const SelectGrooming = ({
  options,
  title,
  description,
  menuKey,
  onSelect,
  selected,
}: SelectGroomingProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleClickBox = () => setIsOpen((prev) => !prev);
  const handleClickOption = (
    value: string,
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    event.stopPropagation(); // 이벤트 버블링 중단: 부모 Flex 클릭 이벤트 방지
    setSelectedOptions((prev) => {
      const updatedOptions = prev.includes(value)
        ? prev.filter((item) => item !== value) // 이미 선택된 항목은 제거
        : [...prev, value]; // 새로운 항목 추가

      onSelect(menuKey, updatedOptions); // 부모에 업데이트된 값 전달
      return updatedOptions;
    });
  };

  //버튼 활성화 조건: 미용 선택, 시간 선택, 날짜 선택

  return (
    <>
      <SelectGroomingBox
        padding="27px 15px"
        direction="column"
        onClick={handleClickBox}
        backgroundColor={
          selected && !isOpen
            ? theme.palette.Normal50
            : theme.palette.Gray_White
        }
        borderRadius={12}
        selected={selected && !isOpen}
      >
        <HeightFitFlex justify="space-between">
          <Text typo='Title3'>{title}</Text>
          <HeightFitFlex width="fit-content" gap={3}>
            {description && 
            (description.length > 1 ? <Text typo='Caption2'>{description[0]} 외 {description.length - 1}&nbsp; </Text> : 
              <Text typo='Caption2'>{description[0]}&nbsp;</Text>
            )}
            {isOpen ? (
              <UnionUp width={9} height={6} />
            ) : (
              <UnionDown width={9} height={6} />
            )}
          </HeightFitFlex>
        </HeightFitFlex>
        {isOpen && (
          <Flex direction="column" gap={10} margin="25px 0 0 0">
            {options?.map((option, index) => (
              <SelectGroomingBox
                key={index}
                justify="flex-start"
                padding="15px"
                backgroundColor={
                  selectedOptions.includes(option)
                    ? theme.palette.Normal50 // 선택된 항목의 배경색
                    : theme.palette.White
                }
                borderRadius={4}
                onClick={(e) => handleClickOption(option, e)}
                selected={Boolean(selectedOptions.includes(option))}
              >
                <Text typo='Caption2'>{option}</Text>
              </SelectGroomingBox>
            ))}
          </Flex>
        )}
      </SelectGroomingBox>
    </>
  );
};
export default SelectGrooming;

const SelectGroomingBox = styled(Flex)<{ selected: boolean }>`
  border: ${({ selected }) =>
    selected
      ? `1px solid ${theme.palette.Normal500}`
      : `1px solid ${theme.palette.White}`};
`;
