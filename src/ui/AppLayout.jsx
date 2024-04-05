import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;

  @media (min-width: 320px) and (max-width: 699px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    overflow: hidden;
  }

  @media (min-width: 700px) and (max-width: 1439px) {
    grid-template-columns: 20.6rem 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-0);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;

  @media (min-width: 320px) and (max-width: 699px) {
    padding: 1rem 0.8rem 6.4rem;
  }
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsSidebarOpen((cur) => !cur);
  };

  return (
    <StyledAppLayout>
      <Header isOpen={isSidebarOpen} onBurgerClick={handleBurgerClick} />
      <Sidebar isOpen={isSidebarOpen} onOpen={handleBurgerClick} />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
