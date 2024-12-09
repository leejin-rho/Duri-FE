import { useNavigate } from 'react-router-dom';

import { Flex } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface PortfolioPhotosProps {
  portfolios: { id: number; src: string }[];
  designerId: string | number;
}

export const PortfolioPhotos = ({
  portfolios,
  designerId,
}: PortfolioPhotosProps) => {
  const navigate = useNavigate();

  const moveToProfolioDetail = (id: number) => {
    navigate(`/portfolio/${designerId}/${id}`);
  };
  return (
    <Flex>
      <PhotoGrid>
        {portfolios.map((item, index) => (
          <PortfolioInsideImg
            key={item.id}
            src={item.src}
            alt={`Porfolio ${index + 1}`}
            onClick={() => moveToProfolioDetail(item.id)}
          />
        ))}
      </PhotoGrid>
    </Flex>
  );
};

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
`;

const PortfolioInsideImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`;
