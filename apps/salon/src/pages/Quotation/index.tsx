import { Card, Flex, MobileLayout, PetInfo, SalonNavbar, theme } from "@duri-fe/ui"
import { TabBarItem } from "@salon/components/quotation/TabBarItem"

export const QuotationPage = () => {
  return (
    <MobileLayout backgroundColor={theme.palette.Gray_White}>
      <Flex height={60} padding="0 20px" gap={16} justify="flex-start" backgroundColor={theme.palette.White}>
        <TabBarItem label="견적" selected typo='Body1' fitContent />
        <TabBarItem label="예약" selected={false} typo='Body1Light' fitContent />
      </Flex>
      <Flex height={48} justify="flex-start" backgroundColor={theme.palette.White}>
        <TabBarItem label="새로운 견적 요청" selected typo='Title3'/>
        <TabBarItem label="답장한 견적" selected={false} typo='Body3' />
      </Flex>

      <Flex direction="column" gap={8} padding="30px 20px">
        <Card borderRadius={12} padding="6px">
          <PetInfo 
            name="신참이"
            breed="시츄"
            gender="F"
            age={7}
            weight={7.3}
            imageSize={100}
            imageBorderRadius={8}
            neutering={true}
          />
        </Card>
      </Flex>

      <SalonNavbar />
    </MobileLayout>
  )
}