import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  :root{
    --color-primary: ${(props) => props.theme.color.primary};
    --color-point: ${(props) => props.theme.color.point};
    --color-bgColor: ${(props) => props.theme.bgColor};
    --color-visible90: ${(props) => props.theme.visible90};
    --color-visible80: ${(props) => props.theme.visible80};
    --color-visible70: ${(props) => props.theme.visible70};
    --color-visible60: ${(props) => props.theme.visible60};
    --color-visible50: ${(props) => props.theme.visible50};
    --color-visible40: ${(props) => props.theme.visible40};
    --color-visible30: ${(props) => props.theme.visible30};
    --color-visible20: ${(props) => props.theme.visible20};
    --color-visible10: ${(props) => props.theme.visible10};
    --color-visible00: ${(props) => props.theme.visible00};
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
