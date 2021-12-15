import styled from "styled-components";

export const Container = styled.div`
  height: calc(100% - 60px);
  h3,
  h2,
  h1,
  th {
    color: var(--text);
  }

  h3 > a {
    text-decoration: underline;
  }
`;

export const WrapperBox = styled.div`
  min-height: 300px;
  background-color: var(--white);
  margin: 30px 60px;
  padding: 15px;
  border-radius: ${props=> props.theme.wrapperBoxBorderRadius};

  @media (max-width: 768px) {
    margin: ${props=> props.theme.wrapperBoxMobileMargin};
    padding: 5px;
    border-radius: ${props=> props.theme.wrapperBoxBorderRadiusMobile};
  }
`;

export const Title = styled.span`
  color: var(--text);
  padding: 10px;
`;

export const CartTable = styled.table`
  margin: 5px;
  th {
    padding: 10px 20px;
    @media (max-width: 500px) {
      padding: 5px;
    }
  }
  th,
  td {
    border: 1px solid var(--lighttext);
  }
`;

export const TableContainer = styled.div`
  overflow-x: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
  flex-wrap: wrap;
`;
