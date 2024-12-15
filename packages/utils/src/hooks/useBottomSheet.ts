import { useRef, useState } from 'react';
import { BottomSheetRef } from 'react-spring-bottom-sheet';

import { css } from '@emotion/react';

interface UseBottomSheetProps {
  maxHeight: number;
  onDismiss?: () => void;
  isMap?: boolean;
}

export const useBottomSheet = ({
  maxHeight,
  onDismiss,
  isMap = false,
}: UseBottomSheetProps) => {
  const [isOpenSheet, setIsOpenSheet] = useState<boolean>(false);
  const ref = useRef<BottomSheetRef>(null);

  const handleDismiss = () => {
    setIsOpenSheet(false);
    if (onDismiss) onDismiss();
  };

  const openSheet = () => {
    setIsOpenSheet(true);
  };
  const closeSheet = () => {
    setIsOpenSheet(false);
  };

  const bottomSheetProps = {
    open: isOpenSheet,
    ref,
    css: StyledBottomCss(isMap),
    maxHeight,
    snapPoints: ({ maxHeight }: { maxHeight: number }) => [maxHeight],
    onDismiss: handleDismiss,
  };

  return { isOpenSheet, openSheet, closeSheet, bottomSheetProps };
};

const StyledBottomCss = (isMap: boolean) => css`
  position: relative;

  [data-rsbs-overlay],
  [data-rsbs-root]::after {
    border-radius: 16px 16px 0px 0px;
    z-index: ${isMap ? '2' : '20'};
    --max-width: 375px;

    @media (max-width: 420px) {
      --max-width: 100%;
    }

    max-width: var(--max-width);
    left: calc(50% - (var(--max-width) / 2));
  }

  [data-rsbs-backdrop] {
    z-index: ${isMap ? 0 : 10};
    background-color: ${isMap ? 'transparent' : 'rgba(49, 48, 54, 0.5)'};
  }
`;
