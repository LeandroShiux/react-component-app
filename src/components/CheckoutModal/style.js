import styled from 'styled-components';

export const Body = styled.div`
  position: relative;
  min-width: 35vw;
  /* min-height: 45vh; */
  /* padding-top: 40px; */
`;

export const Button = styled.button`
  position: absolute;
  background-color: var(--lightgray);
  color: var(--text);
  padding: 5px 10px;
  border-radius: 50%;
  right: 5px;
  top: -25px;
  cursor: pointer;

  :hover{
    background-color: var(--lighttext);
  }

`;

