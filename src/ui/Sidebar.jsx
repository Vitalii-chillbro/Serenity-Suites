import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (min-width: 320px) and (max-width: 699px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    top: 0;
    height: 100vh;
    width: 100vw;
    justify-content: center;
  }
`;

const Sidebar = ({ isOpen, onOpen }) => {
  return (
    <StyledSidebar isOpen={isOpen}>
      <Logo />
      <MainNav onOpen={onOpen} />
    </StyledSidebar>
  );
};

export default Sidebar;
