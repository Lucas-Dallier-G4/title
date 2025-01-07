import React from "react";
import Title from "./Title";
export function SubTitle({ text = "black" }) {
    return (React.createElement("div", null,
        React.createElement("h2", null, text)));
}
export default Title;
