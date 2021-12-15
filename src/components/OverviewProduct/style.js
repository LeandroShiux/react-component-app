import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../../assets/delete-icon.svg";

export const Container = styled.tr`
  margin: 5px;
  background-color: var(--white);
  padding: 1em 2em;
  > td {
    text-align: center;
    padding: 20px;
    @media (max-width: 500px) {
      padding: 8px;
    }
  }
`;

export const DeleteButton = styled(DeleteIcon)`
  width: 24px;
  cursor: pointer;
  height: 24px;
  fill: var(--text);
  :hover {
    fill: var(--lighttext);
  }
`;

export const Price = styled.td`
  color: var(--lighttext);
`;

export const Quantity = styled.td`
  color: var(--lighttext);
  margin-right: 4px;
`;

export const ProductName = styled.td`
  color: var(--text);
`;
