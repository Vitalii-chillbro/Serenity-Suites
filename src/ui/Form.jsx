import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);

      @media (min-width: 320px) and (max-width: 699px) {
        padding: 1.4rem 2rem;
      }

      @media (min-width: 700px) and (max-width: 1439px) {
        padding: 1.7rem 3rem;
      }
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;

      @media (min-width: 320px) and (max-width: 699px) {
        width: 35rem;
      }
      @media (min-width: 700px) and (max-width: 1439px) {
        width: 50rem;
      }
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
