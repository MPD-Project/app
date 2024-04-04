import "styled-components";


declare module "styled-components" {
  export interface DefaultTheme {
    pink: {
      veryPink: string,
      lighter: string,
    },
    gray: {
      lighter: string,
      darker: string,
    },
  }
};