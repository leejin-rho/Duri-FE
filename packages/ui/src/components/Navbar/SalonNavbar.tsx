import { useLocation, useNavigate } from 'react-router-dom';

import {
  HomeIcon,
  MyIcon,
  PortfolioIcon,
  QuotationIcon,
  Store,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

import { Flex } from '../FlexBox';

import NavItem from './NavItem';

export const SalonNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname; // 현재 경로

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Wrapper>
      <TabContainer backgroundColor={theme.palette.White} height={92}>
        <Flex
          direction="row"
          justify="center"
          align="flex-start"
          padding="18px 0 0 0"
        >
          <NavItem
            isActive={pathname === '/'}
            text="홈"
            onClick={() => handleNavigate('/')}
            iconType="home"
          >
            <HomeIcon height={24} />
          </NavItem>
          <NavItem
            isActive={pathname.startsWith('/portfolio')}
            text="포트폴리오"
            onClick={() => handleNavigate('/portfolio')}
            iconType="portfolio"
          >
            <PortfolioIcon height={24} />
          </NavItem>
          <NavItem
            isActive={pathname.startsWith('/quotation')}
            text="견적서"
            onClick={() => handleNavigate('/quotation')}
            iconType="quotation"
          >
            <QuotationIcon height={24} />
          </NavItem>
          <NavItem
            isActive={pathname.startsWith('/income')}
            text="매출관리"
            onClick={() => handleNavigate('/income')}
            iconType="income"
          >
            <Store height={24} />
          </NavItem>
          <NavItem
            isActive={pathname.startsWith('/my')}
            text="마이"
            onClick={() => handleNavigate('/my')}
            iconType="my"
          >
            <MyIcon height={24} />
          </NavItem>
        </Flex>
      </TabContainer>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  display: block;
  position: relative;
  height: fit-content;
`;

const TabContainer = styled(Flex)`
  max-width: 480px;
  min-width: 360px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  border-top: 0.5px solid
    hsla(224.99999999999997, 5.084745762711864%, 46.27450980392157%, 0.16);

  @media (min-width: 480px) {
    max-width: 375px;
  }
`;
