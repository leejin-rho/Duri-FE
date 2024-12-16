import { useState } from 'react';

import { EmptyStar, Star, WidthFitFlex } from '@duri-fe/ui';

interface RatingStarsProps {
  initialScore?: number; // 초기 점수
  size: number;
  onChange: (score: number) => void;
}

export const SelectStar = ({
  initialScore = 0,
  size,
  onChange,
}: RatingStarsProps) => {
  const [score, setScore] = useState(initialScore);

  const handleClick = (index: number) => {
    const newScore = index + 1;
    setScore(newScore);
    onChange(newScore); // 부모 컴포넌트에 변경된 점수 전달
  };

  return (
    <WidthFitFlex>
      {Array.from({ length: 5 }).map((_, idx) =>
        idx < score ? (
          <Star
            key={idx}
            width={size}
            onClick={() => handleClick(idx)} // 클릭 이벤트 등록
          />
        ) : (
          <EmptyStar
            key={idx}
            width={size}
            onClick={() => handleClick(idx)} // 빈 별도 클릭 가능
          />
        )
      )}
    </WidthFitFlex>
  );
};