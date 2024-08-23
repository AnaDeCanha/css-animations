import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#C99AB6",
  secondary: "#FFF7EF",
  accent: "#5B0D3B",
  background: "secondary",
  text: "#111111",
};

export const GlobalStyles = createGlobalStyle`
  a {
    text-decoration: none;
    color: ${colors.accent};
    
    span {
      transition: color 0.3s ease;
    }

    &:hover {
      span {
        text-decoration: underline;
      }
    }
  }
`;
