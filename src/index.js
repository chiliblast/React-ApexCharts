import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
//import Piechart from "./components/piechart";
import Areachart from "./components/areachart";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Areachart />
  </StrictMode>
);
