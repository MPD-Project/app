import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import "@fortawesome/react-fontawesome";
import { ThemeProvider } from "styled-components";
import { mainColors } from "./styles/mainColors";

function App() {
  return (
    <>
    <ThemeProvider theme={mainColors}>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </ThemeProvider>
    </>
  );
}

export default App;
