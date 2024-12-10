import { Star, WidthFitFlex } from '@duri-fe/ui';

interface RatingStarsProps {
  score: number;
  size: number;
}

export const RatingStars = ({ score, size }: RatingStarsProps) => {
  const fullStars = Math.round(score);

  return (
    <WidthFitFlex>
      {Array.from({ length: fullStars }).map((_, idx) => (
        <Star key={idx} width={size} />
      ))}
    </WidthFitFlex>
  );
};
