import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  :root{
    --color-primary: #FF98BD;
    --color-point: #FE2F6E;
    --color-black90: #262626;
    --color-black80: #3C3C3C;
    --color-black70: #515151;
    --color-black60: #676767;
    --color-black50: #7D7D7D;
    --color-black40: #A8A8A8;
    --color-black30: #BEBEBE;
    --color-black20: #D4D4D4;
    --color-black10: #E9E9E9;
    --color-white: #FFFFFF;
  }
  ${reset};

  #root {
    font-family: "Pretendard Variable", "Pretendard", -apple-system, "BlinkMacSystemFont", system-ui, "Roboto", "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",  "Segoe UI Symbol", sans-serif;
    font-size: 16px;
  }
  
 * {
    padding:0;
    margin:0;
    box-sizing:border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    color:inherit;
    text-decoration: none;
  }
`;
