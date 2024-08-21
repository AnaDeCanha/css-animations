import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
    
    span {
      color: "primary";
      transition: color 0.3s ease;
    }

    &:hover {
      span {
        text-decoration: underline;
      }
    }
  }
`;

export const colors = {
  primary: "#C99AB6",
  secondary: "#FFF7EF",
  accent: "#5B0D3B",
  background: "secondary",
  text: "#111111",
};
