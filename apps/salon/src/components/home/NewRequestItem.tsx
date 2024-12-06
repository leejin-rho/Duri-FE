import { Flex, theme } from "@duri-fe/ui";
import styled from "@emotion/styled";

const NewRequestItem = () => {
  return (
    <ItemWrapper width={208} height={281} borderRadius={8} backgroundColor={theme.palette.Normal50}>

    </ItemWrapper>
  );
}

const ItemWrapper = styled(Flex)`
  border: 1px solid ${theme.palette.Normal600};
  flex-shrink: 0;
`

export default NewRequestItem;