import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Main from "./components/main";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Main />
);
