import React from "react";
import ReactDOM from "react-dom";

const title = "Web UI";

ReactDOM.render(<div>{title}</div>, document.getElementById("app"));

module.hot.accept();
