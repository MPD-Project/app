import React from "react";
import "@fortawesome/fontawesome-free/js/all.js";
import { GlobalStyle } from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
