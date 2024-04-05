import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

const BurgerIcon = styled.span`
  display: none;
  position: absolute;
  top: 0;
  left: 25px;
  font-size: 44px;

  @media (min-width: 320px) and (max-width: 699px) {
    display: block;
  }
`;

const CloseIcon = styled.span`
  display: none;
  position: absolute;
  top: 3px;
  right: 22px;
  font-size: 40px;

  @media (min-width: 320px) and (max-width: 699px) {
    display: block;
  }
`;

const Header = ({ isOpen, onBurgerClick }) => {
  return (
    <StyledHeader>
      {isOpen ? (
        <CloseIcon onClick={onBurgerClick}>&#1061;</CloseIcon>
      ) : (
        <BurgerIcon isOpen={isOpen} onClick={onBurgerClick}>
          &#9776;
        </BurgerIcon>
      )}

      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
};

export default Header;
