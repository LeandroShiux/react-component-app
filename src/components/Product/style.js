import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: ${props => props.theme.productBorderRadius};

  > img {
    width: 140px;
    height: 140px;
    transition: 0.2s;
  }

  :hover > img{
    transform: scale(1.1);
  }

  @media (min-width: 500px) {
    > img {
      width: 180px;
      height: 180px;
    }
  }
`;

export const ProductName = styled.span`
  margin: 7px 0px;
  color: var(--text);
`;
export const Price = styled.span`
  color: var(--text);
  margin-bottom: 7px;
`;

export const Quantity = styled.span`
  background-color: var(--white);
  color: var(--text);
  padding: 5px 10px;
  border-radius: 10px;
`;

export const Caption = styled.div`
  width: 100%;
  padding: 5px;
  border-radius: ${props => props.theme.captionBorderRadius};
  /* background-color: #f3f2f2; */
  background-color: var(--lightgray);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SelectButtons = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 10px;
  align-items: center;
  justify-content: space-between;
`;
const baseButton = css`
  padding: 4px 9px;
  cursor: pointer;
  transition: 0.2s;
  margin-right: 3px;
  border-radius: ${props => props.theme.buttonBorderRadius};
  width: 29px;
  height: 29px;
  font-weight: 500;
  color: #fff;
`;

export const AddButton = styled.button`
  ${baseButton}
  :hover, :active {
    background-color: transparent;
    color: var(--primary);
  }
  background-color: var(--primary);
  border: 1px solid var(--primary);
`;
export const SubButton = styled.button`
  ${baseButton}
  :hover, :active {
    background-color: transparent;
    color: var(--red);
  }
  background-color: var(--red);
  border: 1px solid var(--red);
`;
