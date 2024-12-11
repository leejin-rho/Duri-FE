import { Flex, Text, TextField,theme } from "@duri-fe/ui"
import styled from "@emotion/styled"

interface AmountInputProps {
  title: string;
  menu: string | string[];
  value: number;
  onChange: (value: number) => void;
}

export const AmountInput = ({
  title,
  menu,
  value,
  onChange,
}: AmountInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value))
  }
  return (
    <Flex justify="flex-start" align="flex-start" gap={24}>
      <NonShrinkFlex width={112} justify="flex-start">
        <Text typo="Body3" colorCode={theme.palette.Black}>{title}</Text>
      </NonShrinkFlex>
      <Flex direction="column" align="flex-start" gap={12}>

        {Array.isArray(menu) 
          ? menu.map((item, index) => (
              <Text key={index} typo="Label3" colorCode={theme.palette.Gray300}>{item}</Text>
            ))
          : <Text typo="Label3" colorCode={theme.palette.Gray300}>{menu}</Text>
        }
        
        <Flex gap={8}>
          <TextField 
            value={value}
            onChange={handleChange}
            widthPer="100%"
            placeholder="미용 예상 가격"
            isNoBorder
            shadow="0px 0px 4px 0px rgba(0, 0, 0, 0.10)"
          />
          <Text typo="Body3">원</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}


const NonShrinkFlex = styled(Flex)`
  flex-shrink: 0;
`
