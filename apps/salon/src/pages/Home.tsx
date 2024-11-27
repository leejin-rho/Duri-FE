import { MobileLayout } from "@duri-fe/ui";
import styled from "@emotion/styled";

const NavBar = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  background-color: #333;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 480px;
`

const Home = () => {
  return (
    <>
      <MobileLayout>
        <h1>Home</h1>
      </MobileLayout>
      <NavBar />
    </>
  )
};

export default Home;
