import styled from "styled-components";

export const Container = styled.div`
  grid-area: brand;
  cursor: pointer;
  transition: 0.2s;
  color: var(--white);
  font-style: ${props=> props.theme.brandFont};
  font-weight: ${props=> props.theme.brandFontWeight};
  :hover {
    color: var(--lightwhite);
  }
  @media (max-width: 500px){
    padding-left: 20px;
  }
`;
