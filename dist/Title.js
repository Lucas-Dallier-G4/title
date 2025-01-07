import * as React from "react";
export function Title({ text = "black" }) {
    return React.createElement("h1", null, text);
}
export default Title;
