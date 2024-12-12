import { useRef, useState } from 'react';
import { BottomSheetRef } from 'react-spring-bottom-sheet';

import { css } from '@emotion/react';

interface UseBottomSheetProps {
  maxHeight: number;
  onDismiss?: () => void;
}

export const useBottomSheet = ({
  maxHeight,
  onDismiss,
}: UseBottomSheetProps) => {
  const [isOpenSheet, setIsOpenSheet] = useState<boolean>(false);
  const ref = useRef<BottomSheetRef>(null);

  const handleDismiss = () => {
    setIsOpenSheet(false);
    if (onDismiss) onDismiss();
  };

  const openSheet = () => setIsOpenSheet(true);
  const closeSheet = () => setIsOpenSheet(false);

  const bottomSheetProps = {
    open: isOpenSheet,
    ref,
    css: StyledBottomCss,
    maxHeight,
    snapPoints: ({ maxHeight }: { maxHeight: number }) => [maxHeight],
    onDismiss: handleDismiss,
  };

  return { isOpenSheet, openSheet, closeSheet, bottomSheetProps };
};

const StyledBottomCss = css`
  position: relative;

  [data-rsbs-overlay],
  [data-rsbs-root]::after {
    border-radius: 16px 16px 0px 0px;
    z-index: 20;
    --max-width: 375px;

    @media (max-width: 480px) {
      --max-width: 100%;
    }

    max-width: var(--max-width);
    left: calc(50% - (var(--max-width) / 2));
  }

  [data-rsbs-backdrop] {
    background-color: rgba(49, 48, 54, 0.5);
  }
`;
