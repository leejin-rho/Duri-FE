import { theme } from "@duri-fe/ui";
import styled from "@emotion/styled";

export const NavBar = styled.div`
  width: 100%;
  max-width: 480px;
  height: 50px;
  background-color: ${theme.palette.Gray700};

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`