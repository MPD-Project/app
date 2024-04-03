import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
