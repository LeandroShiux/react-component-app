import styled from 'styled-components';

export const Container = styled.div`

  /* width: ${props=> props.showSidebar ? "calc(100% - var(--sidebar-size))":"100%"}; */
  margin-left: auto;
  margin-right: auto;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h3{
    width: 90%;
    padding: 20px;
    text-align: left;
    color: var(--text);
  }
  @media (min-width: 1200px){
    padding-right: var(--sidebar-size);
  }
`;
