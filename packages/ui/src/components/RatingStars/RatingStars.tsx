import { EmptyStar, Star, WidthFitFlex } from '@duri-fe/ui';

interface RatingStarsProps {
  score: number;
  size: number;
  reviewMode?: boolean;
}

export const RatingStars = ({
  score,
  size,
  reviewMode = false,
}: RatingStarsProps) => {
  const fullStars = Math.round(score);

  return (
    <WidthFitFlex>
      {Array.from({ length: fullStars }).map((_, idx) => (
        <Star key={idx} width={size} />
      ))}
      {reviewMode &&
        Array.from({ length: 5 - fullStars }).map((_, idx) => (
          <EmptyStar key={idx} width={size} />
        ))}
    </WidthFitFlex>
  );
};
