import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes"

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(<App />, document.getElementById("root"));
    ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>, document.getElementById("root"));