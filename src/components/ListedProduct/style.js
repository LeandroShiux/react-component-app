import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "../../assets/delete-icon.svg";

export const Container = styled.div`
  width: calc(100% - 10px);
  margin: 5px;
  border-radius: ${props => props.theme.listedBorderRadius};
  background-color: var(--white);
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
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

export const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.span`
  font-size: 0.9em;
  margin-top: 3px;
  color: var(--lighttext);
`;

export const Quantity = styled.span`
  color: var(--lighttext);
  margin-right: 4px;
`;

export const ProductName = styled.span``;
