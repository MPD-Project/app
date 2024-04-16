import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import "@fortawesome/react-fontawesome";
import { ThemeProvider } from "styled-components";
import { light, dark } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
// import { mainColors } from "./styles/mainColors";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <GlobalStyle />
        <RouterProvider router={routers} />
      </ThemeProvider>
    </>
  );
}

export default App;
