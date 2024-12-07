import { Doori, Flex, Magnifier, Notification, theme } from "@duri-fe/ui";
import styled from "@emotion/styled";

import { HeightFitFlex } from "../FlexBox/Flex";

interface MainHeaderProps {
  logoColor: string;
  iconColor: string;
  searchIcon?: boolean;
  badge?: boolean;

  onClickLogo?: () => void;
  onClickSearch?: () => void;
  onClickNotification?: () => void;
}

export const MainHeader = ({
  logoColor,
  iconColor,
  searchIcon,
  badge,
  onClickLogo,
  onClickSearch,
  onClickNotification,
}: MainHeaderProps) => {
  return (
    <HeightFitFlex justify="space-between" backgroundColor="transparent" padding="20px">
      <button onClick={onClickLogo}>
        <Doori height={26} color={logoColor} />
      </button>

      <IconContainer gap={20}>
        {searchIcon && onClickSearch && 
          <button onClick={onClickSearch}>
            <Magnifier width={21.5} color={iconColor} />
          </button>
        }
        <NotificationContainer onClick={onClickNotification}>
          <Notification height={24} color={iconColor} />
          {badge && <NotificationBadge width={8} height={8} borderRadius={8} backgroundColor={theme.palette.Alert} />}
        </NotificationContainer>
      </IconContainer>
    </HeightFitFlex>
  )
}

const IconContainer = styled(Flex)`
  width: fit-content;
`

const NotificationContainer = styled.button`
  position: relative;
`

const NotificationBadge = styled(Flex)`
  position: absolute;
  top: 0px;
  right: 0px;
`;