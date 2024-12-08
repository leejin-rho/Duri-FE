import { RequestInfo } from '@duri/components/quotation/RequestInfo';
import { SalonCard } from '@duri/components/quotation/SalonCard';
import {
  Button,
  Card,
  DuriNavbar,
  Flex,
  Header,
  MobileLayout,
  NextArrow,
  Text,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';
import { useState } from 'react';
import { IncomingQuotation } from '@duri/components/quotation/IncomingQuotation';

const QuotationDetailPage = () => {
  const [QuotationSalonList, setQuotationSalonList] = useState();
  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Header title="견적서" />
      <Flex direction="column" padding="0 20px" margin="0 0 100px 0">
        <Card borderRadius={16} padding="26px 28px">
          <RequestInfo
            quotationId={1}
            createdAt="2024-12-22 23:00"
            expiredAt="2024-12-22 23:00"
          />
        </Card>

        <Flex
          direction="column"
          margin="26px 0 0 0"
          gap={12}
          align="flex-start"
        >
          <Text typo="Title2">여기 샵이 좋대!</Text>
          <Text typo="Caption1" colorCode={theme.palette.Gray400}>
            견적서가 들어온 샵들 중 카테고리별로 <br />
            1등샵을 추천해드려요
          </Text>
        </Flex>
        <Flex direction="column" margin="16px 0 0 0" gap={4}>
          <Flex gap={4}>
            <SalonCard
              title="거리순"
              salonName="댕댕샵"
              imageURL="https://s3-alpha-sig.figma.com/img/7288/e8cb/765917075a0ff1a9f4ef89045ec486ce?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oq4Y0Uqsxbln0WqYdkcYB25-3jI94a-y4BgE1iR6LiJHuy4Fij17MRJuc4~5TrOtq4EErqmiLIaAzjbAr7DcIzOgUPonCTK6SSdtCvPvRzmHzwre6RsCF5eLy19WEHwDzvRnobu0HT6tWMJK4LNEfi7UjAt93eeXaXAI89y0gYZ790waTMt-9j4Uax-XKrI6CSxwEf-rms9RdhQGUqelUoNLRnNq3btRGrE-fYNlLL4a9B2mvHVhISB-e7PvygT0wDoaxQAdAHDSD-ctiqOzl~WLCyYJ1GNcrYYaOA5ihmYMDWkHaoCPLClnIL-LSuTyipWyRFvNqc07vuNAPbjfiA__"
            />
            <SalonCard
              title="가격순"
              salonName="멍뭉샵"
              imageURL="https://s3-alpha-sig.figma.com/img/7288/e8cb/765917075a0ff1a9f4ef89045ec486ce?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oq4Y0Uqsxbln0WqYdkcYB25-3jI94a-y4BgE1iR6LiJHuy4Fij17MRJuc4~5TrOtq4EErqmiLIaAzjbAr7DcIzOgUPonCTK6SSdtCvPvRzmHzwre6RsCF5eLy19WEHwDzvRnobu0HT6tWMJK4LNEfi7UjAt93eeXaXAI89y0gYZ790waTMt-9j4Uax-XKrI6CSxwEf-rms9RdhQGUqelUoNLRnNq3btRGrE-fYNlLL4a9B2mvHVhISB-e7PvygT0wDoaxQAdAHDSD-ctiqOzl~WLCyYJ1GNcrYYaOA5ihmYMDWkHaoCPLClnIL-LSuTyipWyRFvNqc07vuNAPbjfiA__"
            />
          </Flex>
          <Flex gap={4}>
            <SalonCard
              title="평점순"
              salonName="댕댕냥냥샵"
              imageURL="https://s3-alpha-sig.figma.com/img/7288/e8cb/765917075a0ff1a9f4ef89045ec486ce?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oq4Y0Uqsxbln0WqYdkcYB25-3jI94a-y4BgE1iR6LiJHuy4Fij17MRJuc4~5TrOtq4EErqmiLIaAzjbAr7DcIzOgUPonCTK6SSdtCvPvRzmHzwre6RsCF5eLy19WEHwDzvRnobu0HT6tWMJK4LNEfi7UjAt93eeXaXAI89y0gYZ790waTMt-9j4Uax-XKrI6CSxwEf-rms9RdhQGUqelUoNLRnNq3btRGrE-fYNlLL4a9B2mvHVhISB-e7PvygT0wDoaxQAdAHDSD-ctiqOzl~WLCyYJ1GNcrYYaOA5ihmYMDWkHaoCPLClnIL-LSuTyipWyRFvNqc07vuNAPbjfiA__"
            />
            <SalonCard
              title="통합"
              salonName="멍멍멍멍ㅁ엄어멍"
              imageURL="https://s3-alpha-sig.figma.com/img/7288/e8cb/765917075a0ff1a9f4ef89045ec486ce?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oq4Y0Uqsxbln0WqYdkcYB25-3jI94a-y4BgE1iR6LiJHuy4Fij17MRJuc4~5TrOtq4EErqmiLIaAzjbAr7DcIzOgUPonCTK6SSdtCvPvRzmHzwre6RsCF5eLy19WEHwDzvRnobu0HT6tWMJK4LNEfi7UjAt93eeXaXAI89y0gYZ790waTMt-9j4Uax-XKrI6CSxwEf-rms9RdhQGUqelUoNLRnNq3btRGrE-fYNlLL4a9B2mvHVhISB-e7PvygT0wDoaxQAdAHDSD-ctiqOzl~WLCyYJ1GNcrYYaOA5ihmYMDWkHaoCPLClnIL-LSuTyipWyRFvNqc07vuNAPbjfiA__"
              bg={theme.palette.Normal50}
            />
          </Flex>
        </Flex>

        <Flex direction="column" align="flex-start" margin="31px 0 0 0">
          <Text typo="Title2">들어온 견적</Text>
          <Flex direction="column" margin="17px 0 0 0" gap={8}>
            <IncomingQuotation salonName='댕댕냥냥샵' price={100000} />
            <IncomingQuotation salonName='댕댕냥냥샵' price={null} />
            <IncomingQuotation salonName='댕댕냥냥샵' price={100000}/>
            <IncomingQuotation salonName='댕댕냥냥샵' price={100000}/>
          </Flex>
        </Flex>
      </Flex>
      <DuriNavbar />
    </MobileLayout>
  );
};
export default QuotationDetailPage;
