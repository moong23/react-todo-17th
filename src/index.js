import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reset.css";
import "./styles/colors.css";
import { RecoilRoot } from "recoil";

// ReactDOM.render(
//   // <React.StrictMode>
//   <App />,
//   // </React.StrictMode>
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
