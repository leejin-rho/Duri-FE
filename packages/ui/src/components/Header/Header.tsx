import {
  BeforeArrow,
  Doori,
  Flex,
  Magnifier,
  Notification,
  Text,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

import { HeightFitFlex, WidthFitFlex } from '../FlexBox/Flex';

interface HeaderProps {
  backIcon?: boolean;
  logo?: boolean;
  logoColor?: string;
  title?: string;
  titleAlign?: string;
  searchIcon?: boolean;
  notificationIcon?: boolean;
  iconColor?: string;
  badge?: boolean;
  backgroundColor?: string;

  onClickLogo?: () => void;
  onClickSearch?: () => void;
  onClickNotification?: () => void;
  onClickBack?: () => void;
}

export const Header = ({
  backIcon,
  logo,
  logoColor = theme.palette.Black,
  title,
  titleAlign = 'center',
  searchIcon,
  notificationIcon,
  iconColor = theme.palette.Black,
  badge,
  backgroundColor = 'transparent',
  onClickLogo = () => {},
  onClickSearch = () => {},
  onClickNotification = () => {},
  onClickBack = () => {},
}: HeaderProps) => {
  return (
    <HeaderContainer
      justify="space-between"
      backgroundColor={backgroundColor}
      padding="20px"
    >
      <WidthFitFlex gap={8}>
        {backIcon && onClickBack && (
          <button onClick={onClickBack}>
            <BeforeArrow height={42} color={iconColor} />
          </button>
        )}
        {logo && onClickLogo && (
          <button onClick={onClickLogo}>
            <Doori height={26} color={logoColor} />
          </button>
        )}
        {title && titleAlign === 'start' && <Text typo="Title1">{title}</Text>}
      </WidthFitFlex>

      {title && titleAlign === 'center' && <Text typo="Title1">{title}</Text>}

      <IconContainer gap={20}>
        {backIcon && !searchIcon && !notificationIcon && (
          <Flex width={42} height={42} />
        )}
        {searchIcon && onClickSearch && (
          <button onClick={onClickSearch}>
            <Magnifier width={21.5} color={iconColor} />
          </button>
        )}
        {notificationIcon && onClickNotification && (
          <NotificationContainer onClick={onClickNotification}>
            <Notification height={24} color={iconColor} />
            {badge && (
              <NotificationBadge
                width={8}
                height={8}
                borderRadius={8}
                backgroundColor={theme.palette.Alert}
              />
            )}
          </NotificationContainer>
        )}
      </IconContainer>
    </HeaderContainer>
  );
};

const IconContainer = styled(Flex)`
  width: fit-content;
`;

const NotificationContainer = styled.button`
  position: relative;
`;

const NotificationBadge = styled(Flex)`
  position: absolute;
  top: 0px;
  right: 0px;
`;

const HeaderContainer = styled(HeightFitFlex)`
  z-index: 2;
  height: 70px;
`;
