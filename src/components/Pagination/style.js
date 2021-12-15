import styled from "styled-components";

export const Container = styled.nav`
  ul {
    margin: 10px;
    list-style: none;
    display: flex;
  }

  li:first-child button {
    -moz-border-radius-topleft: 7px;
    -moz-border-radius-topright: 7px;
    -webkit-border-top-left-radius: 7px;
    -webkit-border-top-right-radius: 7px;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
  }

  li:last-child button {
    -moz-border-radius-bottomleft: 7px;
    -moz-border-radius-bottomright: 7px;
    -webkit-border-bottom-left-radius: 7px;
    -webkit-border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: var(--white);
  color: var(--text);
  font-weight: ${(props) => (props.current ? 700 : 400)};
  padding: 10px;
  :hover {
    background-color: var(--lightgray);
  }
`;
