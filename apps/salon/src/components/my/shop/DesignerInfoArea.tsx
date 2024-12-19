import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  DesignerInfo,
  Flex,
  HeightFitFlex,
  Pencil,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

interface DesignerInfoAreaProps {
  id: number;
  name: string;
  age: number;
  gender: string;
  history: number;
  license: string[];
  image: string;
  onEdit: boolean;
  setOnEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesignerInfoArea = ({
  id,
  name,
  age,
  gender,
  history,
  license,
  image,
  onEdit,
  setOnEdit,
}: DesignerInfoAreaProps) => {
  const navigate = useNavigate();
  const designerInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        designerInfoRef.current &&
        !designerInfoRef.current.contains(e.target as Node)
      ) {
        setOnEdit(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [designerInfoRef]);

  return (
    <HeightFitFlex
      direction="column"
      margin="18px 0"
      align="flex-start"
      gap={24}
    >
      <Text typo="Title3">디자이너 소개</Text>
      <DesignerInfoWrapper
        justify="flex-start"
        ref={designerInfoRef}
        onClick={() => setOnEdit(true)}
      >
        <DesignerInfo
          version="vertical"
          designerId={id}
          name={name}
          age={age}
          gender={gender === 'F' ? '여성' : '남성'}
          experience={history}
          roles={license}
          imageUrl={image}
          isNavigate={false}
        />
        {onEdit && (
          <AreaButton onClick={() => navigate('/my/groomer/edit')}>
            <ShopEditArea
              backgroundColor={theme.palette.Black}
              borderRadius={12}
            >
              <Pencil width={16} />
              <Text typo="Label3" colorCode={theme.palette.White}>
                수정하기
              </Text>
            </ShopEditArea>
          </AreaButton>
        )}
      </DesignerInfoWrapper>
    </HeightFitFlex>
  );
};

const DesignerInfoWrapper = styled(WidthFitFlex)`
  position: relative;
`;

const AreaButton = styled.button`
  position: absolute;
  top: -4px;
  left: -4px;
  width: calc(100% + 8px);
  height: calc(100% + 8px);
`;

const ShopEditArea = styled(Flex)`
  background-color: rgba(17, 17, 17, 0.5);
`;

export default DesignerInfoArea;
