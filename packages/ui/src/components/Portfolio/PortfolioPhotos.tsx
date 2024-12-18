import { useNavigate } from 'react-router-dom';

import { Flex, Text, theme } from '@duri-fe/ui';
import { UseGetGroomerPortfolio } from '@duri-fe/utils';
import styled from '@emotion/styled';

interface PortfolioPhotosProps {
  groomerId: number;
}

export const PortfolioPhotos = ({ groomerId }: PortfolioPhotosProps) => {
  const navigate = useNavigate();

  const moveToPortfolioDetail = (id: number) => {
    navigate(`/portfolio/${groomerId}/${id}`);
  };

  const { data } = UseGetGroomerPortfolio({
    groomerId: groomerId,
  });

  return (
    <Flex>
      {data && data.length > 0 ? (
        <PhotoGrid>
          {data.map((item, index) => (
            <PortfolioInsideImg
              key={item.feedbackId}
              src={item.imageUrl}
              alt={`Portfolio ${index + 1}`}
              onClick={() => moveToPortfolioDetail(item.feedbackId)}
            />
          ))}
        </PhotoGrid>
      ) : (
        <Flex margin="32px 0">
          <Text colorCode={theme.palette.Gray300}>
            아직 등록된 포트폴리오가 없어요.
          </Text>
        </Flex>
      )}
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
