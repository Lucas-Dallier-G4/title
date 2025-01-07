import React from "react";
import { DatabaseBackup } from "../node_modules/lucide-react/dist/lucide-react";
export function Title({ text = "black" }) {
    return (React.createElement("div", null,
        React.createElement("h1", null, text),
        React.createElement(DatabaseBackup, { size: 24 })));
}
export default Title;
