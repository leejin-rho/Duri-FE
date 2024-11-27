import React from "react";

import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: white;
`

export const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>
}