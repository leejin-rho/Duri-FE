import salonDefault from '@assets/images/pngs/salonDefault.png';
import { Flex } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const ShopPhotos = () => {
  const images = [
    '../../assets/images/pngs/salonDefault.pngs',
    'https://via.placeholder.com/107',
    'https://via.placeholder.com/107',
    'https://via.placeholder.com/107',
    'https://via.placeholder.com/107',
    'https://via.placeholder.com/107',
  ];

  return (
    <Flex>
      <PhotoGrid>
        {images.map((src, index) => (
          <ShopInsideImg
            key={index}
            src={salonDefault}
            alt={`Shop ${index + 1}`}
          />
        ))}
      </PhotoGrid>
    </Flex>
  );
};

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7px;
`;

const ShopInsideImg = styled.img`
  width: 107px;
  height: 107px;
  border-radius: 4px;
  object-fit: cover;
`;
