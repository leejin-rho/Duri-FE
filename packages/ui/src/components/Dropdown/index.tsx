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
  options?: string[]; // select 목록
  defaultValue: string;
  onSelect?: (value: string) => void; // 선택된 값을 부모로 전달
}

export const Dropdown = ({
  width,
  margin,
  options,
  defaultValue,
  // onSelect,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    // onSelect(option); //상위 컴포넌트에 option 저장
  };
  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation(); // 클릭 이벤트 전파 방지
    setIsOpen((prev) => !prev);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
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
      <DropdownBox margin={margin} width={width} onClick={toggleDropdown} ref={dropdownRef}>
        {selectedOption === defaultValue ? (
            <Text typo="Body3" colorCode={theme.palette.Gray300} justify='center'>{selectedOption}</Text>
        ) : (
            <Text typo="Body3">{selectedOption}</Text>
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
                 <Text typo="Body3" align="center" justify='center'>{option}</Text>
              </Option>
            ))}
          </Select>
        )}
      </DropdownBox>
    </>
  );
};

export default Dropdown;