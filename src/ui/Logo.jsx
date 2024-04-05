import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;

  @media (min-width: 320px) and (max-width: 699px) {
    height: 14.6rem;
  }

  @media (min-width: 700px) and (max-width: 1439px) {
    max-width: 16.3rem;
    height: 12.6rem;
  }
`;

const H4 = styled.h4`
  font-size: 2.3rem;
`;

const Logo = () => {
  return (
    <StyledLogo>
      <Img src="/logo-light.png" alt="Logo" />
      <H4>Serenity Suites</H4>
    </StyledLogo>
  );
};

export default Logo;
