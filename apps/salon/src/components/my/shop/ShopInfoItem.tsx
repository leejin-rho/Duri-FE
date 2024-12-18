import { Flex, Text, theme, UnionDown, UnionUp } from '@duri-fe/ui';

import { ToggleOpenState } from './ShopInfoBottomSheet';

interface ShopInfoItemProps {
  title: string;
  keyName: keyof ToggleOpenState;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<ToggleOpenState>>;
  children?: React.ReactNode;
  gap?: number;
}

const ShopInfoItem = ({
  title,
  keyName,
  isOpen,
  setIsOpen,
  children,
  gap = 8,
}: ShopInfoItemProps) => {
  /** item 열고 닫기 */
  const handleToggle = () => {
    setIsOpen((prev) => ({
      ...prev,
      [keyName]: !prev[keyName],
    }));
  };

  return (
    <Flex
      direction="column"
      align="flex-start"
      padding="27px 16px"
      gap={gap}
      backgroundColor={theme.palette.Gray_White}
      borderRadius={12}
    >
      <Flex justify="space-between" onClick={handleToggle}>
        <Text typo="Title3" colorCode={theme.palette.Gray700}>
          {title}
        </Text>
        {isOpen ? <UnionUp width={9} /> : <UnionDown width={9} />}
      </Flex>
      {isOpen && children}
    </Flex>
  );
};

export default ShopInfoItem;
