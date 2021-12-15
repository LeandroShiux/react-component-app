import styled from 'styled-components';

export const Container = styled.div`
  width: fit-content;
  display: grid;
  margin-top: 7px;
  grid-gap: ${props => props.theme.catalogGap};
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;

  @media (max-width: 1000px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 700px){
    grid-template-columns: repeat(2, 1fr);
  }
  
`;
