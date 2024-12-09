import { Flex, MobileLayout } from "@duri-fe/ui"
import { TabBarItem } from "@salon/components/quotation/TabBarItem"

export const QuotationPage = () => {
  return (
    <MobileLayout>
      <Flex height={60} padding="0 20px" gap={16} justify="flex-start">
        <TabBarItem label="견적" selected typo='Body1' fitContent />
        <TabBarItem label="예약" selected={false} typo='Body1Light' fitContent />
      </Flex>
      <Flex height={48} justify="flex-start">
        <TabBarItem label="새로운 견적 요청" selected typo='Title3'/>
        <TabBarItem label="답장한 견적" selected={false} typo='Body3' />
      </Flex>
    </MobileLayout>
  )
}