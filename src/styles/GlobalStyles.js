import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: ${props=> props.theme.font};
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  :root {
    /* --primary: 	#92a65f;
    --secondary: #dcde9f; */
    --primary: 	${props=> props.theme.primary};
    --secondary: ${props=> props.theme.secondary};
    --red: ${props=> props.theme.red};
    --white: ${props=> props.theme.white};
    --text: ${props=> props.theme.text};
    --lighttext: ${props=> props.theme.lighttext};
    --lightgray: ${props=> props.theme.lightgray};
    --lightwhite: ${props=> props.theme.lightwhite};

    --shadow1: 0 0.9px 1.5px rgba(0, 0, 0, 0.03),
    0 3.1px 5.5px rgba(0, 0, 0, 0.08), 0 14px 25px rgba(0, 0, 0, 0.12);

    --sidebar-size: 340px;
    --header-size: 58px;

    @media (max-width: 500px){
      --header-size: 116px;
    }

  }

  body{
    background-color: var(--secondary);
  }

`;
