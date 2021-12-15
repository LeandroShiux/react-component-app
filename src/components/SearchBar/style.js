import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

export const Container = styled.div`
  grid-area: searchbar;
  position: relative;
  width: 35%;
  input {
    border-radius: ${(props) => props.theme.searchBarBorderRadius};
  }

  input {
    width: 100%;
    padding: 10px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const SearchButton = styled(SearchIcon)`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: 24px;
  height: 24px;
  fill: var(--text);

  cursor: pointer;
  :hover {
    fill: var(--lighttext);
  }
`;
