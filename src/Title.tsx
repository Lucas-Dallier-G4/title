import * as React from "react";

type TitleProps = {
  text: string;
  color?: string;
};

export function Title({ text = "black" }: TitleProps) {
  return <h1>{text}</h1>;
}

export default Title;
