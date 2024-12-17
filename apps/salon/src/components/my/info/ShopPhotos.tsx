import { Flex } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const ShopPhotos = () => {
  const images = [
    'https://s3-alpha-sig.figma.com/img/1d85/dbcb/8d458ee15d53bb800b97c0da776b2909?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsJT2VGq6a~lRLJF9PaZBN8uBPvTrzvaZdf0vOPJfoNQ~-z7jq6hxODfjPytoebWbo2qilv6nihm3zGBKeZykT2HzA58as4Xcx0QJ26~1l6GlWr1JSmQNG2jiPDOnuzF5QYjik52HzOuB1y85zBkGKb-U1XiwOisvaSIthgJkLyZ74vG3bmO3a-VJCeFR0atgacdxDzGf6uoiX163aYu6X3R0sJ5Ux6ZpOHuWj6npG9I-eGlQeHZJmkODmqjhfjLyrmuUBilvH15pR0CkhAxwraIvSHx4qb3RK6o1K79sDldRPDQ6LaAu7fR-WmExifV~KFGVsSTiIwJOofVLqHHGQ__',
    'https://s3-alpha-sig.figma.com/img/1d85/dbcb/8d458ee15d53bb800b97c0da776b2909?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsJT2VGq6a~lRLJF9PaZBN8uBPvTrzvaZdf0vOPJfoNQ~-z7jq6hxODfjPytoebWbo2qilv6nihm3zGBKeZykT2HzA58as4Xcx0QJ26~1l6GlWr1JSmQNG2jiPDOnuzF5QYjik52HzOuB1y85zBkGKb-U1XiwOisvaSIthgJkLyZ74vG3bmO3a-VJCeFR0atgacdxDzGf6uoiX163aYu6X3R0sJ5Ux6ZpOHuWj6npG9I-eGlQeHZJmkODmqjhfjLyrmuUBilvH15pR0CkhAxwraIvSHx4qb3RK6o1K79sDldRPDQ6LaAu7fR-WmExifV~KFGVsSTiIwJOofVLqHHGQ__',
    'https://s3-alpha-sig.figma.com/img/1d85/dbcb/8d458ee15d53bb800b97c0da776b2909?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsJT2VGq6a~lRLJF9PaZBN8uBPvTrzvaZdf0vOPJfoNQ~-z7jq6hxODfjPytoebWbo2qilv6nihm3zGBKeZykT2HzA58as4Xcx0QJ26~1l6GlWr1JSmQNG2jiPDOnuzF5QYjik52HzOuB1y85zBkGKb-U1XiwOisvaSIthgJkLyZ74vG3bmO3a-VJCeFR0atgacdxDzGf6uoiX163aYu6X3R0sJ5Ux6ZpOHuWj6npG9I-eGlQeHZJmkODmqjhfjLyrmuUBilvH15pR0CkhAxwraIvSHx4qb3RK6o1K79sDldRPDQ6LaAu7fR-WmExifV~KFGVsSTiIwJOofVLqHHGQ__',
    'https://s3-alpha-sig.figma.com/img/1d85/dbcb/8d458ee15d53bb800b97c0da776b2909?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsJT2VGq6a~lRLJF9PaZBN8uBPvTrzvaZdf0vOPJfoNQ~-z7jq6hxODfjPytoebWbo2qilv6nihm3zGBKeZykT2HzA58as4Xcx0QJ26~1l6GlWr1JSmQNG2jiPDOnuzF5QYjik52HzOuB1y85zBkGKb-U1XiwOisvaSIthgJkLyZ74vG3bmO3a-VJCeFR0atgacdxDzGf6uoiX163aYu6X3R0sJ5Ux6ZpOHuWj6npG9I-eGlQeHZJmkODmqjhfjLyrmuUBilvH15pR0CkhAxwraIvSHx4qb3RK6o1K79sDldRPDQ6LaAu7fR-WmExifV~KFGVsSTiIwJOofVLqHHGQ__',
    'https://s3-alpha-sig.figma.com/img/1d85/dbcb/8d458ee15d53bb800b97c0da776b2909?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsJT2VGq6a~lRLJF9PaZBN8uBPvTrzvaZdf0vOPJfoNQ~-z7jq6hxODfjPytoebWbo2qilv6nihm3zGBKeZykT2HzA58as4Xcx0QJ26~1l6GlWr1JSmQNG2jiPDOnuzF5QYjik52HzOuB1y85zBkGKb-U1XiwOisvaSIthgJkLyZ74vG3bmO3a-VJCeFR0atgacdxDzGf6uoiX163aYu6X3R0sJ5Ux6ZpOHuWj6npG9I-eGlQeHZJmkODmqjhfjLyrmuUBilvH15pR0CkhAxwraIvSHx4qb3RK6o1K79sDldRPDQ6LaAu7fR-WmExifV~KFGVsSTiIwJOofVLqHHGQ__',
    'https://s3-alpha-sig.figma.com/img/1d85/dbcb/8d458ee15d53bb800b97c0da776b2909?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsJT2VGq6a~lRLJF9PaZBN8uBPvTrzvaZdf0vOPJfoNQ~-z7jq6hxODfjPytoebWbo2qilv6nihm3zGBKeZykT2HzA58as4Xcx0QJ26~1l6GlWr1JSmQNG2jiPDOnuzF5QYjik52HzOuB1y85zBkGKb-U1XiwOisvaSIthgJkLyZ74vG3bmO3a-VJCeFR0atgacdxDzGf6uoiX163aYu6X3R0sJ5Ux6ZpOHuWj6npG9I-eGlQeHZJmkODmqjhfjLyrmuUBilvH15pR0CkhAxwraIvSHx4qb3RK6o1K79sDldRPDQ6LaAu7fR-WmExifV~KFGVsSTiIwJOofVLqHHGQ__',
  ];

  return (
    <Flex>
      <PhotoGrid>
        {images.map((src, index) => (
          <ShopInsideImg key={index} src={src} alt={`Shop ${index + 1}`} />
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
