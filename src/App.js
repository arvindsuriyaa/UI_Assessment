import styled from "styled-components";
import Navbar from "./components/layout/navbar/Navbar";
import Content from "./components/layout/content/Content";

function App() {
  const AppWrapper = styled.div`
    width: 100%;
    display: flex;
  `;
  const ContentWrapper = styled.div`
    margin-top: 56px;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
  `;

  return (
    <AppWrapper>
      <Navbar />
      <ContentWrapper>
        <Content />
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
