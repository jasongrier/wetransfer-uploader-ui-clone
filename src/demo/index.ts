import { StrictMode, createElement as e } from "react";
import { render } from "react-dom";
import Demo from "./Demo";

render(e(StrictMode, {}, e(Demo, {}, "Foo")), document.getElementById("root"));
