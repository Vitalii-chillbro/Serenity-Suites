import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (min-width: 320px) and (max-width: 699px) {
    flex-wrap: wrap;
  }

  @media (min-width: 700px) and (max-width: 1439px) {
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

export default TableOperations;
