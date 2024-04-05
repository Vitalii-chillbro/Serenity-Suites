import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;

      @media (min-width: 320px) and (max-width: 699px) {
        flex-wrap: wrap;
        gap: 2.2rem;
      }
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}

    @media (min-width: 700px) and (max-width: 1439px) {
    flex-wrap: wrap;
    gap: 3rem;
  }
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
