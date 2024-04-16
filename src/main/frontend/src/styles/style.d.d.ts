// import "styled-components";

// declare module "styled-components" {
//   export interface DefaultTheme {
//     pink: {
//       veryPink: string;
//       lighter: string;
//     };
//     gray: {
//       lighter: string;
//       darker: string;
//     };
//   }
// }

type Colors = {
  primary: string;
  point: string;
};

type LightTheme = {
  color: Colors;
  visible90: string;
  visible80: string;
  visible70: string;
  visible60: string;
  visible50: string;
  visible40: string;
  visible30: string;
  visible20: string;
  visible10: string;
  white: string;
};

type DarkTheme = {
  color: Colors;
  visible90: string;
  visible80: string;
  visible70: string;
  visible60: string;
  visible50: string;
  visible40: string;
  visible30: string;
  visible20: string;
  visible10: string;
  white: string;
};

export { LightTheme, DarkTheme };
