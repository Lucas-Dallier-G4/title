import React from "react";
import { DatabaseBackup } from "lucide-react";

type TitleProps = {
  text: string;
  color?: string;
};

export function Title({ text = "black" }: TitleProps) {
  return (
    <div>
      <h1>{text}</h1>
      <DatabaseBackup size={24} />
    </div>
  );
}

export default Title;
