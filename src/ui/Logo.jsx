import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Img src="/logo-light.png" alt="Logo" />
      <h4>🌳Serenity Suites🌳</h4>
    </StyledLogo>
  );
};

export default Logo;
