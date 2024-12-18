import { Doori, Flex, Magnifier, Notification, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

import { HeightFitFlex } from '../FlexBox/Flex';

interface MainHeaderProps {
  logoColor: string;
  iconColor: string;
  searchIcon?: boolean;
  notificationIcon?: boolean;
  badge?: boolean;
  login?: boolean;

  onClickLogo?: () => void;
  onClickSearch?: () => void;
  onClickNotification?: () => void;
}

export const MainHeader = ({
  logoColor,
  iconColor,
  searchIcon,
  badge,
  login,
  notificationIcon = true,
  onClickLogo,
  onClickSearch,
  onClickNotification,
}: MainHeaderProps) => {
  return (
    <HeightFitFlex
      justify="space-between"
      backgroundColor="transparent"
      padding="20px"
    >
      <button onClick={onClickLogo}>
        <Doori height={26} color={logoColor} />
      </button>

      <IconContainer gap={20}>
        {searchIcon && onClickSearch && (
          <button onClick={onClickSearch}>
            <Magnifier width={21.5} color={iconColor} />
          </button>
        )}
        {notificationIcon && (
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
        {login && (
          <LoginButton>
            <LoginLink href="/login">
              <Text typo='Caption5'>로그인/회원가입</Text>
            </LoginLink>
          </LoginButton>
        )}
      </IconContainer>
    </HeightFitFlex>
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

const LoginLink = styled.a`
  color: ${theme.palette.Black};
  ${theme.typo.Body3};
  text-decoration: none;
`;

const LoginButton = styled.div`
  cursor: pointer;
`;
