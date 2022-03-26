import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  bodyBackground: 'hsl(0, 0%, 100%)',
  topBackgroundPattern: 'hsl(225, 100%, 98%)',
  cardBackground: 'hsl(227, 47%, 96%)',
  cardHover: 'hsl(232, 33%, 91%)',
  blueText: 'hsl(228, 12%, 44%)',
  whiteText: 'hsl(230, 17%, 14%)',
  chart: 'hsl(230, 75%, 98%)',
  chartLine: 'hsl(243, 49%, 70%)',
  topchartBackground: 'hsl(230, 75%, 98%)',
  chartBackground: 'hsl(0, 0%, 100%)',
}
export const darkTheme = {
  bodyBackground: 'hsl(230, 17%, 14%)',
  topBackgroundPattern: 'hsl(232, 19%, 15%)',
  cardBackground: 'hsl(228, 28%, 20%)',
  cardHover: 'hsl(228, 26%, 27%)',
  blueText: 'hsl(228, 34%, 66%)',
  whiteText: 'hsl(0, 0%, 100%)',
  chart: 'hsl(232, 19%, 15%)',
  chartLine: 'hsl(243, 49%, 70%)',
  topchartBackground: 'hsl(232, 19%, 15%)',
  chartBackground: 'hsl(225, 17%, 14%)',

}

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${(props) => props.theme.bodyBackground};;
    transition: all 300ms cubic-bezier(0.250, 0.460, 0.450, 0.940);
  }
  h2{
    color:${(props) => props.theme.whiteText};
    font-size:28px;
    transition: all 300ms cubic-bezier(0.250, 0.460, 0.450, 0.940);
    font-weight:700;
  }
  h3{
    color:${(props) => props.theme.blueText};
    font-size:14px;
    transition: all 300ms cubic-bezier(0.250, 0.460, 0.450, 0.940);
  }
`;
