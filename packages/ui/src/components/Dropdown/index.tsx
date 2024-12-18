import { useEffect, useRef, useState } from 'react';

import { UnionDown, UnionUp } from '@duri-fe/ui';
import { theme } from '@duri-fe/ui';

import { Text } from '../Typo';

import { DropdownBox } from './DropdownBox';
import { Option } from './Option';
import { Select } from './Select';

interface DropdownProps {
  width?: number | string;
  margin?: string;
  options?: string[] | number[]; // select 목록
  defaultValue: string | number;
  onSelect: (value: string | number) => void; // 선택된 값을 부모로 전달
  suffix?: string; //접미사 (ex. 살 등등)
  isError?: boolean;
}

export const Dropdown = ({
  width,
  margin,
  options,
  defaultValue,
  suffix = '',
  onSelect,
  isError = false,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | number>(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 펫 수정 페이지 -> defaultValue가 변경될 때 selectedOption도 업데이트되도록 useEffect 추가함!!
  useEffect(() => {
    setSelectedOption(defaultValue);
  }, [defaultValue]);

  const handleSelectOption = (option: string | number) => {
    const newOption =
      suffix === '살' && option === 0 ? '0살 이하' : `${option}${suffix}`;

    setSelectedOption(newOption);
    onSelect(option);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // 클릭 이벤트 전파 방지
    setIsOpen((prev) => !prev);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <DropdownBox
        margin={margin}
        width={width}
        onClick={toggleDropdown}
        ref={dropdownRef}
        isError={isError}
      >
        {selectedOption === defaultValue ? (
          <Text
            typo="Caption2"
            colorCode={theme.palette.Gray300}
            justify="center"
          >
            {selectedOption}
          </Text>
        ) : (
          <Text typo="Label3">{selectedOption}</Text>
        )}
        {isOpen ? (
          <UnionUp width={8} height={5} />
        ) : (
          <UnionDown width={8} height={5} />
        )}
        {isOpen && (
          <Select width={width}>
            {options?.map((option, index) => (
              <Option key={index} onClick={() => handleSelectOption(option)}>
                <Text typo="Body3" align="center" justify="center">
                  {suffix === '살' && option === 0
                    ? '0살 이하'
                    : `${option}${suffix}`}
                </Text>
              </Option>
            ))}
          </Select>
        )}
      </DropdownBox>
    </>
  );
};

export default Dropdown;