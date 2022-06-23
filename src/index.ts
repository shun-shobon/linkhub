import globalStyle from "./index.css";
import resetStyle from "the-new-css-reset/css/reset.css";

import { Layout } from "./components/Layout";
import { Hello } from "./components/Hello";

customElements.define("x-layout", Layout);
customElements.define("x-hello", Hello);

const resetStyleElement = document.createElement("style");
resetStyleElement.innerHTML = resetStyle;
document.body.append(resetStyleElement);
const globalStyleElement = document.createElement("style");
globalStyleElement.innerHTML = globalStyle;
document.body.append(globalStyleElement);
