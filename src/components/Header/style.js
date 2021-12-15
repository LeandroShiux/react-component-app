import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
  height: var(--header-size);
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--primary);

  > * {
    margin-right: 15px;
  }

  + div{
    padding-top: var(--header-size);
  }

  @media (max-width: 500px){
    display: grid;
    grid-template-areas: "brand cart" "searchbar searchbar"
  }

`;
