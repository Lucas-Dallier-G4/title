import React from "react";
import Title from "./Title";

type TitleProps = {
  text: string;
  color?: string;
};

export function SubTitle({ text = "black" }: TitleProps) {
  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
}

export default Title;
